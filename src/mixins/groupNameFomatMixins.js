export default {
    methods: {
        groupNameFomat(row, column, cellValue) {
            const me = this;
            const beginTime = row.beginTime;
            const endTime = row.endTime;
            if ((!beginTime && !endTime) || !cellValue) {
                return cellValue || "--";
            } else {
                return `${cellValue}(${beginTime}|${endTime})`;
            }
        }
    }
};
