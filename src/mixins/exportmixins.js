/* @description   用于文件导出操作
   @param  {Object} param 导出的参数
   @param  {String} exportApi 导出的 API
   @param  {String} exportMsg  导出的时候的提示信息
   @param  {String} innerTotal  条数
*/
export default {
    methods: {
        async mixinExportList(param, exportApi, exportMsg, innerTotal = "") {
            const me = this;
            if (!+innerTotal) return this.$message.error("无数据可导出");
            if (+innerTotal > 100000) return this.$message.error("暂不支持十万条以上的记录导出，请重新筛选");
            try {
                await this.$confirm(exportMsg, {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                });
                let paramStr = "";
                for (const key in param) {
                    const paramList = {};
                    if (!param[key]) param[key] = "";
                    paramList.name = key;
                    paramList.value = typeof param[key] === "object" ? param[key].join(",") : param[key];
                    paramStr += `${paramList.name}=${paramList.value}&`;
                }
                if (+innerTotal > 10000) {
                    const resp = await me.axios.get(`${exportApi}?${paramStr}`);
                    if (!resp.success) return;
                    await this.$alert("您导出的数据大于10000条，请移至【数据中心-下载中心】下载", {
                        confirmButtonText: "确定"
                    });
                    return;
                }
                window.open(`${exportApi}?${paramStr}`);
            } catch (e) {
                // console.log(e);
            }
        }
    }
};
