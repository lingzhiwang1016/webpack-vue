/* @description   用于搜索停车记录一周、一个月、三个月（有对照）
*/
import Vue from "vue";
export default {
    data() {
        return {
            mixinPickerOptionsRangeMatch: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: "最近一周",
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit("pick", [start, end]);
                    }
                }, {
                    text: "最近一个月",
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit("pick", [start, end]);
                    }
                }, {
                    text: "最近三个月",
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit("pick", [start, end]);
                    }
                }]
            },
            mixinShowTimeCnData: ""
        };
    },
    methods: {
        mixinInitOneMounthData() {
            this.mixinShowTimeCnData = "最近一个月的数据";
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            this.searchContent = [start, end];
        },
        // 计算两个时间的时间戳之差
        mixinCalcTimerMatch(timeArr) {
            if (!timeArr || !this.calcTheLastTimeData(timeArr[1])) return this.mixinShowTimeCnData = "";
            const timer = parseInt((new Date(timeArr[1]).getTime() - new Date(timeArr[0]).getTime()) / 1000);
            const oneDayTimer = 3600 * 24;
            const sixDayTimer = oneDayTimer * 6;
            const sevenDayTimer = oneDayTimer * 7;
            const twentyNineDayTimer = oneDayTimer * 29;
            const thirtyDayTimer = oneDayTimer * 30;
            const eightyNineDayTimer = oneDayTimer * 89;
            const ninetyDayTimer = oneDayTimer * 90;
            if (timer <= sevenDayTimer && timer > sixDayTimer) {
                this.mixinShowTimeCnData = "最近一周的数据";
            } else if (timer <= thirtyDayTimer && timer > twentyNineDayTimer) {
                this.mixinShowTimeCnData = "最近一个月的数据";
            } else if (timer <= ninetyDayTimer && timer > eightyNineDayTimer) {
                this.mixinShowTimeCnData = "最近三个月的数据";
            } else {
                this.mixinShowTimeCnData = "";
            }
        },
        // 计算传入的中国标准时间的数组第二位s级时间戳是否在“当天”之下
        // eg: 正如2018-10-10 00:00:01 与 2018-10-10 23:59:59 在 2018-10-10 这天内
        calcTheLastTimeData(timer) {
            const beginTimer = new Date().setHours(0, 0, 0, 0) / 1000;
            const endTimer = new Date().setHours(24, 0, 0, 0) / 1000;
            const nowTimer = parseInt(new Date(timer).getTime() / 1000);
            if (timer) return (beginTimer <= nowTimer) && (endTimer > nowTimer);
        }
    }
};
