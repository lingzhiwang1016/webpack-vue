/* eslint no-param-reassign: 0 */
import util from "@/assets/js/util";
import {
    SWITCH_LAYOUT,
    SWITCH_SIDEBAR,
    SWITCH_SIDEBAR_COLLASPE
} from "@/store/types";

const bodyHeight = document.querySelector("body").offsetHeight;

const commonModule = {
    state: {
        bodyHeight,
        /**
         * tableHeight =>
         * bodyHeight - topbarHeight - layoutMainPadding - toolbarHeight - pageNavHeight
         */
        tableHeight: bodyHeight - 50 - 40 - 50 - 68,
        // index => 首页(无侧栏), fixed => 固定高, scroll => 可滚动
        layoutType: "scroll",
        // 0 => 无侧栏, 1 => 1个侧栏, 2 => 2个侧栏
        sidebarType: 0,
        firstSidebarCollapse: false
    },
    mutations: {
        [SWITCH_LAYOUT](state, type) {
            if (!type) return;
            state.layoutType = type;
        },
        [SWITCH_SIDEBAR](state, type) {
            if (type === undefined) return;
            state.sidebarType = type;
        },
        [SWITCH_SIDEBAR_COLLASPE](state, isCollapse) {
            state.firstSidebarCollapse = isCollapse;
        }
    }
};

export default commonModule;
