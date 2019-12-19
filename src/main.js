/* eslint new-cap: 0 ,no-const-assign:0 , no-param-reassign: 0,no-confusing-arrow:0, no-new: 0, no-console: 0 */
// transform-runtime 的 polyfill 支持 Set, Map, Promise
// 但是不支持 includes 等的 polyfill, 因而还需 babel-polyfill
import "babel-polyfill";
import Vue from "vue";
// import Axios from "axios";
// import VueAxios from "vue-axios";
// import VueLazyLoad from "vue-lazyload";
// import AsyncComputed from "vue-async-computed";
// import ElementUI, { Message, Loading } from "element-ui";
// import Storage from "store/dist/store.legacy";
// import ExpirePlugin from "store/plugins/expire";

import App from "@/app.vue";
import store from "@/store";
import router from "@/router";
// import API from "@/assets/js/api";
// // import Util from "@/assets/js/util";
// import VueLog from "@/plugins/vueLog";
// import Config from "@/assets/js/config";
// import VkTable from "vk-pc-component/packages/vk-table";
// import vkSearchHolder from "vk-pc-component/packages/vk-search-holder";
// import VkTransition from "vk-pc-component/packages/vk-transition";
// import VkImportExcel from "vk-pc-component/packages/vk-import-excel";
// import multiCascader from "multi-cascader-base-ele";
// import VkTooltip from "@/directive/tooltip";
// import VkPhotoloupe from "@/directive/photoloupe";
// import VueStorage from "@/plugins/vueStorage";
// import { GET_MENU_PERMISSION, LOGIN_FAILURE } from "@/store/types";
// import Dict from "@/assets/js/dictUtil";

// import Raven from "raven-js";
// import RavenVue from "raven-js/plugins/vue";

// import handleCopy from "@/directive/copy";

// Storage.addPlugin(ExpirePlugin);

// // 生产环境禁用 Vue 开发工具检查（vue-devtool）
// Vue.config.devtools = Config.env !== "production";
// // 生产环境保持静默（不打印 Vue logs & warning）
// Vue.config.silent = Config.env === "production";
// // 生产环境干掉开发工具提示打印
// Vue.config.productionTip = Config.env !== "production";

// Vue.use(ElementUI);
// Vue.use(multiCascader);
// Vue.use(VkTable);
// Vue.use(VkTransition);
// Vue.use(vkSearchHolder);
// Vue.use(VkImportExcel);
// Vue.use(AsyncComputed);
// Vue.use(VueAxios, Axios);
// Vue.use(VueLog);
// Vue.use(VueStorage, Storage);

// /**
//  * 图片懒加载
//  * adapter里添加了监听图片加载错误的处理，图片加载失败会尝试加载
//  * 当且仅当图片地址为空时，不去尝试加载
// */
// Vue.use(VueLazyLoad, {
//     error: require("./assets/img/car-error.png"),
//     loading: require("./assets/img/car-default.png"),
//     attempt: 2,
//     adapter: {
//         error(listener, init) {
//             if (!listener.src) return;
//             const url = /\?/.test(listener.src)
//                 ? `${listener.src}&time=${+new Date()}`
//                 : `${listener.src}?time=${+new Date()}`;
//             listener.el.src = url;
//         }
//     }
// });

// // Sentry Init
// if (Config.env === "production") {
//     Raven
//         .config("https://e5312b915b27458f9153697bd40ab047@sentry.maysatech.com/10")
//         .addPlugin(RavenVue, Vue)
//         .install();
// }

// // Directive
// Vue.directive("focus", {
//     // 当绑定元素插入到 DOM 中。
//     inserted: (el, { value }) => {
//         if (value) {
//             el.focus();
//         }
//     }
// });

// /**
//  * @description v-tips 用于当弹窗字段太长的时候显示 tooltip 显示全部文字
// */
// let vkTooltipInstance;
// Vue.directive("tips", {
//     bind: (el) => {
//     },
//     // 当绑定元素插入到 DOM 中。
//     inserted: (el, { value }) => {
//         // 暂时针对el-form的label标签，所以指定firsChild
//         vkTooltipInstance = new VkTooltip(el, value);
//     },
//     // 解除绑定的时候清除实例以及标签,清除事件监听
//     unbind: (el) => {
//         vkTooltipInstance.clear();
//     }
// });

