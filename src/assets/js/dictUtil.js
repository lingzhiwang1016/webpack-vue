import qs from "qs";
import axios from "axios";
import storage from "store/dist/store.legacy";
import expirePlugin from "store/plugins/expire";
import Api from "@/assets/js/api.js";
import Config from "@/assets/js/config";

storage.addPlugin(expirePlugin);

export default {
    // 部署生产环境，更新 key，避免缓存影响
    dictKey: Config.env === "production"
        ? `vk-dict-${Config.appVersion}`
        : "vk-dict",
    // 缓存1天
    duration: +new Date() + (24 * 60 * 60 * 1000),
    async getDictByType(type) {
        const me = this;
        const key = `${me.dictKey}-${type}`;
        const cacheData = storage.get(key);

        if (cacheData) {
            return cacheData;
        }

        const param = qs.stringify({ type });
        const resp = await axios.post(Api.GET_DICT_BY_TYPE, param);

        storage.set(key, resp.data, me.duration);
        return resp.data;
    },
    clearAll() {
        storage.clearAll();
    }
};
