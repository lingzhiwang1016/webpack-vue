import Vue from "vue";
import Vuex from "vuex";
import common from "@/store/modules/common";
import layout from "@/store/modules/layout";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        layout,
        common
    }
});

export default store;
