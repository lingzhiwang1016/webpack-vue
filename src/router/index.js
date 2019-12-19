import Vue from "vue";
import Router from "vue-router";

import Index from "@/pages/index/index.vue";
// import NotFound from "@/pages/notfound/notfound";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "index",
            meta: { title: "首页" },
            component: Index
        }
        // ...dataRoute,
        // {
        //     path: "*",
        //     name: "404",
        //     meta: { title: "404" },
        //     component: NotFound
        // }
    ]
});

router.beforeEach(async (to, from, next) => {
    // const { $store } = router.app;
    // const userInfo = await $store.dispatch(GET_USERINFO);
    // const firstMatchedRoute = to.matched[0];
    // const { globalParkLot } = $store.state.park;
    // if (firstMatchedRoute && firstMatchedRoute.name === "park") {
    //     // $store.commit(SET_MENU_PARAMS, {
    //     //     name: firstMatchedRoute.name,
    //     //     params: { ...firstMatchedRoute.params, ...to.params }
    //     // });

    //     if (!globalParkLot) next({ name: "index" });
    // }

    // if (userInfo.loginId) {
    //     if (to.name === "login" || !to.matched.length) {
    //         next({ name: "index" });
    //     } else {
    //         next();
    //     }
    // } else {
    //     if (to.name === "login" || to.name === "forget") {
    //         next();
    //     } else {
    //         next({ name: "login" });
    //     }
    // }
});

router.afterEach(to => {
    // const vkLog = router.app.$vklog;
    // const { userInfo } = router.app.$store.state.user;
    // if (to.meta.title) {
    //     vkLog.trackEvent(to.meta.title, `visit:${to.name}`, userInfo.userName || "未登录");
    // }

    // vkLog.trackPageView(to.path);
});

export default router;
