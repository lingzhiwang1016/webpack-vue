/* eslint object-shorthand: 0, no-restricted-globals: 0 */
import Util from "@/assets/js/util";
const srcReg = /\b(static\/car|null|undefined)\b/;

function photoloupe(el, opt) {
    // 默认配置配置项
    const defaultOpt = {
        width: 320,
        height: 320,
        maskWidth: 60,
        maskHeight: 60,
        maskColor: "#3485E1",
        maskOpacity: 0.5
    };

    // 事件监听器
    this.mouseenterListener = null;
    this.mouseleaveListener = null;
    this.mousemoveListener = null;

    this.imgObj = {};
    this.bigImg = {};
    this.dataSrc = "";
    this.mouseMask = {};
    this.imgLayer = {};
    this.imgCon = {};
    this.imgRect = {};
    this.configs = opt || defaultOpt;

    // 事件初始化
    this.init(el);
}

photoloupe.prototype = {
    constructor: photoloupe,
    // 初始化事件监听器
    init: function (el) {
        const target = el;
        this.mouseenterListener = Util.listener(target, "mouseover", (e) => {
            if (!document.querySelector("#vk-magnifier-layer")) {
                this.imgObj = e.target;
                this.imgRect = this.imgObj.getBoundingClientRect();
                this.bigImg = new Image();
                this.bigImg.src = this.imgObj.currentSrc;
                this.dataSrc = this.imgObj.dataset.src;

                /**
                * 如果当前data-src的为字符串null或者undefined
                * 说明当前图片地址数据为空
                * 则不执行dom生成操作
                */

                if (srcReg.test(this.bigImg.src)) return;

                // 创建鼠标选择区域
                if (!document.querySelector(".vk-magnifier-zoom")) {
                    this.mouseMask = document.createElement("div");
                    this.mouseMask.className = "vk-magnifier-zoom";
                    this.mouseMask.style.background = this.configs.maskColor;
                    this.mouseMask.style.height = `${this.configs.maskWidth}px`;
                    this.mouseMask.style.width = `${this.configs.maskHeight}px`;
                    this.mouseMask.style.opacity = this.configs.maskOpacity;
                    this.imgObj.parentNode.appendChild(this.mouseMask);
                }

                // 创建预览框
                const imgLayer = document.createElement("div");
                this.imgLayer = imgLayer;
                const layerHeight = this.configs.height;
                const layerWidth = this.configs.width;
                imgLayer.id = "vk-magnifier-layer";
                imgLayer.style.width = `${layerWidth}px`;
                imgLayer.style.height = `${layerHeight}px`;
                imgLayer.style.left = `${this.imgRect.width + this.imgRect.left}px`;
                imgLayer.style.top = `${this.imgRect.top}px`;
                imgLayer.style.backgroundImage = `url('${this.imgObj.currentSrc}')`;
                imgLayer.style.backgroundRepeat = "no-repeat";
                document.body.appendChild(imgLayer);
            }
        });
        this.mouseleaveListener = Util.listener(target, "mouseout", (e) => {
            // if (srcReg.test(this.dataSrc)) return;
            const imgEl = document.querySelector("#vk-magnifier-layer");
            const maskEl = document.querySelector(".vk-magnifier-zoom");
            if (imgEl) imgEl.remove();
            if (maskEl) maskEl.remove();
            // this.imgLayer.remove();
            // this.mouseMask.remove();
        });
        this.mousemoveListener = Util.listener(target, "mousemove", (e) => {
            // if (srcReg.test(this.dataSrc)) return;
            // 获取鼠标指针与当前img边框的距离
            const objX = e.pageX - this.imgRect.left;
            const objY = e.pageY - this.imgRect.top;

            // 获取鼠标选择区域左上角距离img边框的距离
            let maskX = objX - this.mouseMask.offsetHeight / 2;
            let maskY = objY - this.mouseMask.offsetWidth / 2;

            // 判断是否超出界限
            if (maskY <= 0) maskY = 0;
            if (maskY + this.mouseMask.offsetHeight >= this.imgRect.height) {
                maskY = this.imgRect.height - this.mouseMask.offsetHeight;
            }
            if (maskX <= 0) maskX = 0;
            if (maskX + this.mouseMask.offsetWidth >= this.imgRect.width) {
                maskX = this.imgRect.width - this.mouseMask.offsetWidth;
            }

            if (isNaN(maskX)) return;
            this.mouseMask.style.webkitTransform = `translate3d(${maskX}px,${maskY}px,0)`;
            // 计算大图坐标点
            let backgroundX = maskX * (this.bigImg.width / this.imgObj.offsetWidth);
            let backgroundY = maskY * (this.bigImg.height / this.imgObj.offsetHeight);

            // 判断背景图是否小于预览框
            if (backgroundY + this.configs.height >= this.bigImg.height) {
                backgroundY = this.bigImg.height - this.configs.height;
            }
            if (backgroundX + this.configs.width >= this.bigImg.width) {
                backgroundX = this.bigImg.width - this.configs.width;
            }

            this.imgLayer.style.backgroundPositionX = `-${backgroundX}px `;
            this.imgLayer.style.backgroundPositionY = `-${backgroundY}px `;
        });
    },
    clear: function () {
        this.mouseenterListener = null;
        this.mouseleaveListener = null;
        this.mousemoveListener = null;
    }
};

export default photoloupe;
