/* @description   提交k2审批的弹框提示文字 */
export default {
    methods: {
        k2Message() {
            const h = this.$createElement;
            return h("div", { class: "vk-k2-warning-dialog" }, [
                h("p", { class: "vk-k2-warning-dialog-title" }, [
                    h("i", { class: "el-icon-question" }, ""),
                    h("span", { class: "vk-k2-warning-dialog-title-word" }, "确认提交K2审批？")
                ]),
                h("p", null, "1、是否确认提交K2审批？确认提交审批后将自动打开提交K2审批页面。K2审批中状态下，不可再对事项内容进行编辑。"),
                h("p", null, "2、K2审批页面需要在内网环境下访问，若非内网环境，将访问失败。返回列表页，可从【查看K2审批表单】入口再次访问"),
                h("p", null, "3、审批驳回后，重新发起前可再次编辑。")
            ]);
        }
    }
};
