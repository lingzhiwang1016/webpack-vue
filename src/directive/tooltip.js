/* eslint object-shorthand: 0, no-param-reassign:0 */

import Util from "@/assets/js/util";

const getScrollValue = (el) => {
    let scrollLeft = el.scrollLeft;
    let scrollTop = el.scrollTop;
    while (el.parentElement) {
        scrollLeft += el.scrollLeft;
        scrollTop += el.scrollTop;
        el = el.parentElement;
    }
    return {
        scrollLeft,
        scrollTop
    };
};

let instancePool = [];

// 定义 tip instance 方法
const instanceAction = () => {
    const push = (instance) => {
        instancePool.push(instance);
    };
    return {
        pushInstance: push
    };
};
// 获取到绑定元素在当前页面上距离左边的距离
// 尾递归优化
const getElementViewLeft = (startLeft, element) => {
    startLeft += element.offsetLeft;
    const current = element.offsetParent;
    if (current) {
        return getElementViewLeft(startLeft, current);
    } else {
        return startLeft;
    }
};


// 获取到绑定元素在当前页面上位置高度
// 尾递归优化
const getElementViewTop = (startTop, element) => {
    startTop += element.offsetTop;
    const current = element.offsetParent;
    if (current) {
        return getElementViewTop(startTop, current);
    } else {
        return startTop;
    }
};

function getStyle(node, style) {
    return +window.getComputedStyle(node, null).getPropertyValue(style).split("px")[0];
}

function tooltip(el, opt) {
    const items = el.querySelectorAll(".el-form-item");
    for (const item of items) {
        const target = item.firstChild;
        // 如果定义了一个 label 为空的时候的 form-item， label 部分为 before 元素， 但是还是可以这个时候 className 为 null
        if (target.className) {
            instanceAction().pushInstance({
                tip: null, target, message: target.innerText, offset: 0, class: "vk-tooltip"
            });
        }
    }
    this.el = el;
    this.scrollListener = null;
    this.mouseenterListener = null;
    this.mouseleaveListener = null;
    this.init();
    // target：传入的DOM
    // this.target = el;
    // tip：用来放初始化创建的tip元素
    // this.tip = null;
    // this.message = (opt && opt.msg) || this.target.innerText;
    // this.offset = (opt && +opt.offset) || 0;
    // this.class = "vk-tooltip";
    // instanceAction.push();
    // this.init();
}

tooltip.prototype = {
    constructor: tooltip,
    // 初始化tip，添加事件监听
    init: function () {
        const me = this;
        const isChrome = navigator.userAgent.indexOf("Chrome") > -1;
        // 鼠标进入才创建标签
        for (let instance of instancePool) {
            const {
                target, tip, message, offset
            } = instance;
            let isOverFlow = true;
            if (isChrome) {
                // 对于 chrome 浏览器
                isOverFlow = target.offsetWidth - target.scrollWidth < 0;
            } else {
                // 对于非chrome浏览器，使用字数进行计算
                const paddingRight = getStyle(target, "padding-right");
                const paddingLeft = getStyle(target, "padding-left");
                const fontWid = 13;
                isOverFlow = message.length > (target.offsetWidth - paddingRight - paddingLeft) / fontWid;
            }
            if (!isOverFlow) continue;
            this.mouseenterListener = Util.listener(target, "mouseenter", () => {
                instance = me.createTip(instance);
                instance.tip.style.opacity = 1;
                this.scrollListener = Util.listener(window, "scroll", () => {
                    me.setTipPlace(instance.tip, instance.target, instance.offset);
                    instance.tip.style.opacity = 0;
                });
            });
            this.mouseleaveListener = Util.listener(target, "mouseleave", () => {
                instance.tip.style.opacity = 0;
                this.scrollListener.remove();
            });
        }
    },

    createTip(instance) {
        const me = this;
        const poppup = "<div class='triangle-down'></div>";
        const cache = document.getElementsByClassName(instance.class);
        // 如果存在一个tip标签则使用该标签
        instance.tip = cache.length ? cache[0] : document.createElement("div");
        instance.tip.className = instance.class;
        instance.tip.innerHTML = `${instance.message}${poppup}`;
        document.body.appendChild(instance.tip);
        if (!me.tip) {
            me.tip = instance.tip;
        }
        me.setTipPlace(instance.tip, instance.target, instance.offset);
        return instance;
    },

    // 设置tip显示的位置
    setTipPlace: function (tip, target, offset) {
        const scrollValue = getScrollValue(this.el);
        const distance = (tip.clientWidth - target.clientWidth) / 2;
        const pageX = `${getElementViewLeft(0, target) - scrollValue.scrollLeft - distance + offset}px`;
        const pageY = `${getElementViewTop(0, target) - target.clientHeight - scrollValue.scrollTop}px`;
        tip.style.left = pageX;
        tip.style.top = pageY;
    },
    clear: function () {
        instancePool = [];
        if (this.tip) {
            this.tip.parentNode.removeChild(this.tip);
        }
        if (this.mouseenterListener) {
            this.mouseenterListener.remove();
        }
        if (this.mouseleaveListener) {
            this.mouseleaveListener.remove();
        }
        this.mouseenterListener = null;
        this.mouseleaveListener = null;
        this.scrollListener = null;
    }
};

export default tooltip;


// /**
//  * @description 因为el的tooltip展示需要用到组件，这里用指令进行tooltip展示
//  * @example <div v-tips>此处为被缩略的文本内容</div>
//  * @param opt v-tips="opt" 可以传入配置对象, msg 展示信息, offset X轴偏移量
//  * 在元素插入DOM时，创建tooltip实例。
//  */
// Vue.directive("tips", {
//     bind: (el) => {
//         console.log(el);
//     },
//     // 当绑定元素插入到 DOM 中。
//     inserted: (el, { value }) => {
//         // 暂时针对el-form的label标签，所以指定firsChild
//         this.instance = new VkTooltip(el.firstChild, value);
//     },
//     // 解除绑定的时候清除实例以及标签,清除事件监听
//     unbind: (el) => {
//         this.instance.clear();
//     }
// });