// /**
//  * @description v-loupe 绑定到需要放大的图片dom上
//  * img的父级元素需要添加vk-magnifier类
// */
// let vkPhotoloupeInstance;
// Vue.directive("loupe", {
//     // 当绑定元素插入到 DOM 中。
//     inserted: (el, { value }) => {
//         vkPhotoloupeInstance = new VkPhotoloupe(el, value);
//     },
//     // 解除绑定的时候清除实例以及标签,清除事件监听
//     unbind: (el) => {
//         vkPhotoloupeInstance.clear();
//     }
// });

// /**
//  * @description v-copy 用于复制元素内容
//  * @example v-copy="value" value {String} 需要进行复制的变量值
//  * 例如 <el-form-item v-copy="url">{{ url }}</el-form-item>
//  * 或者 <span v-copy="url">{{ url }}</span>
// */
// Vue.directive("copy", {
//     inserted: (el, binding, vnode) => {
//         handleCopy(el, binding, vnode);
//     },
//     update: (el, binding, vnode) => {
//         handleCopy(el, binding, vnode);
//     }
// });

// /**
//  * mixin 全局注入，可合并生命周期
//  */
// const mixin = {
//     methods: {
//         /**
//          * @param operate 传入add、update、delete、read字符串
//          * @param auth 这个参数可以自己传入，默认在当前路由meta里的auth里取
//          * @return 返回true或者false
//          */
//         permissionCheck(operate, auth) {
//             const route = this.$route;
//             const authName = auth || (route.meta && route.meta.auth || route.name);
//             const authList = store.getters[GET_MENU_PERMISSION](authName);

//             return authList.includes(operate);
//         },
//         // 字典翻译
//         getCnType(type, val) {
//             const me = this;
//             if (val === null) {
//                 return val;
//             }
//             const isCn = Number.isNaN(+val);
//             const cnType = me.types[type].filter(item => isCn ? (item.value === val) : (+item.value === +val))[0];
//             return cnType && cnType.label;
//         },
//         // 添加表格头字段说明
//         renderDetailLabel(createdElement, { column }) {
//             return createdElement(
//                 "el-tooltip",
//                 {
//                     props: {
//                         effect: "dark",
//                         placement: "top",
//                         content: `${this.labelDescription[column.property]}`
//                     }
//                 },
//                 [
//                     createdElement("span", {
//                         domProps: {
//                             innerHTML: `${column.label} <i class="el-icon-info"></i>`,
//                             className: "table-header-label"
//                         }
//                     })
//                 ]
//             );
//         },
//         async initDict(types) {
//             const res = await Promise.all(
//                 Object.keys(types).map(type => Dict.getDictByType(type))
//             );
//             res.forEach((item, index) => {
//                 item.forEach(type => {
//                     const itemType = type.type;
//                     types[itemType].push({
//                         value: type.code,
//                         label: type.codeText,
//                         text: type.codeText
//                     });
//                 });
//             });
//         }
//     }
// };
// Vue.mixin(mixin);


// // Filter
// Vue.filter("dateFormat", (value, format = "yyyy-MM-dd hh:mm:ss") => {
//     if (!value) return;
//     let date = new Date(value);
//     // 兼容 IE11, 在 IE11 下 window.ActiveXObject === undefined  "ActiveXObject" in window === true
//     if ((!!window.ActiveXObject || "ActiveXObject" in window) && value.indexOf("-") > -1) {
//         const dateValue = value.replace(/-/g, "/");
//         date = new Date(dateValue);
//     }
//     const o = {
//         "M+": date.getMonth() + 1, // 月份
//         "d+": date.getDate(), // 日
//         "h+": date.getHours(), // 小时
//         "m+": date.getMinutes(), // 分
//         "s+": date.getSeconds(), // 秒
//         "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
//         "S": date.getMilliseconds() // 毫秒
//     };

