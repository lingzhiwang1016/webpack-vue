/* eslint-disable */
/**
 * 百度统计
 */
import Config from "@/assets/js/config";

window._hmt = window._hmt || [];

if (Config.env === "production") {
    const hm = document.createElement("script");
    const s = document.getElementsByTagName("script")[0];

    hm.src = "https://hm.baidu.com/hm.js?95a369516d97ea725c90726e484d628c";
    s.parentNode.insertBefore(hm, s);
}

const vklog = {
    timeSpan: {},
    /**
     * 事件跟踪
     * usage =>
     * vklog.track(category, action, opt_label, opt_value);
     *
     * args =>
     * category：要监控的目标的类型名称，通常是同一组目标的名字，
     * 比如"视频"、"音乐"、"软件"、"游戏"等等。该项必填，不填、填"-"的事件会被抛弃
     *
     * action：用户跟目标交互的行为，如"播放"、"暂停"、"下载"等等。
     * 该项必填，不填、填"-"的事件会被抛弃
     *
     * opt_label：事件的一些额外信息，通常可以是歌曲的名称、软件的名称、链接的名称等等。
     * 该项选填，不填、填"-"代表此项为空
     *
     * opt_value：事件的一些数值信息，比如权重、时长、价格等等，
     * 在报表中可以看到其平均值等数据。该项可选
     */
    trackEvent(...args) {
        _hmt.push(["_trackEvent", ...args]);
    },
    /**
     * 指定URL的PV统计
     * path: 指定要统计PV的页面URL，此项必选，必须是以”/”（斜杠）开头的相对路径
     */
    trackPageView(path) {
        _hmt.push(["_trackPageview", path]);
    },
    /**
     * 耗时打点统计
     * usage =>
     * 组合使用 time, timeEnd 方法，统计某段代码的执行耗时
     * time("abc");
     * const timeCount = timeEnd("abc");
     */
    time(name) {
        if (!name) return;
        const me = this;
        me.timeSpan[name] = +new Date();
    },
    timeEnd(name) {
        const me = this;

        if (!name || !me.timeSpan[name]) return 0;

        const timeCount = +new Date() - me.timeSpan[name];

        delete me.timeSpan[name];
        return timeCount;
    }
};

export default {
    install(Vue) {
        Vue.vklog = vklog;

        Vue.prototype.vklog = vklog;
        Vue.prototype.$vklog = vklog;
    }
};
