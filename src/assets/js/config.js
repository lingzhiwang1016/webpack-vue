// const env = process.env.NODE_ENV;
// const appVersion = __APP_VERSION__;
// const buildTimestamp = __TIME_STAMP__;
const protocol = window.location.protocol || "http:";

const appConfig = {
    localhost: {
        url: "http://127.0.0.1:3001",
        api: `${protocol}//easypark-admin-dl.maysatech.com/api`,
        lock: `${protocol}//easypark-admin-dl.maysatech.com/api/p-lock`,
        socket: `${protocol}//dev-websocket.maysatech.com`,
        ossUrl: "https://dev-public-maysatech.oss-cn-shenzhen.aliyuncs.com"
    },
    development: {
        url: `${protocol}//easypark-admin-dl.maysatech.com`,
        api: `${protocol}//easypark-admin-dl.maysatech.com/api`,
        lock: `${protocol}//easypark-admin-dl.maysatech.com/api/p-lock`,
        socket: `${protocol}//dev-websocket.maysatech.com`,
        ossUrl: "https://dev-public-maysatech.oss-cn-shenzhen.aliyuncs.com"
    },
    testing: {
        url: `${protocol}//easypark-admin-tl.maysatech.com`,
        api: `${protocol}//easypark-admin-tl.maysatech.com/api`,
        lock: `${protocol}//easypark-admin-tl.maysatech.com/api/p-lock`,
        socket: "https://test-websocket.maysatech.com",
        ossUrl: "https://dev-public-maysatech.oss-cn-shenzhen.aliyuncs.com"
    },
    beta: {
        url: `${protocol}//easypark-admin-betal.maysatech.com`,
        api: `${protocol}//easypark-admin-betal.maysatech.com/api`,
        lock: `${protocol}//easypark-admin-betal.maysatech.com/api/p-lock`,
        socket: `${protocol}//demo-websocket.maysatech.com`,
        ossUrl: "https://dev-public-maysatech.oss-cn-shenzhen.aliyuncs.com"
    },
    production: {
        url: `${protocol}//admin.boshiyi.com`,
        // api: `${protocol}//service.vk-park.com/vanke-api`,
        api: `${protocol}//admin.boshiyi.com/vanke-api`,
        lock: `${protocol}//admin.boshiyi.com/vanke-api/p-lock`,
        // socket: `${protocol}//websocket.vk-park.com`
        socket: "https://websocket.boshiyi.com",
        ossUrl: "https://vfe-static.oss-cn-shanghai.aliyuncs.com"
    }
};

export default {
    // env,
    // appVersion,
    // buildTimestamp,
    // ...appConfig[env]
    ...appConfig
};