//     let fmt = format;
//     if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));

//     Object.keys(o).forEach((k) => {
//         if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
//     });

//     return fmt;
// });

// // 车牌格式
// Vue.filter("plateNumberFormat", (value) => {
//     if (!value) return "";
//     const plateNumber = `${value.substring(0, 2)}·${value.substring(2, 8)}`;
//     return plateNumber;
// });

// // 过滤空白项
// Vue.filter("fillEmpty", (val, append) => {
//     const mark = "--";
//     if (!val && val !== 0) return mark;
//     return append ? `${val} ${append}` : val;
// });

// // 文本字数计算
// Vue.filter("textNumber", (text, num) => {
//     if (!text) return 0;
//     return text.length > num ? num : text.length;
// });

// // 金额过滤保留两位小数
// Vue.filter("moneyFormat", (val) => {
//     return val ? parseFloat(val).toFixed(2) : "0.00";
// });

// // Axios interceptor
// /** Loading
//  *  在axios请求中添加参数对象
//  *  @param { dropLoading: boolean, msg: String }
//  *  dropLoading: 是否取消loading，msg: loading文本
//  *  用法: axios.post(api.LOGIN, param, { dropLoading: false, msg: "努力登录中..." })
//  *  param 参数必须存在
//  */
// let loadingInstance;
// Axios.interceptors.request.use((config) => {
//     if (!config.dropLoading) {
//         loadingInstance = Loading.service({
//             fullscreen: true,
//             spinner: "el-icon-loading",
//             background: "rgba(255,255,255,0)",
//             text: config.msg || "拼命加载中..."
//         });
//     }

//     if (typeof config.data === "string") {
//         config.url += `?${config.data}`;
//         config.data = {};
//     }
//     config.withCredentials = true;
//     config.headers["X-Requested-With"] = +new Date();
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });
// Axios.interceptors.response.use((response) => {
//     let configData;
//     try {
//         configData = response.config.data && JSON.parse(response.config.data);
//     } catch (e) {
//         console.log(e);
//     }
//     // 接口返回失败
//     if (!response.data.success) {
//         if (!(configData && configData.dropMessage)) {
//             Message.error({ message: response.data.responseMessage, showClose: true });
//         }

//         switch (response.data.responseCode) {
//             case "1008": // 用户未登录
//                 if (API.USERINFO !== response.config.url) {
//                     store.commit(LOGIN_FAILURE);
//                     router.push({ name: "login" });
//                 }
//                 break;
//             default:
//                 break;
//         }

//         Raven.captureMessage(response.data.responseMessage, {
//             level: "warning",
//             extra: {
//                 response,
//                 config: configData
//             }
//         });
//     }

//     if (loadingInstance) {
//         setTimeout(() => {
//             loadingInstance.close();
//         }, 400);
//     }
//     return response.data;
// }, (error) => {
//     // 服务器错误
//     // console.log(error);
//     if (loadingInstance) loadingInstance.close();
//     switch (error.response.data.responseCode) {
//         case "1008":
//             Message.error({ message: "用户未登录", showClose: true });
//             break;
//         case "10012":
//             Message.error({ message: error.response.data.responseMessage, showClose: true });
//             break;
//         case "1000":
//             break;
//         default:
//             Message.error({ message: "啊哦，找不到服务器", showClose: true });
//     }

//     Raven.captureException(error, {
//         extra: {
//             config: error.config
//         }
//     });

//     return Promise.reject(error);
// });

// // 大小屏切换，reload 页面
// // const resizeCallback = Util.throttle(() => {
// //     window.location.reload();
// // });

// // if (window.addEventListener) {
// //     window.addEventListener("resize", () => {
// //         resizeCallback();
// //     }, false);
// // } else if (window.attachEvent) {
// //     window.attachEvent("onresize", () => {
// //         resizeCallback();
// //     });
// // }

new Vue({
    router,
    store,
    // mixins: [mixin],
    el: "#app",
    template: "<App/>",
    components: {
        App
    }
});
