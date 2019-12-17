/* eslint vars-on-top: 0 */
import storage from "store/dist/store.legacy";
import expirePlugin from "store/plugins/expire";
import Config from "@/assets/js/config";

storage.addPlugin(expirePlugin);

export default {
    dictKey: "vk-cache",
    // 部署生产环境，更新 key，避免缓存影响
    // dictKey: Config.env === "production"
    //     ? `vk-cache-${Config.appVersion}`
    //     : "vk-cache",
    // 默认缓存 30 天
    duration: +new Date() + (30 * 24 * 60 * 60 * 1000),
    setCookie(name, value) {
        const me = this;
        const exp = new Date(me.duration);
        document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()}`;
    },
    getCookie(name) {
        if (!name) return "";

        const reg = new RegExp(`(^|)${name}=([^;]*)(;|$)`);
        const arr = document.cookie.match(reg);

        if (arr) {
            return decodeURI(arr[2]);
        }
        return "";
    },
    delCookie(name) {
        const exp = new Date();
        exp.setTime(exp.getTime() - 1);
        const cval = this.getCookie(name);
        if (cval != null) document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`;
    },
    getStorage(key) {
        const me = this;
        const cacheData = storage.get(`${me.dictKey}-${key}`);
        return cacheData;
    },
    setStorage(key, val, duration = this.duration) {
        const me = this;
        const cacheKey = `${me.dictKey}-${key}`;

        if (!duration) {
            storage.set(cacheKey, val);
        } else {
            storage.set(cacheKey, val, duration);
        }
    },
    removeStorage(key) {
        const cacheKey = `${this.dictKey}-${key}`;
        storage.remove(cacheKey);
    },
    clearStorage() {
        storage.clearAll();
    }
};
