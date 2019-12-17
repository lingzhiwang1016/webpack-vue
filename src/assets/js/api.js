import config from "@/assets/js/config";

export default {
    LOGIN: `${config.api}/login`, // 登录
    LOGOUT: `${config.api}/logout`, // 退出
    USERINFO: `${config.api}/sysUser/current`, // 用户信息
    GET_CAPTCHA: `${config.api}/getImageCode`, // 登陆获取验证码
    MOPDIFY_UPDATE_PADDWORD: `${config.api}/sysUser/modifyPassword`, // 用户未登录情况修改密码
    UPDATE_PHONE_VERIFY_CONFIG: `${config.api}/sysUser/update/phone-verify`, // 更新短信验证配置
    GET_SMS_CODE: `${config.api}/get-sms-code`, // 获取短信验证码
    // USERINFO: `${config.api}/getUserInfo`, // 用户信息

    /* 客户管理 => 客户列表 */
    GET_CUSTOMER_LIST: `${config.api}/customerInfo/read/list`, // 获取客户管理列表
    GET_CUSTOMER_PALTE: `${config.api}/customerPlateNumber/read/list`, // 获取绑定车牌管理
    GET_CUSTOMER_RECORD: `${config.api}/parkingRecord/getRecordByMobile`, // 获取停车记录
    GET_CUSTOMER_COMBO: `${config.api}/carPayCombo/read/comboList`, // 获取绑定套列表
    GET_CUSTOMER_COMBO_RECORD: `${config.api}/payComboBuyRecord/queryByMobile`, // 获取套餐记录
    GET_CUSTOMER_RECHARGE: `${config.api}/rechangeRecord/read/list`, // 获取充值记录
    POST_CUSTOMER_RECHARGE_BALANCE_ERASED_CHECK: `${config.api}/rechangeRecord/balance/erased-check`, // 客户管理-充值记录-余额清除校验
    POST_CUSTOMER_RECHARGE_BALANCE_ERASED: `${config.api}/rechangeRecord/balance/erased`, // 客户管理-充值记录-余额清除
    GET_CUSTOMER_UNPAYPLATE: `${config.api}/customerPlateNumber/plateNumberUnpaidList`, // 车牌未缴详情
    GET_PARKING_RECORD_CUSTOMER: `${config.api}/parkingRecord/customer`, // 客户管理-停车记录
    GET_PAYCOMBOBUYRECORD_QUERYBYMOBILE: `${config.api}/payComboBuyRecord/queryByMobile`, // 手机查询套餐购买记录
    GET_RECHANGERECORD_READ_LIST: `${config.api}/rechangeRecord/read/list`, // 充值信息列表及手机号模糊查询
    EXPORT_CUSTOMER_COMBOBUYLIST: `${config.api}/payComboBuyRecord/export`, // 导出套餐购买记录表,
    EXPORT_RECHARGE_LIST: `${config.api}/rechangeRecord/export`, // 充值记录导出
    EXPORT_CUSTOMER_PARKINGRECORD: `${config.api}/parkingRecord/export`, // 客户管理导出停车记录

    /* 客户管理 => 充电桩 */
    POST_EVCS_CUSTOMER_LIST: `${config.api}/evcs/manage/query/customer-list`, // 充电桩-用户管理列表
    POST_EVCS_RECHARGE_RECORD: `${config.api}/evcs/manage/query/recharge-record`, // 充值记录列表
    POST_EVCS_CHARGE_RECORD: `${config.api}/evcs/manage/query/charge-records`, // 充电记录列表
    POST_EVCS_STATISTICS: `${config.api}/evcs/charge-statistics`, // 统计报表
    POST_EVCS_CHARGE_CONFIG_LIST: `${config.api}/evcs/charge-config/page`, // 充电计费列表查询
    POST_EVCS_CHARGE_CONFIG_UPDATE: `${config.api}/evcs/charge-config/update`, // 充电计费配置修改
    POST_EVCS_MANAGE_BULLETIN_LIST: `${config.api}/manage/query/bulletin-list`, // 公告列表
    POST_EVCS_MANAGE_BULLETIN_ADD: `${config.api}/manage/add/bulletin`, // 新增公告信息
    POST_EVCS_MANAGE_BULLETIN_EDIT: `${config.api}/manage/update/bulletin`, // 修改公告信息
    POST_EVCS_MANAGE_BULLETIN_CHECK: `${config.api}/manage/check/bulletin`, // 校验公告（是否重叠）
    INVALID_MANAGE_BULLETIN_CONFIG: `${config.api}/manage/shelves/bulletin`, // 下架公告
    GET_EVCS_STATION_PAGE_GUN: `${config.api}/evcs/station/page-gun`, // 分页获取充电枪信息
    GET_EVCS_EXPORT_CHARGE_RECORDS: `${config.api}/evcs/manage/export/charge-records`, // 充电记录导出

    /* 客户管理 => 时长账户 */
    CUSTOMER_TIME_LIST: `${config.api}/customer_time_ticket/getTimeTicketByCusIdList`, // 用户时长账户列表
    CUSTOMER_TIME_DETAIL: `${config.api}/customer_time_ticket/getTicketByCusIdAndParkingLotIdList`, // 用户时长账户详情

    /* 所属区域管理 */
    GET_BELONGREGION_LIST: `${config.api}/sysDept/read/region`, // 获取所属区域列表
    GET_CITY_LIST: `${config.api}/sysDept/read/city`, // 获取所属区域一线城市列表
    GET_UNSET_CITY_LIST: `${config.api}/k2-proc-config/config-able-city`, // 获取未绑定资产的城市列表
    GET_PROJECT_CASCADER: `${config.api}/sysDept/read/RegionAndCityAndParkingLot`, // 获取所有区域、城市、项目数据

    /* 预警开启关闭 */
    UPDATE_NOTIFY_SWITCH: `${config.api}/sysUser/update-notify-switch`, // 预警消息开启关闭

    /* 项目，资产管理 */
    GET_ASSET_LIST: `${config.api}/parkingLot/read/assetList`, // 获取资产列表
    EXPORT_ASSETS: `${config.api}/parking-noi-base-info/export`, // 获取资产列表
    GET_ASSET_INFO: `${config.api}/parkingLot/read/assetInfo`, // 获取资产详情
    GET_PROJECT_INFO: `${config.api}/parkingLot/read/projectInfo`, // 获取项目详情
    UPDATE_ASSET: `${config.api}/parkingLot/updateAsset`, // 更改资产详情
    UPDATE_PROJECT: `${config.api}/parkingLot/updateProject`, // 停车场项目信息修改
    ADD_PROJECT: `${config.api}/parkingLot/addProject`, // 新建项目
    GET_PROJECT_LIST: `${config.api}/parkingLot/read/projectList`, // 获取项目列表
    READ_OWNERMCHLIST: `${config.api}/wxPublic/read/ownerMchList`, // 获取特约商户列表
    GET_ASSOCIATE_PARKINGLOT_LIST: `${config.api}/parkingLot/associate/parkingLotList`, // 获取项目管理-关联车场下拉列表
    PARKING_LOT_ASSET_LIST: `${config.api}/parking-lot-asset/page`, // 分页查询资产配置信息
    PARKING_LOT_ASSET_ADD: `${config.api}/parking-lot-asset/add`, // 添加资产配置信息
    PARKING_LOT_ASSET_UPDATE: `${config.api}/parking-lot-asset/update`, // 添加资产配置信息
    PARKING_LOT_ASSET_DETAIL: `${config.api}/parking-lot-asset/details`, // 添加资产配置信息
    PARKING_LOT_ASSET_EXPORT: `${config.api}/parking-lot-asset/export`, // 添加资产配置信息
    PARKING_LOT_READ_PROJECTINFO: `${config.api}/parkingLot/read/projectInfo`, // 停车场项目详情v1.3
    PARKING_LOT_ADD_PROJECT: `${config.api}/parkingLot/addProject`, // 停车场项目详情v1.3
    PARKING_LOT_CHILD_PARKING_LOT_LIST: `${config.api}/parkingLot/child-parking-lot/list`, // 查询当前项目下的子车场列表
    ADD_NOI_BASE_INFO: `${config.api}/parking-noi-base-info/add`, // 添加资产基础信息
    GET_AREA: `${config.api}/province-area/get-list`, // 获取省份-城市-行政区
    GET_ASSETS_DETAIL: `${config.api}/parking-noi-base-info/detail`, // 添加资产基础信息
    UPDATE_ASSETS_DETAIL: `${config.api}/parking-noi-base-info/update`, // 更新资产基础信息
    GET_HIS_LIST: `${config.api}/parking-noi-base-info-his/page`, // 查询资产信息历史版本-V2.18
    NOI_BASE_CANCEL: `${config.api}/parking-noi-base-info/cancel`, // 作废资产信息-V2.18

    /* 发票 */
    GET_SELLER_DETAILS: `${config.api}/sellerInvoice/getDetail`, // 获取销方详情
    UPDATA_SELLER: `${config.api}/sellerInvoice/edit`, // 更改销方详情
    GET_SELLER_LIST: `${config.api}/sellerInvoice/read/list`, // 获取销方列表
    GET_RECORD_LIST: `${config.api}/sellerInvoiceHistory/read/list`, // 获取开票记录
    GET_RECORD_DETAIL: `${config.api}/sellerInvoiceHistory/getDetail`, // 获取销方详情
    EXPORT_SELLER_HISTORY: `${config.api}/sellerInvoiceHistory/export`,
    GET_SELLER_PARKLIST: `${config.api}/sellerInvoice/listParkingLot`, // 获取销方配置停车场列表
    GET_SELLER_CANADD_PARKLIST: `${config.api}/sellerInvoice/canAddParkingLot`, // 获取销方配置可添加停车场列表
    DELETE_SELLER_PARKLIST: `${config.api}/sellerInvoice/deleteParkingLotInvoice`, // 销方配置删除停车场
    ADD_SELLER_PARKLIST: `${config.api}/sellerInvoice/addParkingLot`, // 销方配置新增停车场
    PROJECT_BY_REGION: `${config.api}/parkingLot/read/projectByRegion`, // 根据区域查询停车场项目
    GET_INVOICE_DETAIL: `${config.api}/InvoiceHistory/getDetail`, // 根据销方开票id 获取到开票详情
    SELLER_INVOICE_HISTORY: `${config.api}/sellerInvoiceHistory/invalid/apply`, // 发票红冲
    INVOICE_DETAIL: `${config.api}/sellerInvoiceHistory/invoice/detail`, // 发票红冲详情
    POST_INVOICE_CONTENT_PAGE: `${config.api}/invoice/content/page`, // 开票商品列表V2.15
    GET_INVOICE_CONTENT_DETAIL: `${config.api}/invoice/content/detail/`, // 开票商品详情V2.15
    DELETE_INVOICE_CONTENT_DELETE: `${config.api}/invoice/content/delete/`, // 删除开票商品V2.15
    POST_INVOICE_CONTENT_EDIT: `${config.api}/invoice/content/edit`, // 新增、更新开票商品V2.15
    POST_SELLERINVOICE_CONTENT_SELECT: `${config.api}/sellerInvoice/content/select`, // 选择开票商品列表V2.15


    /* 运营管理 => 服务后台 => 客户评价 */
    GET_EVALUATION_LIST: `${config.api}/customerEvaluation/read/list`, // 获取客户评价列表
    GET_EVALUATION_STATISTICS: `${config.api}/customerEvaluation/statistics`, // 获取客户满意度统计
    READ_CUSTOMER_EVALUATION_DETAIL: `${config.api}/customerEvaluation/read/detail`, // 客户评价详情
    CUSTOMER_EVALUATION_UPDATE: `${config.api}/customerEvaluation/update`, // 客户评价处理
    EXPORT_EVALUATION_LIST: `${config.api}/customerEvaluation/exportCustomerEvaluation`, // 客户评价导出
    PARKING_GET_RECORD_DETAIL: `${config.api}/parkingRecord/getRecordDetail`, // 获取泊时易停车记录或者车位锁停车记录
    PARKING_GET_CUSTOMER_PAY_RECORD: `${config.api}/parkingRecord/getCustomerPayRecord`, // 获取停车记录下的支付记录和抵用记录
    GET_FEEDBACK_LIST: `${config.api}/feedback/query-page`, // 获取意见反馈
    /* 运营管理 => 车辆管理 => 分组充值 */
    GET_RESERVE_GROUP_LIST: `${config.api}/reserve-group/page`,
    GET_GROUP_RECHARGE_LIST: `${config.api}/parkingGroup/rechargeGroupList`, // 获取充值分组列表
    ADD_RECHARGE_GROUP: `${config.api}/parkingGroup/addRechargeGroup`, // 添加充值分组
    EDIT_RECHARGE_GROUP: `${config.api}/parkingGroup/editRechargeGroup`, // 编辑充值分组
    DELETE_RECHARGE_GROUP: `${config.api}/parkingGroup/deleteRechargeGroup`, // 删除充值分组
    RECHARGE_GROUP: `${config.api}/parkingGroup/groupRechange`, // 分组充值、刷新
    GET_GROUP_CAR_LIST: `${config.api}/parkingGroup/groupCarList`, // 获取分组车辆列表
    EXPORT_GROUP_CAR_LIST: `${config.api}/parkingGroup/groupCarListExport`, // 导出分组车辆列表
    ADD_GROUP_CAR: `${config.api}/parkingGroup/addGroupCar`, // 新增分组车辆
    EDIT_GROUP_CAR: `${config.api}/parkingGroup/editGroupCar`, // 编辑分组车辆
    DELETE_GROUP_CAR: `${config.api}/parkingGroup/deleteNormalGroupCar`, // 批量、单个删除分组车辆
    IMPORT_GROUP_CAR: `${config.api}/parkingGroup/importRechargeGroupCar`, // 充值分组车辆导入
    /* 运营管理 => 费用追缴 */
    BATCH_NONEEDTOPAY: `${config.api}/supplementaryPayment/batchNotNeedToPay`, // 批量无需追缴
    BATCH_REQUESTTOPAY: `${config.api}/supplementaryPayment/batchRequestToPay`, // 批量追缴
    /* 运营管理 => 套餐新用户管理 */
    GET_COMBO_USERS_LIST: `${config.api}/new-combo-user/page`, // 获取套餐新用户列表
    UPDATE_COMBO_USER: `${config.api}/new-combo-user/deal`, // 更新套餐新用户数据
    EXPORT_COMBO_USERS_DATAS: `${config.api}/new-combo-user/export`, // 导出套餐新用户数据
    /* 运营管理 => 广告管理 */
    GET_AD_LIST: `${config.api}/ad_info/read/list`, // 获取广告列表
    ADD_AD_SETTING: `${config.api}/ad_info/save-ad-setting`, // 新增广告配置
    UPDATE_AD_SETTING: `${config.api}/ad_info/update-ad-setting`, // 修改广告配置
    UPDATE_AD_STATE: `${config.api}/ad_info/update-state`, // 启用禁用广告
    GET_AD_PUSH_STAT: `${config.api}/ad_operation_log/stat`, // 获取广告推送统计
    EXPORT_AD_PUSH_STAT: `${config.api}/ad_operation_log/export`, // 广告推送统计导出
    GET_AD_DETAIL: `${config.api}/ad_info`, // 查询广告详情
    GET_AD_SEARCH_SUGGESTION: `${config.api}/ad_operation_log/search`, // 广告查询搜索建议
    GET_PARKINGLOT_BY_AD: `${config.api}/ad_operation_log/parkingLot`, // 根据广告id获取绑定的车场列表
    /* 运营管理 => 预警历史 */
    GET_ALERTMSG_LIST: `${config.api}/alertMsg/read/list`, // 获取预警历史列表
    EXPORT_ALERTMSG_LIST: `${config.api}/alertMsg/export`, // 导出预警历史列表
    UPDATE_ALERTMSG_STATUS: `${config.api}/alertMsg/updateHandleStatus`, // 预警消息处理
    /* 运营管理 => 通用套餐 */
    GET_COMMON_COMBO_LIST: `${config.api}/common-combo/page`, // 获取通用套餐列表
    ADD_COMMON_COMBO: `${config.api}/common-combo/add`, // 通用套餐-新增
    UPDATE_COMMON_COMBO: `${config.api}/common-combo/update`, // 通用套餐-更新
    DELETE_COMMON_COMBO: `${config.api}/common-combo/delete`, // 通用套餐-删除
    GET_COMMON_COMBO_DETAILS: `${config.api}/common-combo/detail/`, // 获取通用套餐详情
    UP_SHELVES_COMMON_COMBO: `${config.api}/common-combo/up-shelves`, // 通用套餐-上架
    DOWN_SHELVES_COMMON_COMBO: `${config.api}/common-combo/down-shelves`, // 通用套餐-下架
    GET_BUY_COMMON_COMBO_LIST: `${config.api}/common-combo-manage/buy-record`, // 获取通用套餐购买记录
    EXPORT_BUY_COMMON_COMBO_LIST: `${config.api}/common-combo-manage/buy-record-export`, // 导出通用套餐购买记录
    GET_COMMON_COMBO_CAR_LIST: `${config.api}/common-combo-manage/car-list`, // 获取通用套餐车辆管理列表
    EXPORT_COMMON_COMBO_CAR_LIST: `${config.api}/common-combo-manage/car-export`, // 导出通用套餐车辆管理列表
    GET_COMMON_COMBO_TYPE_LIST: `${config.api}/common-combo-manage/all-common-combo`, // 获取通用套餐类型列表
    GET_EFFECTIVE_COMMON_COMBO_LIST: `${config.api}/common-combo-manage/effective`, // 获取通用套餐-生效套餐详情列表

    /* 预警管理 -- 预警管理 */
    GET_OPERATION_PERSSONNE_LIST: `${config.api}/operationPersonne/station/list`, // 获取岗位列表
    GET_ALERTEMP_LIST: `${config.api}/alertTemp/read/list`, // 获取预警管理查询列表
    ADD_ALERTEMP: `${config.api}/alertTemp/add`, // 预警管理新增
    UPDATE_ALERTEMP: `${config.api}/alertTemp/update`, // 预警管理修改
    READ_ALERTEMP_DETAIL: `${config.api}/alertTemp/read/detail`, // 预警管理详情
    ALERTEMP_VALID_STATUS: `${config.api}/alertTemp/validStatus`, // 生效
    ALERTEMP_INVALID_STATUS: `${config.api}/alertTemp/invalidStatus`, // 失效
    SYSUSER_DETAIL: `${config.api}/alertTemp/delete`, // 预警删除

    /* 用户管理 */
    GET_USER_LIST: `${config.api}/sysUser/read/userList`, // 获取用户列表
    GET_FIRSTTIER_CITY: `${config.api}/sysDept/read/regionAndCity`, // 获取一线城市
    GET_FIRSTTIER_CITY_NEW: `${config.api}/sysDept/getHasParkingLotFirstCity`, // 获取一线城市(数据中心-项目日报-城市数据)
    GET_USER_INFO: `${config.api}/sysUser/read/userInfo`, // 获取用户详情页
    ADD_UPDATE_USER: `${config.api}/sysUser/addUser`, // 新增用户
    EDIT_USER_DETAIL: `${config.api}/sysUser/updateUser`, // 编辑用户详情页
    RESET_USER_PASSWORD: `${config.api}/sysUser/reset-password`, // 重置用户密码
    DELETE_USER_ACCOUNT: `${config.api}/sysUser/deleteUserAccount`, // 删除账号
    GET_CUSTOMERINFO: `${config.api}/customerInfo/getCustomerBaseInfo`, // 用户基础信息
    POST_UPDATEPASSWORD: `${config.api}/sysUser/updatePassword`, // 账户管理-用户密码修改v2.0
    GET_ALL_PARK_INFO: `${config.api}/sysUser/get-all-parking-lot-info`, // 用户管理，新增项目权限组件，获取全部车场信息

    /* 停车场 */
    GET_PARKINGLOT_LIST: `${config.api}/parkingLot/read/list`, // 获取停车场列表
    ADD_PARKINGLOT_ADD: `${config.api}/parkingLot/add`, // 新增停车场
    UPDATE_PARKINGLOT: `${config.api}/parkingLot/update`, // 修改停车场
    DELETE_PARKINGLOT: `${config.api}/parkingLot/delete`, // 删除停车场
    READ_PARKINGLOT_DETAIL: `${config.api}/parkingLot/read/detail`, // 停车场详情
    GET_PARKINGTICKET_GENERATOR_LIST: `${config.api}/parkingTicketGenerator/suitableParking`, // 获取已运营停车场列表
    GET_PARKING_RECORD_LIST: `${config.api}/parkingRecord/read/list`, // 获取停车记录列表
    DELETE_PARKIGNRECODE: `${config.api}/parkingRecord/delete`, // 删除停车记录
    EDIT_PARKINGRECODE: `${config.api}/parkingRecord/update`, // 编辑停车记录
    ADD_PARKINGRECODE: `${config.api}/parkingRecord/add`, // 新增停车记录
    POST_PARKINGRECORD_ON_LOT_PARKING_RECORD: `${config.api}/parkingRecord/on-lot-parking-record`, // 查询在场的停车记录
    POST_PARKINGRECORD_BATCH_UPDATE_ABSENT: `${config.api}/parkingRecord/batch-update-absent`, // 停车记录批量置为不在场
    BATCH_EDIT_PARKINGRECODE: `${config.api}/parkingRecord/batchUpdateInTime`, // 批量编辑入场时间
    CHASE_PARKINGRECODE: `${config.api}/parkingRecord/pursue`, // 停车记录追缴
    GET_PAYRECORD: `${config.api}/parkingRecord/getPayRecord`, // 获取到停车记录下面的支付记录以及抵用记录
    GET_NEWPAYRECORD: `${config.api}/parkingRecord/getNewPayRecord`, // 新获取停车记录下的支付记录和抵用记录 V2.8
    GET_CHILDREN_PARKING_RECORDS: `${config.api}/parkingRecord/read/child-parking-records`, // 获取到子车场停车记录
    PARKINGLOT_CHECKCONNECT: `${config.api}/parkingLot/checkConnect`, // 连接测试
    GET_PARKING_CONTROL_LIST: `${config.api}/parking_promise_config/read/list`, // 获取入场控制信息列表
    GET_PARKING_GATE_DETAIL: `${config.api}/parkingGateDetail/getInGateInfo`, // 获取入场控制的闸口信息
    UPDATE_PARKING_CONTROL_INFO: `${config.api}/parking_promise_config/update`, // /修改入场控制数据
    UPDATE_PARKING_CONTROL_STATUS: `${config.api}/parking_promise_config/updateOpenTag`, // 更改入场控制的闸口状态
    UPDATE_ERROR_ENTER_STATUS: `${config.api}/parking_promise_config/updateErrorEnterTag`, // 更改识别异常入场状态
    GET_CONTROL_GATE_DETAIL: `${config.api}/parking_promise_config/getDetail`, // 获取入场控制的闸口详情
    CHECK_PARKING_GATE_CONFIG: `${config.api}/parking_promise_config/checkSame`, // 判定是否已存在存在相同闸口的配置信息
    GET_PARKING_CONFIG_ERROR_LIST: `${config.api}/parking_recognition_error_config/read/list`, // 获取出入场识别错误配置信息列表
    GET_PARKING_CONFIG_ERROR_DETAIL: `${config.api}/parking_recognition_error_config/detail`, // 获取出入场识别错误配置信息详情
    GET_IN_PARK_NUMBER: `${config.api}/free-space/query`, // 获取在场车数
    REFRESH_IN_PARK_NUMBER: `${config.api}/free-space/refresh`, // 获取在场车数

    OUT_DURATION_LIMIT_CONFIG_LIST: `${config.api}/out-duration-limit-config/read/list`, // 出场时段控制-获取列表
    OUT_DURATION_LIMIT_CONFIG_ADD: `${config.api}/out-duration-limit-config/add`, // 出场时段控制-新增
    OUT_DURATION_LIMIT_CONFIG_UPDATE: `${config.api}/out-duration-limit-config/update`, // 出场时段控制-修改
    OUT_DURATION_LIMIT_CONFIG_DETAIL: `${config.api}/out-duration-limit-config/read`, // 出场时段控制-查看详情
    GET_OUT_GATE_INFO: `${config.api}/parkingGateDetail/getOutGateInfo`, // 出场闸口获取
    CHECK_PARKING_GATE_OUT_CONFIG: `${config.api}/out-duration-limit-config/check-same`, // 判定是否已存在存在相同闸口的配置信息(出场)


    UPDATE_PARKING_CONFIG_ERROR_STATUS: `${config.api}/parking_recognition_error_config/setInfoTag`, // 车场出入场识别错误控制配置信息状态设置
    ADD_PARKING_CONFIG_ERROR: `${config.api}/parking_recognition_error_config/addInfo`, // 新增车场出入场识别错误控制配置信息
    UPDATE_PARKING_CONFIG_ERROR: `${config.api}/parking_recognition_error_config/updateInfo`, // 修改车场出入场识别错误控制配置信息
    GET_CONFIG_GATE_LIST: `${config.api}/parking_recognition_error_config/listGates`, // 获取闸口信息（出入场识别错误控制）
    READ_PARKINGLOT_BASEINFO_DETAIL: `${config.api}/parkingLot/read/baseInfo`, // 停车场基础信息详情
    PARKINGLOT_BASEINFO_UPDATE: `${config.api}/parkingLot/updateBaseInfo`, // 停车场基础信息修改
    PARKINGLOT_BASESETTING_UPDATE: `${config.api}/parkingLot/updateBaseConfig`, // 停车场基础配置修改
    GET_PARKINGLOT_COMBO_RECORD: `${config.api}/carPayCombo/read/list`, // 停车场套餐购买记录
    EXPORT_PARKINGLOT_COMBO_RECORD: `${config.api}/payComboBuyRecord/export/combo`, // 导出停车场套餐购买记录
    EXPORT_CAR_PAY_COMBO: `${config.api}/carPayCombo/exportCarPayCombo`, // 导出停车场车辆套餐管理
    EXPORT_PARKING_RECORD_LIST: `${config.api}/parkingRecord/exportList`, // 导出停车记录
    POST_CARPAYCOMBO_ADD: `${config.api}/carPayCombo/add`, // 添加车场套餐V2.0
    POST_PARKINGGROUP_SELECT_COMBORULE_LIST: `${config.api}/parkingGroup/selectComboRuleList`, // 选择套餐规则下拉列表V2.0
    GET_PARKINGGROUP_TREE: `${config.api}/parkingLot/group-tree`,
    GET_PARKING_TEMP_LIST: `${config.api}/payCombo/temp/list/`,
    ADD_DURATION_TICKET: `${config.api}/parkingTicket/addParkingTicket`, // 新增时长券
    GET_DURATION_TICKET_LIST: `${config.api}/parkingTicket/read/list`, // 获取时长券列表
    GET_DURATION_BUY_LIST: `${config.api}/mch_ticket_buy_record/tikcetBuyRecordList`, // 获取时长券购买记录列表
    EXPORT_DURATION_BUY_LIST: `${config.api}/mch_ticket_buy_record/export/ticketBuyRecord`, // 导出时长券购买记录列表
    GET_DURATION_SEND_LIST: `${config.api}/customer_time_ticket/customerTicketList`, // 获取时长券发放记录列表
    EXPORT_DURATION_SEND_LIST: `${config.api}/customer_time_ticket/export/customerTimeTicket`, // 导出时长券发放记录列表

    /* 套餐分组 */

    /* 多位多车 */
    GET_GROUPTEMPLIST_PARKINGGROUP: `${config.api}/parkingGroup/getGroupTempList`, // 多位多车列表
    ADD_GROUPTEMP: `${config.api}/parkingGroup/addGroupTemp`, // 添加多位多车分组
    DETAIL_PARKINGGROUP_TEMP: `${config.api}/parkingGroup/temp/detail`, // 多位多车分组详情
    PARKINGGROUP_EDITGROUPTEMP: `${config.api}/parkingGroup/editGroupTemp`, // 编辑多位多车分组
    PARKINGGROUP_DELETEGROUPTEMP: `${config.api}/parkingGroup/deleteGroupTemp`, // 删除多位多车分组
    PARKINGGROUP_ADDGROUPCAR: `${config.api}/parkingGroup/addGroupCar`, // 添加分组车辆
    PARKINGGROUP_EDITGROUPCAR: `${config.api}/parkingGroup/editGroupCar`, // 分组车辆编辑
    POST_BUGCUSTOMER_DEPT_KEYACCOUNTLIST: `${config.api}/bigcustomer_dept/keyAccountList`, // 大客户下拉列表
    GET_PARKINGGROUP_PLACE_LIST: `${config.api}/parkingGroup/place/list`, // 获取停车场车位列表
    POST_PARKINGGRUOP_CARLIST: `${config.api}/parkingGroup/groupCarList`, // 分组车辆列表
    GETTEPCOMBO_BYPARKINGLOTID: `${config.api}/parkingGroup/getTempComboByParkingLotId`, // 获取临停套餐列表
    PARKINGGROUP_DELETEPLACEGROUPCAR: `${config.api}/parkingGroup/deletePlaceGroupCar`, // 分组车辆删除/批量删除
    POST_PARKINGGROUP_UPDATEPLACEGROUPCAR: `${config.api}/parkingGroup/updatePlaceGroupCar`, // 车辆列表批量编辑

    POST_MULTI_PLACE_CAR_PAGE: `${config.api}/parkingGroup/multi-pl/multi-place-car/page`, // 运营管理-多位多车-列表
    DELETE_MULTI_PLACE_CAR_DELETE: `${config.api}/parkingGroup/multi-pl/multi-place-car/delete`, // 运营管理-多位多车-删除
    POST_MULTI_PLACE_CAR_ADD: `${config.api}/parkingGroup/multi-pl/multi-place-car/add`, // 运营管理-多位多车-添加
    POST_MULTI_PLACE_CAR_UPDATE: `${config.api}/parkingGroup/multi-pl/multi-place-car/update`, // 运营管理-多位多车-修改
    GET_MULTI_PLACE_CAR_DETAIL: `${config.api}/parkingGroup/multi-pl/multi-place-car/info`, // 运营管理-多位多车-详情

    /* 套餐分组 */
    GET_COMBOGROUP_LIST: `${config.api}/parkingGroup/comboGroupList`, // 套餐分组列表
    GET_COMBOGROUP_DETAIL: `${config.api}/parkingGroup/groupComboDetail`, // 套餐分组详情
    EDIT_COMBOGROUP_EDIT: `${config.api}/parkingGroup//editComboGroup`, // 套餐分组编辑
    DELETE_COMBOGROUP: `${config.api}/parkingGroup/deleteComboGroup`, // 套餐分组删除
    ADD_COMBOGROUP: `${config.api}/parkingGroup/addComboGroup`, // 套餐分组新增
    POST_SELECT_COMBORULELIST: `${config.api}/parkingGroup/selectComboRuleList`, // 选择套餐规则下拉列表
    PARKINGGROUP_IMPORTGROUPCAR: `${config.api}/parkingGroup/import`, // 车辆列表导出接口

    /* 黑名单管理 */
    GET_BLACK_LIST: `${config.api}/blacklist/page`, // 获取黑名单列表
    ADD_BLACK_LIST: `${config.api}/blacklist/add`, // 添加黑名单
    UPDATE_BLACK_LIST: `${config.api}/blacklist/update`, // 修改黑名单
    DELETE_BLACK_LIST: `${config.api}/blacklist/delete`, // 删除黑名单
    DELETE_BATCH_BLACK_LIST: `${config.api}/blacklist/batch-delete`, // 批量删除黑名单
    IMPORT_BLACK_LIST: `${config.api}/blacklist/batch-import`, // 导入黑名单
    GET_ALL_PARKINGLOT_LIST: `${config.api}/parkingLot/currentUser`, // 获取所有的停车场列表(黑白名单管理需要)
    UPDATE_BLACK_STATUS: `${config.api}/blacklist/change-status`, // 修改黑名单状态

    /* 白名单管理 */
    GET_WHITE_LIST: `${config.api}/whiteList/read/list`, // 获取白名单列表
    ADD_BWHITE_LIST: `${config.api}/whiteList/add`, // 添加白名单
    UPDATE_WHITE_LIST: `${config.api}/whiteList/update`, // 修改白名单
    DELETE_WHITE_LIST: `${config.api}/whiteList/delete`, // 删除白名单
    DELETE_BATCH_WHITE_LIST: `${config.api}/whiteList/moreDelete`, // 批量删除白名单
    IMPORT_WHITE_LIST: `${config.api}/file/whiteListUpload`, // 导入白名单(上传文件)
    EXPORT_WHITE_LIST: `${config.api}/whiteList/export`, // 导出白名单
    GET_CURRENT_USER_CITY: `${config.api}/sysDept/read/currentUser/city`, // 一线公司

    /* 拥堵放行 */
    GET_CONGESTIONMODE_LIST: `${config.api}/congestionMode/read/list`, // 拥堵放行列表
    GET_CONGESTIONMODE_DETAIL: `${config.api}/congestionMode/read/detail`, // 拥堵放行详情
    GET_SUPPLEMENTAR_PAYMENT_LIST: `${config.api}/supplementaryPayment/read/releaseCarList`, // 放行车辆列表
    CONGESTIONMODE_CLOSE: `${config.api}/congestionMode/closeCongestionMode`, // 关闭拥堵模式
    CONGESTIONMODE_OPEN: `${config.api}/congestionMode/openCongestionMode`, // 开启拥堵模式
    PARKING_GATEDATAIL: `${config.api}/parkingGateDetail/read/list`, // 通过停车场ID查询闸口列表
    GET_CARPAYCOMBO_LIST: `${config.api}/carPayCombo/read/list`, // 获取车牌套餐列表
    UPDATE_CARPAYCOMBO: `${config.api}/carPayCombo/plateChange`, // 更改套餐车牌
    CANCEL_CARPAYCOMBO: `${config.api}/carPayCombo/cancel`, // 作废套餐车牌
    CHECK_CARPAYCOMBO: `${config.api}/carPayCombo/checkRepeat`, // 车牌套餐查重
    GET_PARKING_GROUP_LIST: `${config.api}/parkingRecord/group/list`, // 获取分组停车记录
    CARPAY_COMBO_UPLOSD: `${config.api}/carPayCombo/import/`, // 导入车辆套餐数据

    /* 显屏文案修改 */
    GET_SCREEN_WRITING: `${config.api}/screen-copywriting/`, // 获取显屏文案
    UPDATE_SCREEN_WRITING: `${config.api}/screen-copywriting/update`, // 更新显屏文案

    /* 消控报错 */
    GET_RECOGNITION_CONTROL_ERROR_LIST: `${config.api}/recognitionControlError/read/list`, // 消控客诉列表
    READ_PARKING_RECORD_DETAIL: `${config.api}/parkingRecord/read/detail`, // 停车记录详情
    GET_PROJECTBYREGION_LIST: `${config.api}/parkingLot/read/projectByRegion`, // 获取停车场列表(不分页)
    READ_RECOGNITION_CONTROL_ERROR_DETAIL: `${config.api}/recognitionControlError/read/detail`, // 消控客诉详情
    UPDATE_RECOGNITION_CONTROL_ERROR: `${config.api}/recognitionControlError/update`, // 消控客诉修改

    /* 退款申请 */
    GET_REFUNDS_RECORDS_LIST: `${config.api}/refundsRecords/read/list`, // 获取退款申请列表
    EXPORT_REFUNDS_RECORDS_LIST: `${config.api}/refundsRecords/export`, // 导出退款申请列表
    READ_REFUNDS_RECORDS_DETAIL: `${config.api}/refundsRecords/read/detail`, // 退款申请详情
    UPDATE_REFUNDS_RECORDS: `${config.api}/refundsRecords/update`, // 退款申请处理
    GET_PARKING_RECORDS_DETAIL: `${config.api}/parkingRecord/refundRecord/getParkingRecordDetail`, // 获取到退款记录详情
    FINANACE_REFUND: `${config.api}/refundsRecords/finance/refund`, // 获取到财务管理退款申请
    GET_REFUND_TOTALAMOUNT: `${config.api}/refundsRecords/finance/getTotalRefundAmount`, // 获取到所有的退款金额
    /* 咨询反馈 */
    GET_COMPLAINT_LIST: `${config.api}/complaint/read/list`, // 咨询反馈列表
    READ_COMPLAINT_DETAIL: `${config.api}/complaint/read/detail`, // 咨询反馈详情
    UPDATE_COMPLAINT: `${config.api}/complaint/update`, // 处理客服中心

    /* 费用追缴 */
    GET_SUPPLEMENTARY_LIST: `${config.api}/supplementaryPayment/read/list`, // 费用追缴列表
    GET_SUPPLEMENTARY_LIST_COUNT: `${config.api}/supplementaryPayment/export-count`, // 费用追缴列表条数
    EXPORT_SUPPLEMENTARY_LIST: `${config.api}/supplementaryPayment/export`, // 费用追缴列表导出
    REQUEST_TO_PAY: `${config.api}/supplementaryPayment/requestToPay`, // 发起追缴
    NOT_NEED_TO_PAY: `${config.api}/supplementaryPayment/notNeedToPay`, // 无需追缴
    POST_STATISTICS: `${config.api}/supplementaryPayment/statistics`, // 统计追缴记录

    /* 实名认证 */
    GET_REALINFO_AUTHENTICATION_LIST: `${config.api}/realInfoAuthentication/read/list`, // 实名认证列表
    REALINFO_AUTHENTICATION_DELETE: `${config.api}/realInfoAuthentication/delete`, // 实名认证删除
    REALINFO_AUTHENTICATION_ADD: `${config.api}/realInfoAuthentication/add`, // 实名认证新增
    REALINFO_AUTHENTICATION_PARKINGLOTS: `${config.api}/realInfoAuthentication/parkinglots`, // 实名认证来源公众号
    REALINFO_AUTHENTICATION_REVIEW: `${config.api}/realInfoAuthentication/review`, // 实名认证审核

    /* 运营操作记录 */
    GET_OPERATION_LIST: `${config.api}/maintenance`, // 运营操作记录
    EXPORT_OPERATION_LIST: `${config.api}/maintenance/export`, // 导出运营操作记录
    /* 抵用券 */
    GET_PARKINGTICKET_LIST: `${config.api}/parkingTicket/read/list`, // 抵用券列表

    /* 大客户账号配置 */
    GET_BIGCUSTOMERUSER_LIST: `${config.api}/bigcustomerUser/read/list`, // 大客户账号配置列表
    BIGCUSTOMERUSER_RESET_PASSWORD: `${config.api}/bigcustomerUser/resetPassword`, // 重置密码
    ADD_BIGCUSTOMERUSER: `${config.api}/bigcustomerUser/add`, // 添加大客户账号
    UPDATE_BIGCUSTOMERUSER: `${config.api}/bigcustomerUser/update`, // 编辑大客户账号
    DETAIL_BIGCUSTOMERUSER: `${config.api}/bigcustomerUser`, // 大客户账号详情
    BIGCUSTOMERUSER_EXPORT: `${config.api}/bigcustomerUser/export`, // 大客户账号导出

    /* 商家减免 */
    GET_BIGCUSTOMERQRCODE_LIST: `${config.api}/ticketAllot/read/merchantDerateList`, // 商家减免列表
    TICKETALLOT_MERCHANTDERATE: `${config.api}/ticketAllot/merchantDerate`, // 商家减免
    TICKETALLOT_EXPORT: `${config.api}/ticketAllot/export`, // 商家减免导出
    /* 抵用券 */
    GET_BIGCUSTOMERUSER_TICKET_LIST: `${config.api}/bigcustomerTicket/read/list`, // 运营后台抵用券列表
    GET_BIGCUSTOMERUSER_QRCODE_LIST: `${config.api}/bigcustomerQrcode/read/list`, // 运营后台二维码列表
    GET_BIGCUSTOMERTICKET: `${config.api}/bigcustomerTicket`, // 获取到抵用券详细信息
    GET_BIGCUSTOMERUSER_QRCODE_Detail: `${config.api}/bigcustomerQrcode/ticketAndCode`, // 根据ticketId获取大客户抵用券详情（用于停车记录费用详情）
    /* 公众号 */
    GET_WXPUBLIC_LIST: `${config.api}/wxPublic/read/allWxPublic`, // 获取公众号列表（不分页）
    GET_WXPUBLIC_READ_LIST: `${config.api}/wxPublic/read/list`, // 获取公众号管理列表
    WXPUBLIC_ADD: `${config.api}/wxPublic/add`, // 新增公众号管理
    WXPUBLIC_UPDATE: `${config.api}/wxPublic/update`, // 修改公众号管理
    WXPUBLIC_DELETE: `${config.api}/wxPublic/delete`, // 删除公众号管理
    WXPUBLIC_DETAIL: `${config.api}/wxPublic/read/detail`, // 公众号管理详情
    WXCODE_UPLOAD: `${config.api}/wxPublic/qr-code-upload`, // 公众号二维码上传

    /* 特约商户 */
    GET_PARKING_MERCHANTS_INFO_LIST: `${config.api}/parking_merchants_info/read/list`, // 特约商户列表
    PARKING_MERCHANTS_INFO_UPDATE: `${config.api}/parking_merchants_info/update`, // 修改特约商户
    PARKING_MERCHANTS_INFO_DELETE: `${config.api}/parking_merchants_info/delete`, // 删除特约商户
    PARKING_MERCHANTS_INFO_ADD: `${config.api}/parking_merchants_info/add`, // 新增特约商户
    PARKING_MERCHANTS_INFO_DETAIL: `${config.api}/parking_merchants_info/read/detail`, // 特约商户详情
    WXPUBLIC_UPDATEX: `${config.api}/wxPublic/updateWx`, // 修改特约商户

    /* 供应商 */
    GET_THIRDCOMPANY_LIST: `${config.api}/thirdCompany/read/list`, // 获取供应商列表
    ADD_THIRDCOMPANY_ADD: `${config.api}/thirdCompany/add`, // 新增供应商
    UPDATE_THIRDCOMPANY: `${config.api}/thirdCompany/update`, // 修改供应商
    DELETE_THIRDCOMPANY: `${config.api}/thirdCompany/delete`, // 删除供应商
    READ_THIRDCOMPANY_DETAIL: `${config.api}/thirdCompany/read/detail`, // 供应商详情

    // 生效  失效
    VALID_STATUS: `${config.api}/payCombo/validStatus`, // 生效
    INVALID_STATUS: `${config.api}/payCombo/invalidStatus`, // 失效

    /* 系统管理 */
    GET_SYSUSER_LIST: `${config.api}/sysUser/read/list`, // 获取用户列表
    ADD_SYSUSER_ADD: `${config.api}/sysUser/add`, // 新增用户
    READ_SYSUSER_DETAIL: `${config.api}/sysUser/read/detail`, // 用户详情
    UPDATE_SYSUSER: `${config.api}/sysUser/update`, // 修改用户
    UPDATE_PADDWORD: `${config.api}/sysUser/updateCusPassword`, // 修改密码
    DELETE_SYSUSER: `${config.api}/sysUser/delete`, // 删除用户
    GET_SYSACTIVITY_CONFIG_LIST: `${config.api}/sysActivityConfig/listActivityConfig`, // 系统活动配置列表
    SYSACTIVITY_CONFIG_CANCE: `${config.api}/sysActivityConfig/cancelActivityConfig`, // 活动作废
    SYSACTIVITY_CONFIG_ADD: `${config.api}/sysActivityConfig/addActivityConfig`, // 配置活动
    GET_CARPAYCOMBOINFO: `${config.api}/carPayCombo/getCarPayComboInfo`, // 配置详情
    GET_REFUNDCONFIG_LIST: `${config.api}/refundsConfig/read/list`, // 退款配置列表
    GET_REFUNDCONFIG_PARKINGLOT_LIST: `${config.api}/refundConfig/refundConfigParkingLotList`, // 退款配置--停车场列表
    REFUNDCONFIG__ADD: `${config.api}/refundsConfig/addRefundConfig`, // 新增退款配置
    REFUNDCONFIG_EDIT: `${config.api}/refundsConfig/editRefundConfig`, // 编辑退款配置
    GET_REFUNDCONFIGLOGLIST_LIST: `${config.api}/refundConfig/refundConfigLogList`, // 查看退款配置记录
    GET_PARKING_DATE_CONVERT_LIST: `${config.api}/parking-date-convert/read/list`, // 查看日期转化列表
    PARKING_DATE_CONVERT_ADD: `${config.api}/parking-date-convert/add/batch`, // 增加日期转化日期
    PARKING_DATE_CONVERT_DELETE: `${config.api}/parking-date-convert/delete`, // 删除日期转化日期
    GET_WXPUBLIC_MESSAGE_LIST: `${config.api}/wxPublic//notify-temp`, // 获取消息模板列表
    DELETE_WXPUBLIC_MESSAGE: `${config.api}/wxPublic/notify-temp-delete`, // 删除消息模板
    ADD_WXPUBLIC_MESSAGE: `${config.api}/wxPublic/notify-temp-add`, // 新增消息模板
    UPDATE_WXPUBLIC_MESSAGE: `${config.api}/wxPublic/notify-temp-update`, // 更新消息模板
    GET_WXPUBLIC_MESSAGE_MODAL: `${config.api}/wxPublic/notify-temp-no-own`, // 新增消息模板
    GET_PAY_MANAGE_LIST: `${config.api}/pay-manage/page`, // 获取支付绑定列表
    ADD_PAY_MANAGE: `${config.api}/pay-manage/save-setting`, // 新增支付绑定
    GET_PAY_MANAGE_DETAILS: `${config.api}/pay-manage/detail/`, // 获取支付绑定详情
    UPDATE_PAY_MANAGE: `${config.api}/pay-manage/update`, // 更新支付绑定
    ENCODE_ICBC_CERT: `${config.api}/pay-manage/encode-icbc-cert`, // Base64加密工行密钥文件
    GET_CMB_PUBLICKEY: `${config.api}/pay-manage/cmbc-public-key`, // 获取招行公钥
    // 合并支付配置
    GET_PARKING_PAY_GROUP_LIST: `${config.api}/parking_pay_group/page`, // 查询支付分组列表信息
    DELETE_PARKING_PAY_GROUP: `${config.api}/parking_pay_group/delete`, // 删除支付分组信息
    SAVE_PARKING_PAY_GROUP: `${config.api}/parking_pay_group/save-group-bind`, // 保存支付分组并绑定支付商户
    PARKING_PAY_GROUP_DETAIL: `${config.api}/parking_pay_group/detail`, // 查询支付分组详情
    PAY_MANAGE_COMBINE_MCHS: `${config.api}/pay-manage/combine-mchs`, // 获取合并支付商户信息
    PARKING_PAY_GROUP_LOT_LIST: `${config.api}/parking_pay_group_lot/list`, // 查询支付分组车场列表信息
    GROUP_LOT_LIST_BATCH_REMOVE: `${config.api}/parking_pay_group_lot/batch-remove`, // 删除支付分组车场
    GROUP_LOT_LIST_BATCH_ADD: `${config.api}/parking_pay_group_lot/batch-add`, // 添加支付分组车场
    GROUP_LOT_LIST_CAN_ADD: `${config.api}/parking_pay_group_lot/lot-list`, // 可添加的车场列表
    // 支付宝商户
    GET_ALIPAY_MCH_LIST: `${config.api}/alipay-merchant/page`, // 支付宝商户列表
    ADD_ALIPAY_MCH: `${config.api}/alipay-merchant/add`, // 新增支付宝商户
    UPDATE_ALIPAY_MCH: `${config.api}/alipay-merchant/update`, // 编辑支付宝商户
    GET_ALIPAY_MCH_DETAIL: `${config.api}/alipay-merchant/detail/`, // 支付宝商户详情
    GET_MCH_NAME_LIST: `${config.api}/alipay-merchant/merchant-list`, // 支付宝商户名称

    // 总控中心
    GET_CONTROL_ADDRESS_LIST: `${config.api}/recognitionControlError/getAddress`, // 获取区域公司车场闸口信息
    GET_CONTROL_PARKING_RECORD: `${config.api}/recognitionControlError/getNotInOrOutRecord`, // 获取无进场或出场停车记录
    PARKINGGATEDETAIL_RECEIVE_OPENGATE: `${config.api}/parkingGateDetail/receiveOpenGate`, // 闸口管理
    GATE_QRCODE: `${config.api}/parkingGate/qrCode`, // 进出口二维码生成
    GET_CONTROL_PAMENT_RECORD: `${config.api}/recognitionControlError/getSupplementaryPaymentList`, // 查询车辆费用追缴信息
    GET_CONTROL_RECOGNITION_ERROR: `${config.api}/recognitionControlError/controlcenter/getPlateNumberRecognitionError`, // 获取车辆报错历史
    GET_CONTROL_RECOGNITION_ERROR_ADD: `${config.api}/recognitionControlError/add`, // 新增消控客诉
    OPEN_PARKING_GATE: `${config.api}/parkingGateDetail/openGate`, // 消控室强制开闸
    GET_ERROR_HISTORY_LIST: `${config.api}/recognitionControlError/page`, // 获取车辆报错历史列表
    GET_ERROR_HISTORY_STATISTIC: `${config.api}/recognitionControlError/statistic`, // 车辆报错历史统计数据
    GET_ERROR_HISTORY_DETAIL: `${config.api}/recognitionControlError/detail`, // 车辆报错历史-详情页数据
    ExPORT_ERROR_HISTORY_LIST: `${config.api}/recognitionControlError/export/recognitionError`, // 车辆报错历史-列表导出
    GET_PARKING_RECOGNITION_INFO_LIST: `${config.api}/parkingPlateRecognitionInfo/recognitionRecord`, // 车辆识别记录列表
    GET_RECENT_PARKING_INFO: `${config.api}/recognitionControlError/getRecognitionInfo`, // 获取最近一次的闸口车辆数据
    GET_IN_RECORD_LIST: `${config.api}/recognitionControlError/get-in-record`, // 车牌纠错-查询入场识别记录
    UPDATE_PLATE_NUMBER: `${config.api}/recognitionControlError/correct-plate-number`, // 车牌纠错-更改车牌
    GET_PUSH_RECORD_LIST: `${config.api}/parkingPlateRecognitionInfo/esThirdInfoRecord`, // 车牌识别列表中的推送记录
    GET_RECOGNIZE_LIST: `${config.api}/parking_recognition_result/name`, // 模糊匹配的识别结果列表
    RECOGNITION_ERROR_IN_RELEASE: `${config.api}/recognitionControlError/in-release`, // 入场放行
    ADD_PARKINGLOT_LABEL: `${config.api}/recognitionControlError/add-parking-lot-label`, // 总控中心-添加车场标签
    GET_PARKINGLOT_LABEL: `${config.api}/recognitionControlError/get-parking-lot-label`, // 总控中心-获取车场标签列表
    GET_PARKINGLOT_LABEL_LIST: `${config.api}/recognitionControlError/get-parking-lot-info`, // 总控中心-获取车场标签筛选列表
    GET_RECOGNITION_FAIL_LIST: `${config.api}/recognitionFailRecord/selectPagePlus`, // 识别失败记录-获取识别失败记录列表
    GET_RECOGNITION_COUNT_DATAS: `${config.api}/recognitionFailRecord/getRecordCount`, // 识别失败记录-获取识别失败统计记录数
    UPDATE_RECOGNITION_FAIL_RECORD: `${config.api}/recognitionFailRecord/update`, // 识别失败记录-修改识别失败记录
    UPDATE_RECOGNITION_FAIL_PLATENUMBER: `${config.api}/recognitionFailRecord/updatePlateNumber`, // 识别失败记录-修改识别失败车牌号
    GET_RECOGNITION_PARKING_RECORD_LIST: `${config.api}/recognitionFailRecord/selectParkingRecord`, // 识别失败记录-修改识别失败车牌号
    GET_PARKING_PAY_CASH_LIST: `${config.api}/parking-pay-cash/page`, // 查询闸口缴费缴费记录
    EXPORT_PARKING_PAY_CASH_LIST: `${config.api}/parking-pay-cash/export/parking-pay-cash`, // 导出闸口缴费记录
    GET_PARKING_PAY_CASH_TOTAL: `${config.api}/parking-pay-cash/query/total-amount`, // 闸口缴费汇总查询
    GET_NO_PARKING_RECORD_LIST: `${config.api}/no-parking-record/read/list`, // 获取无入场记录列表
    GET_IN_PARKING_RECORD_LIST: `${config.api}/recognitionControlError/get-in-parking-record`, // 获取入场记录列表
    SWITCH_MESSAGE: `${config.api}/sysUser/switch/message`, // 铃铛消息开关

    /* 供应商管理 */
    GET_SUPPLIER_LIST: `${config.api}/sysDict/supplierList`, // 获取供应商配置列表
    ADD_SUPPLIER: `${config.api}/sysDict/addSupplier`, // 新增供应商
    EDIT_SUPPLIER: `${config.api}/sysDict/editSupplier`, // 编辑供应商

    /* 财务报表 */
    /* 统计报表 */
    GET_ANNUAL_REPORT: `${config.api}/parking-noi-report/page`, // 获取年度统计图表数据
    GET_ANNUAL_LIST: `${config.api}/parking-noi-record/getParkingNoiExcelPage`, // 获取年度统计列表数据 - 月度实际数
    GET_BASIC_LIST: `${config.api}/parking-noi-base-info/page`, // 获取年度统计列表数据 - 基础信息表
    GET_CORE_LIST: `${config.api}/parking-annual-core-indicators/page`, // 获取年度统计列表数据 - 核心指标表
    /* 临停记录表 */
    GET_PARKING_FINANCIAL_ATATEMENT_LIST: `${config.api}/financialStatement/parkingFinancialStatement`, // 获取临停记录底表
    GET_FINANCIAL_PAYDETAIL: `${config.api}/financialStatement//financial/payDetail`, // 临停底表--支付明细
    parking_FINANCIAL_STATEMENT: `${config.api}/financialStatement/export/parking`, // 导出临停记录表Excel
    FINANCIAL_FEEDETAIL: `${config.api}/financialStatement/feeDetail`, // 明细
    GET_REFUND_LIST: `${config.api}/refundsRecords/finance/getRefundsList`,
    /* 财务管理 */
    /* 共享停车收入表 */
    SHARE_PARKING_LIST: `${config.api}/share-parking-order-detail/read/list`, // 共享停车账单列表
    GET_SHARE_PARKING_PROJECTS_LIST: `${config.api}/parkingLot/read/shareparking/projectByRegion`, // 共享停车项目列表
    SHARE_PARKING_LIST_DETAIL: `${config.api}/share-parking-order-detail/read/order/list`, // 共享停车账单详情列表
    /* 套餐购买记录表 */
    GET_COMBO_FINANCIAL_STATEMENT_LIST: `${config.api}/financialStatement/comboFinancialStatement`, // 套餐购买记录底表
    COMBO_FINANCIAL_STATEMENT: `${config.api}/financialStatement/export/combo`, // 导出套餐购买记录表Excel

    /* 收支管理 */
    POST_RECHARGE_REFUND_LIST: `${config.api}/refunds-balance-record/page`, // 获取充值退款列表
    GET_RECHARGE_REFUND_DETAIL: `${config.api}/refunds-balance-detail/recordId`, // 获取充值退款记录详情

    /* 经营报表 */
    GET_OPEARATING_STATEMENT_LIST: `${config.api}/operating_statistics_statement/read/list`, // 经营报表
    OPERATING_FINANCIAL_STATEMENT: `${config.api}/operating_statistics_statement/export/operating`, // 导出经营报表Excel
    GET_WXAMOUNT_DETAIL_LIST: `${config.api}/financialStatement/getWxPayDetail`, // 获取到微信明细记录表
    EXPORT_WXAMOUNT_DETAIL_LIST: `${config.api}/financialStatement/export/wxPayDetail`,
    /* 详情 */
    FINANCIAL_PARKINGLOT_DETAIL: `${config.api}/parkingLot/read/part/info`, // 停车场详情
    FINANCIAL_INCOME_OVERVIEW: `${config.api}/operating_statistics_statement/read/incomeInfo`, // 收入概况
    FINANCIAL_INCOME_OVERVIEW_SUMS: `${config.api}/operating_statistics_statement/read/total/incomeInfo`, // 收入概况统计
    FINANCIAL_INCOME_OVERVIEW__EXPORT: `${config.api}/operating_statistics_statement/export/incomeInfo`, // 收入概况导出
    /* 经营报表 -> 临停支付明细 */
    FINANCIAL_GET_PAYMENT_INFO: `${config.api}/operating_statistics_statement/read/paymentInfo`, // 临停支付明细
    FINANCIAL_GET_PAYMENT_INFO_TOTAL: `${config.api}/operating_statistics_statement/read/total/paymentInfo`, // 临停支付明细统计
    FINANCIAL_GET_PAYMENT_INFO_EXPORT: `${config.api}/operating_statistics_statement/export/paymentInfo`, // 临停支付明细导出
    FINANCIAL_GET_PAYMENT_TYPE: `${config.api}/sysDict/getPayWayDict`, // 临停支付方式字典
    /* 经营报表 -> 临停记录明细 */
    FINANCIAL_GET_RECORD_INFO: `${config.api}/financialStatement/parkingRecordDetail`, // 临停记录明细
    FINANCIAL_GET_RECORD_EXPORT: `${config.api}/financialStatement/parkingRecordDetailExport`, // 临停记录明细
    /* 经营报表 -> 时段内套餐收入 */
    GET_CARINCOME_DETAIL: `${config.api}/financialStatement/carIncomeDetail`, // 套餐收入明细查询
    EXPORT_CARINCOME_DETAIL: `${config.api}/financialStatement/exportCarIncomeDetail`, // 套餐收入明细导出
    GET_CARINCOME_ORDER_DETAIL: `${config.api}/financialStatement/carIncomeOrderDetail`, // 套餐收入支付信息
    /* 经营报表 -> 套餐购买 */
    GET_CARPAYDETAIL_DETAIL: `${config.api}/financialStatement/carPayDetail`, // 套餐购买明细查询
    EXPORT_CARPAYDETAIL_DETAIL: `${config.api}/financialStatement/exportCarPayDetail`, // 导出套餐购买明细
    /* 经营报表 -> 异常识别记 */
    EXPORT_RECOGNITION_ERROR_RECORDS: `${config.api}/financialStatement/export/recognitionErrorRecords`, // 财务管理异常识别记录导出
    GET_RECOGNITION_ERROR_RECORDS: `${config.api}/financialStatement/recognitionErrorRecords`, // 财务管理异常识别记录
    /* 经营报表 -> 抵用卷使用记录 */
    GET_TICKETALLOT_LIST: `${config.api}/ticketAllot/read/merchantTicketList`, // 抵用卷使用记录列表
    EXPORT_TICKETALLOT: `${config.api}/ticketAllot/exportTicket`, // 抵用劵使用记录导出
    /* 实收报表 */
    GET_FINANCIAL_STATEMENT_LIST: `${config.api}/financialStatement/financialStatement`, // 实收报表
    FINANCIAL_FINANCIAL_STATEMENT: `${config.api}/financialStatement/export/financial`, // 导出实收报表Excel
    GET_FINANCIAL_STATEMENT_ICBC_LIST: `${config.api}/financialStatement/icbcFinancialStatement`, // 工行实时报表
    EXPORT_FINANCIAL_STATEMENT_ICBC_LIST: `${config.api}/financialStatement/icbcDetailExportTotal`, // 工行实时报表导出
    GET_FINANCIAL_STATEMENT_ICBC_DETAIL: `${config.api}/financialStatement/icbcFinancialStatementDetail`, // 工行实时报表金额详情
    GET_FINANCIAL_STATEMENT_ICBC_EXPORT: `${config.api}/financialStatement/icbcDetailExport`, // 工行实时报表金额详情导出
    GET_FINANCIAL_STATEMENT_CMBC_LIST: `${config.api}/financialStatement/cmbcFinancialStatement`, // 招行实时报表
    EXPORT_FINANCIAL_STATEMENT_CMBC_LIST: `${config.api}/financialStatement/cmbcDetailExportTotal`, // 招行实时报表导出
    GET_FINANCIAL_STATEMENT_CMBC_DETAIL: `${config.api}/financialStatement/cmbcFinancialStatementDetail`, // 招行实时报表金额详情
    GET_FINANCIAL_STATEMENT_CMBC_EXPORT: `${config.api}/financialStatement/cmbcDetailExport`, // 招行实时报表金额详情导出
    GET_FINANCIAL_STATEMENT_ALI_LIST: `${config.api}/financialStatement/aliPayFinancialStatement`, // 支付宝实收报表
    GET_FINANCIAL_STATEMENT_ALI_DETAIL: `${config.api}/financialStatement/aliPayFinancialStatementDetail`, // 支付宝实收报表金额详情
    EXPORT_FINANCIAL_STATEMENT_ALI_LIST: `${config.api}/financialStatement/exportPlatformPayDetailTotal`, // 支付宝实收报表导出
    EXPORT_FINANCIAL_STATEMENT_ALI_DETAIL: `${config.api}/financialStatement/exportAliPayDetail`, // 支付宝实收报表金额详情导出

    /* 充值记录 */
    GET_recharge_FINANCIAL_STATEMENT_LIST: `${config.api}/financialStatement/rechargeFinancialStatement`, // 充值记录底表
    GET_FINANCIAL_INVOICEDETAIL: `${config.api}/financialStatement/financial/invoiceDetail`, // 实收报表--开票详情
    EXPORT_FINANCIAL_STATEMENT: `${config.api}/financialStatement/export/recharge`, // 导出充值记录表Excel

    /* 运营管理 => 获取验证码 */
    GET_MESSAGE_CODE: `${config.api}/msg/getMessage`, // 根据用户手机获取验证码

    /* OSS 上传 */
    GET_OSS_TOKEN: `${config.api}/oss/getToken`,

    /* 权限 */
    ACTOR_LIST: `${config.api}/sysRole/read/list`, // 获取角色列表
    ALLACTOR_LIST: `${config.api}/sysRole/read/allRole`, // 查询所有角色
    CURR_DEPT_TREE: `${config.api}/sysDept/getCurrentUserDeptTreeList`, // 获取当前用户权限的部门列表
    DEPT_TREE: `${config.api}/sysDept/queryDeptTree`, // 根据部门获取项目列表
    MENU_TREE: `${config.api}/sysMenu/queryMenuTree`, // 获取菜单权限列表
    ADD_ACTOR: `${config.api}/sysRole/creatRole`, // 创建角色
    UPDATE_ACTOR: `${config.api}/sysRole/updateRole`, // 更新角色
    UPDATE_ACTOR_DETAILS: `${config.api}/sysRole/update`, // 更新角色信息
    UPDATE_ACTOR_LIMIT: `${config.api}/sysRoleMenu/updatePemissionsToRole`, // 更新角色权限
    GET_ROLEINFO_BY_ID: `${config.api}/sysRole/getRoleInfoByRoleId`, // 根据id获取角色信息
    GET_MENU_BY_ID: `${config.api}/sysMenu/queryPermissonsByRoleId`, // 根据角色ID查询菜单列表
    ACCOUNT_LIST: `${config.api}/sysUser/queryUserList`, // 获取账号列表
    ACTOR_TREE: `${config.api}/sysRole/queryRoleListByDeptId`, // 根据部门获取角色列表
    ADD_USER: `${config.api}/sysUser/createUserAndAssignRoles`, // 添加账号
    GET_ACTOR_BY_USER: `${config.api}/sysUser/queryRolesByUserId`, // 根据用户ID获取角色
    UPDATE_USER: `${config.api}/sysUser/updateUserAndAssignRoles`, // 更新用户
    DELETE_USER: `${config.api}/sysUser/deleteUser`, // 删除用户
    CHANGE_USER_STATUS: `${config.api}/sysUser/update`, // 改变用户账号状态
    DELETE_ACTOR: `${config.api}/sysRole/deleteRole`, // 删除角色
    GET_AREA_LIST: `${config.api}/sysDept/queryDistricts`, // 查询区域
    GET_COMPANY_BY_AREA: `${config.api}/sysDept/queryCityListByDistId?dist_id=`, // 根据区域id查询一线公司
    GET_CITY_INFO: `${config.api}/sysDept/queryCityAndDistByCityId?city_id=`, // 根据城市ID查询城市名称和区域名称
    CHECK_PARKINGRECORD: `${config.api}/parkingRecord/checkParkingRecord`, // 判断车牌号是否在其他停车场中存在停车记录

    /* 字典 */
    GET_DICT_BY_TYPE: `${config.api}/sysDict/getDictByType`, // 根据类型获取字典
    GET_DICT_TYPE_PAGING: `${config.api}/sysDict/getType`, // 查询字典类型

    /* 车位锁1.2 后台 */
    // socket
    SOCKET_URL: config.socket, // 获取socket_url
    /* 停车记录 */
    GET_PARKINGRECORD_LIST: `${config.lock}/admin/parking-record/page`, // 停车记录详情
    EXPORT_PARKINGRECORD_DATAS: `${config.lock}/admin/parking-record/export`, // 停车记录导出
    EXPORT_APPOINTRECORD_DATAS: `${config.lock}/admin/appointment-record/export`, // 预约记录导出
    /* 车位锁列表 */
    GET_PARKLOCK_LIST: `${config.lock}/admin/carport/list`, // 获取车位锁列表
    ADD_PARKLOCK: `${config.lock}/admin/carport/add`, // 添加车位锁
    HANDLE_LOCK_OPERATE: `${config.lock}/admin/carport/handle`, // 车位锁操作
    HANDLE_CARPOT_OPERATE: `${config.lock}/admin/carport/update`, // 启用、禁用车位

    /* 车位锁1.3 后台 */
    // 车位锁列表
    PUT_LOCKLIST_OPORATE: `${config.lock}/admin/lock/change-status`, // 升降锁
    GET_LOCKLIST_QUERY: `${config.lock}/admin/lock/page`, // 获取车位锁列表
    // 用户分组
    POST_USERGROUP_CREATE: `${config.lock}/admin/lock-group/create-group`, // 创建用户分组
    GET_USERGROUP_QUERY: `${config.lock}/admin/lock-group/page`, // 查询用户分组
    PUT_USERGROUP_UPDATE: `${config.lock}/admin/lock-group/update`, // 更新用户分组
    GET_USERGROUP_DELETE: `${config.lock}/admin/lock-group/delete`, // 删除用户分组
    // 用户分组_车位锁列表
    GET_USERGROUP_LOCK_QUERY: `${config.lock}/admin/lock/group/page`, // 查询分组车位锁列表
    POST_USERGROUP_LOCK_CREATE: `${config.lock}/admin/lock/group/add-lock`, // 分组添加车位锁
    PUT_USERGROUP_LOCK_UPDATE: `${config.lock}/admin/lock/group/update-carport-code`, // 修改车位锁
    DELETE_USERGROUP_LOCK_DELETE: `${config.lock}/admin/lock/group/delete-lock`, // 删除车位锁
    POST_USERGROUP_LOCK_OPERATE: `${config.lock}/admin/lock/group/enable-down-status`, // 启用禁用车位锁
    // 用户分组_车主列表
    GET_USERGROUP_OWNER_QUERY: `${config.lock}/admin/lock-customer-group/customer-group/page`, // 查询分组车主列表
    POST_USERGROUP_OWNER_CREATE: `${config.lock}/admin/lock-customer-group/add-customer-group`, // 分组添加车主
    PUT_USERGROUP_OWNER_UPDATE: `${config.lock}/admin/lock-customer-group`, // 修改车主信息
    DELETE_USERGROUP_OWNER_DELETE: `${config.lock}/admin/lock-customer-group`, // 删除车主信息

    // 警报管理
    GET_OCCUPY_ALARM_LIST: `${config.lock}/admin/lock-alert/page`, // 警报列表
    PUT_OCCUPY_ALARM_UPDATE: `${config.lock}/admin/lock-alert`, // 警报-处理
    GET_OCCUPY_ALARM_QUERY: `${config.lock}/admin/lock-alert`, // 警报-查看
    // 停车记录
    GET_OCCUPY_RECORD_LIST: `${config.lock}/admin/lock-record/page`,
    CHECK_URL: `${config.api}/parkingLot/connectTest`,

    // 车辆套餐到期管理
    POST_OPERATION_COMBODUEMANAGE_QUERY: `${config.api}/combo-overdue-manage/read/list`, // 列表
    POST_OPERATION_COMBODUEMANAGE_UPDATE: `${config.api}/combo-overdue-manage/follow-up`, // 回访
    GET_OPERATION_COMBODUEMANAGE_EXPORT: `${config.api}/combo-overdue-manage/export`, // 导出
    GET_OPERATION_COMBODUEMANAGE_OTHERCOMBO: `${config.api}/combo-overdue-manage/query/otherCombo`, // 查询其他生效套餐
    CAR_PAY_COMBO_PREPARE_READ_LIST: `${config.api}/car_pay_combo_prepare/read/list`, // 套餐预约记录列表查询

    // 计费规则
    ADD_PAYRULE_TIME_CONFIG: `${config.api}/payComboRule/chargingSave`, // 计费规则时段配置-批量新增
    GET_PAYRULE_CONFIG_LIST: `${config.api}/payCombo/read/list`, // 获取计费规则-列表（排序）
    ADD_PAYRULE_CONFIG: `${config.api}/payCombo/add`, // 计费规则-新增
    ADD_COMBO_PAYRULE_CONFIG: `${config.api}/payCombo/addForCombo`, // 套餐计费规则-新增 v2.9
    GET_PAYRULE_CONFIG_DETAILS: `${config.api}/payCombo/read/detail`, // 计费规则-详情
    GET_COMBO_PAYRULE_CONFIG_DETAILS: `${config.api}/payCombo/read/detailForCombo`, // 套餐计费规则-详情v2.9
    UPDATE_PAYRULE_CONFIG: `${config.api}/payCombo/update`, // 计费规则-修改
    UPDATE_COMBO_PAYRULE_CONFIG: `${config.api}/payCombo/updateForCombo`, // 套餐计费规则-修改 v2.9
    GET_PAYRULE_CONFIG_TIME_DETAILS: `${config.api}/payComboRule/chargingList`, // 计费规则时段配置-列表查询
    INVALID_PAYRULE_CONFIG: `${config.api}/payCombo/invalidStatus`, // 计费规则-下架
    VALID_PAYRULE_CONFIG: `${config.api}/payCombo/validStatus`, // 计费规则-上架
    DELETE_PAYRULE_CONFIG: `${config.api}/payCombo/delete`, // 计费规则-删除
    CHECK_TEMP_PAYRULE_CONFIG: `${config.api}/payCombo/hasValidTemp`, // 计费规则-检测已上架默认临停规则
    CHECK_BIGCAR_COMBO: `${config.api}/payCombo/check-bigcar-combo/`, // 检查是否有检测已上架大车的临停规则

    // 数据中心
    SECOND_RECOGNITION_GETSTATISTIC: `${config.api}/second_recognition_report/getStatisticList`, // 二次识别统计列表
    RECOGNITION_RATE_ANALYZE: `${config.api}/cross-gate-recognition-report/analysis`, // 识别率分析
    SECOND_RECOGNITION_BY_DAY: `${config.api}/second_recognition_report/getStatistic/byDate`, // 二次识别按天
    SECOND_RECOGNITION_DETAIL_LIST: `${config.api}/parking_recognition_detail/list`, // 二次识别明细列表
    SECOND_RECOGNITION_DETAIL: `${config.api}/parking_recognition_detail/getDetail`, // 二次识别明细列表
    RECOGNIZE_STATISTIC_LIST: `${config.api}/cross-gate-recognition-report/page`, // 二次识别明细列表
    RECOGNIZE_STATISTIC_UPDATE: `${config.api}/cross-gate-recognition-report/update`, // 更新统计情况
    RECOGNIZE_STATISTIC_UPDATE_TOTAL: `${config.api}/cross-gate-recognition-report/total`, // 更新统计情况
    RECOGNIZE_ERROR_LIST: `${config.api}/cross-gate-recognition-err-record/page`, // 识别失败图片列表
    TAG_ERROR_IMG: `${config.api}/cross-gate-recognition-err-record/updateImgTag`, // 标识失败图片
    CURRENT_IMG_TAGS: `${config.api}/cross-gate-recognition-err-record/total`, // 已有的图片标签
    BLUR_SEARCH_CARPORT: `${config.api}/cross-gate-recognition-report/parkingLot/comboBox/like`, // 模糊查询车场
    GET_REGION_BY_CARPORT: `${config.api}/parkingLot/read/city/region`, // 根据车场ID查询区域
    GET_GATE_ID_BY_CARPORT: `${config.api}/parkingGateDetail/gate/list`, // 根据车场ID查询闸口
    GET_PAY_WAY: `${config.api}/pay-channel-report/query-pay-channel-report`, // 支付渠道比例统计
    GET_PROJECT_REPORT_LIST: `${config.api}/project-daily-report/getList`, // 获取项目日报列表
    UPDATE_PROJECT_REPORT: `${config.api}/project-daily-report/update`, // 更新项目日报列表
    EXPORT_PROJECT_REPORT: `${config.api}/project-daily-report/export`, // 导出项目日报列表
    GET_CITY_DATA_LIST_ALL: `${config.api}/project-daily-report/getALLCity/list`, // 数据大盘-城市数据: 获取全部城市列表数据
    GET_CITY_DATA_LIST: `${config.api}/project-daily-report/getPerCity/list`, // 数据大盘-城市数据: 获取单个城市列表数据
    GET_CITY_DATA_CHART_ALL: `${config.api}/project-daily-report/getALLCity/chart`, // 数据大盘-城市数据: 获取全部城市图表数据
    GET_CITY_DATA_CHART: `${config.api}/project-daily-report/getPerCity/chart`, // 数据大盘-城市数据: 获取单个城市图表数据
    EXPORT_CITY_DATA_ALL: `${config.api}/project-daily-report/exportAllCityList`, // 数据大盘-城市数据: 导出所有图表、列表
    EXPORT_CITY_DATA: `${config.api}/project-daily-report/exportPerCityList`, // 数据大盘-城市数据: 导出图表、列表
    GET_INOUT_TRAFFIC: `${config.api}/statistics/query/in-out-traffic`, // 进出场流量统计查询
    GET_IN_TRAFFIC: `${config.api}/statistics/query/in-traffic`, // 进场流量统计查询
    GET_OUT_TRAFFIC: `${config.api}/statistics/query/out-traffic`, // 进场流量统计查询
    REGISTER_CUSTOMER_CHART: `${config.api}/customer_base_report/queryWxPublicCustomerReportList`, // 客户分析-基础数据-注册用户分析
    EXPORT_IN_OUT_TRAFFIC: `${config.api}/statistics/export/in-out-traffic`, // 数据中心-经营分析-进出场流量分析-导出
    GET_DATA_MONITOR_LIST: `${config.api}/ai-monitor-data/query`, // 数据中心-数据大盘-本地数据监控列表
    EXPORT_DATA_MONITOR: `${config.api}/ai-monitor-data/export`, // 数据中心-数据大盘-本地数据监控导出
    VEHICLE_BASE_INFO: `${config.api}/vehicle/base-info`, // 车牌画像基础信息
    VEHICLE_PARKING_RECORD: `${config.api}/vehicle/parking-record`, // 车牌画像停车记录
    FIRST_PARKING_TIME: `${config.api}/vehicle/first-parking-time`, // 首停时间
    RELEVANCE_MOBILE: `${config.api}/vehicle/relevance-mobile`, // 获取车牌号关联手机号列表
    RELEVANCE_COMBO: `${config.api}/vehicle/combo-buy-record`, // 获取车牌号关联的套餐购买记录
    CRASH_ITEM_MESSAGE_LIST: `${config.api}/crash-item-message/list`, // 获取历史消息记录

    // FAE数据统计
    FAE_STATISTIC_BY_HOUR: `${config.api}/parking-fault-report-overview/fault-distribution-report/page`, // 分时段统计
    FAE_STATISTIC_RECOVER_AVG: `${config.api}/parking-fault-report-overview/fault-recover-report/page`, // 平均恢复时长
    FAE_STATISTIC_TOTAL: `${config.api}/parking-fault-report-overview/total`, // 总计
    FAE_CARPORT_STATISTIC: `${config.api}/parking-fault-report/page`, // 车场统计
    FAE_CARPORT_STATISTIC_TOTAL: `${config.api}/parking-fault-report/total`, // 车场总计
    FAE_PV_UV_STATISTIC: `${config.api}/fae_page_view/statisticList`, // PV&UV统计
    FAE_USER_FLOAT_STATISTIC: `${config.api}/fae-user-report-overview/detail`, // PV&UV统计
    FAE_CARPORT_FAULT_DETAIL: `${config.api}/parking-fault-detail/page`, // PV&UV统计

    // 车位锁
    POST_LOCK_APPOINTLIST: `${config.lock}/admin/appointment-record/page`,
    GET_LOCK_EVALUATION_QUERY_DETAIL: `${config.lock}/admin/lock-evaluation/query-detail`, // 预约记录-查看评价
    GET_LOCK_BILLING_RULE_DETAIL: `${config.lock}/admin/parking-base-config/info`, // 获取计费规则基础信息
    GET_LOCK_BILLING_RULE_CONFIG_LIST: `${config.lock}/admin/lock-billing-rule-config/list`, // 获取当前车场预约计费规则列表
    GET_LOCK_BILLING_RULE_USERGROUP: `${config.lock}/admin/lock-group/list`, // 获取所有用户分组
    POST_LOCK_BILLING_RULE_CONFIG: `${config.lock}/admin/lock-billing-rule-config`, // 编辑计费规则
    GET_LOCK_VERSION_INFO_PAGE: `${config.lock}/admin/lock-version-info/page`, // v1.6_版本信息_分页
    POST_LOCK_VERSION_INFO_ADD: `${config.lock}/admin/lock-version-info`, // v1.6_版本信息_新增
    PUT_LOCK_VERSION_INFO_EDIT: `${config.lock}/admin/lock-version-info`, // v1.6_版本信息_编辑
    DELETE_LOCK_VERSION_INFO_DELETE: `${config.lock}/admin/lock-version-info`, // v1.6_版本信息_删除
    PUT_LOCK_VERSION_INFO_UPDATE_STATUS: `${config.lock}/admin/lock-version-info/update-status`, // v1.6_版本信息_启用/禁用
    POST_LOCK_OSS_UPLOAD: `${config.lock}/admin/lock-version-info/upload`, // v1.6_文件上传到阿里云
    POST_ADMIN_LOCK_UPGRADE_SCHEDULE_PAGE: `${config.lock}/admin/lock-upgrade-schedule/page`, // v1.6_升级任务_分页
    POST_ADMIN_LOCK_UPGRADE_SCHEDULE_DETAIL_PAGE: `${config.lock}/admin/lock-upgrade-schedule-detail/page`, // v1.6_升级任务详情_分页
    POST_ADMIN_LOCK_MACHINE_GROUP_LIST: `${config.lock}/admin/lock-machine-group/list`, // v1.6_机器分组_查询
    POST_ADMIN_LOCK_MACHINE_GROUP: `${config.lock}/admin/lock-machine-group`, // v1.6_机器分组_新增
    GET_ADMIN_LOCK_OTA_LIST: `${config.lock}/admin/lock/ota-list`, // v1.6_车位锁列表_序列号模糊查询
    POST_ADMIN_LOCK_UPGRADE_SCHEDULE_ADD: `${config.lock}/admin/lock-upgrade-schedule/add`, // v1.6_批量升级
    POST_ADMIN_LOCK_UPGRADE_SCHEDULE_DETAIL_QUERY_UPDATING: `${config.lock}/admin/lock-upgrade-schedule-detail/query-updating`, // v1.6_查询处于未开始、升级中的锁
    GET_ADMIN_LOCK_VERSION_INFO_ABLE_LIST: `${config.lock}/admin/lock-version-info/able-list`, // v1.6_版本信息_已启用列表

    GET_LOADRATE_DATAS: `${config.api}/load_rate_report/queryLoadRateList`, // 获取负载率统计数据
    EXPORT_LOADRATE_DATAS: `${config.api}/load_rate_report/export/loadRate`, // 导出负载率统计数据
    QUERY_COMBO_SELL_DATAS: `${config.api}/combo-analyze-report/queryComboSellReport`, // 获取套餐销售分析
    QUERY_COMBO_SELL_RATE_DATAS: `${config.api}/combo-analyze-report/queryComboSellRateReport`, // 获取套餐销售分析
    EXPORT_QUERY_COMBO_SELL_DATAS: `${config.api}/combo-analyze-report/export`, // 导出获取套餐销售分析
    GET_CUSTOMER_BASE_DATAS: `${config.api}/customer_base_report/queryCustomerBaseReportList`, // 获取用户基础数据
    EXPORT_CUSTOMER_BASE_DATAS: `${config.api}/customer_base_report/export/CustomerBaseReport`, // 导出用户基础数据
    CONSUME_BEHAVIOR_ANALYSIS: `${config.api}/combo_consume_report/queryComboConsumeReport`, // 消费行为分析
    CONSUME_BEHAVIOR_ANALYSIS_EXPORT: `${config.api}/combo_consume_report/export/ComboConsumeReport`, // 消费行为分析
    EXCEL_DOWNLOAD_RECORD: `${config.api}/excel_download_record/queryDownloadRecordList`, // 获取下载中心列表
    DELETE_DOWNLOAD_RECORD: `${config.api}/excel_download_record/deleteDownloadRecord`, // 删除下载列表项
    CONSUME_BEHAVIOR_PARK_ANALYSIS: `${config.api}/park_consume_report/queryParkConsumeReport`, // 临停消费行为分析
    CONSUME_BEHAVIOR_PARK_ANALYSIS_EXPORT: `${config.api}/park_consume_report/export/parkConsumeReport`, // 临停消费行为分析
    CONSUME_BEHAVIOR_PARK_PAYMENT: `${config.api}/sysDict/getPaymentWayDict`, // 临停消费行为支付字典

    PREPARE_COMBO_LIST: `${config.api}/payCombo/prepare-combo/list`, // 预约套餐列表

    // 多位多车获取停车记录
    GET_PARKING_PAYRECORD_LIST: `${config.api}/parkingGroup/getParkingPayRecordList`,
    EXPORT_PARKING_PAYRECORD_LIST: `${config.api}/parkingGroup/exportParkingPayRecordList`, // 多位多车导出停车记录

    // 营销管理 -> 支付立减
    ADD_REDUCTION_ACTIVITY: `${config.api}/pay-reduction-activities/add`, // 新增支付立减活动
    GET_REDUCTION_ACTIVITY_LIST: `${config.api}/pay-reduction-activities/page`, // 获取支付立减列表
    GET_REDUCTION_ACTIVITY_DETAIL: `${config.api}/pay-reduction-activities/detail`, // 查看支付立减活动详情
    GET_REDUCTION_DETAIL: `${config.api}/pay-reduction-activities/page-deductible`, // 查看立减情况
    CANCEL_REDUCTION_ACTIVITY: `${config.api}/pay-reduction-activities/cancel`, // 取消支付立减活动
    // 营销管理 -> 停车券
    GET_COUPON_ACTIVITY_LIST: `${config.api}/ticket-activity/page-get`, // 获取停车券活动列表/根据id获取活动详情（获取详情的时候只传id即可）
    ADD_COUPON_ACTIVITY: `${config.api}/ticket-activity/add`, // 新增停车券活动
    SET_COUPON_ACTIVITY_STATUS: `${config.api}/ticket-activity/update`, // 发放/废弃用户券活动
    GET_RELEASED_COUPON_LIST: `${config.api}/ticket-detail/page-get`, // 获取停车券已发放列表
    // 营销管理 -> 通用套餐管理
    POST_COMMONCOMBO_ADD: `${config.api}/common-combo-manage/add`, // 通用套餐管理-车辆添加
    POST_COMMONCOMBO_EDIT: `${config.api}/common-combo-manage/edit`, // 通用套餐管理-车辆编辑
    POST_COMMONCOMBO_CANCEL: `${config.api}/common-combo-manage/cancel`, // 通用套餐管理-车辆作废

    // 电子抵用券
    GET_SECOND_ACCOUNT_LIST: `${config.api}/bigcustomer_dept/secondAccountList`, // 二级商户列表
    GET_COLLECTION_MAIN: `${config.api}/collection-main/get-pull-list`, // 收款商户列表
    POST_COLLECTION_MAIN_USER: `${config.api}/collection-main/get-unify-pull-list`, // 收款商户列表（带账号权限）
    CREATE_BILL: `${config.api}/ticket-settle-bill/create-settle-bill`, // 生成结算账单
    GET_BILL_LIST: `${config.api}/ticket-settle-bill/get-settle-bill-list`, // 获取账单列表
    GET_TICKETS_LIST: `${config.api}/ticketAllot/read/getRecordSettleList`, // 结算账单列表
    SET_BILL_STATUS: `${config.api}/ticket-settle-bill/do-settle-bill`, // 结算账单操作接口
    EDIT_BILL_STATUS: `${config.api}/ticket-settle-bill/update-settle-bill`, // 结算账单操作接口
    GET_BILL_DETAIL: `${config.api}/ticket-settle-bill/get-settle-bill-detail`, // 获取账单详情接口
    GET_TICKET_WX_CODE: `${config.api}/ticket-settle-bill/get-pay-qrcode`, // 获取账单详情接口
    GET_TICKET_PAY_STATUS: `${config.api}/ticket-settle-bill/get-pay-status`, // 获取账单详情接口

    // 消息模板
    GET_TEMPLATE_LIST: `${config.api}/wx_public_notice_config/read/list`, // 获取消息模板列表
    UPDATE_TEMPLATE_STATUS: `${config.api}/wx_public_notice_config/update-status`, // 更新模板状态
    EDIT_MESSAGE_TEMPLATE: `${config.api}/wx_public_notice_config`, // 编辑消息模板
    ADD_MESSAGE_TEMPLATE: `${config.api}/wx_public_notice_config/add`, // 新增消息模板
    GET_MESSAGE_BIND_PARKING_LOT_LIST: `${config.api}/wx_public_notice_config/notice-config-lots`, // 获取绑定的车场列表
    DELETE_NOTICE_TEMPLATE: `${config.api}/wx_public_notice_config/delete`, // 删除消息模板

    // 退款申请
    REFUND_APPLY: `${config.api}/refundsRecords/admin/addRefund`,

    // 成本报批 v2.8
    FEE_COSTS_RECORD: `${config.api}/fee-costs-record/page`,
    FEE_COSTS_DETAIL: `${config.api}/fee-costs-record/detail`,
    FEE_COSTS_TYPE_LEVEL: `${config.api}/fee-costs-fee-type/level`, // 查询一级费用类型-V2.8
    FEE_COSTS_CHANGE_LOG: `${config.api}/fee-costs-change-log/page`, // 查询费用成本操作日志-V2.8
    GET_SYS_FEE_TYPE_TREE: `${config.api}/fee-costs-fee-type/tree`, // 查询申请类型（多级选择）-V2.8
    POST_FEE_COSTS_RECORD_ADD: `${config.api}/fee-costs-record/add`, // 发起费用成本-V2.8
    POST_FEE_COSTS_RECORD_UPDATE: `${config.api}/fee-costs-record/update`, // 发起费用成本-V2.8
    GET_LOCK_RECORD_DETAIL: `${config.lock}/admin/parking-record`, // 查询停车记录详情
    GET_LOCK_APPOINTMENT_RECORD_DETAIL: `${config.lock}/admin/appointment-record`, // 查询预约记录详情（单条)
    // 上报异常
    POST_PRESENCE_VEHICLE_REPORT_PAGE: `${config.api}/presence-vehicle-report/page`, // 长期在场车辆上报-列表查询-V2.8
    POST_PRESENCE_VEHICLE_REPORT_INFO: `${config.api}/presence-vehicle-report/info`, // 长期在场车辆上报-详情-V2.8
    POST_PRESENCE_VEHICLE_REPORT_GET_RECOGNITION_IMAGES: `${config.api}/presence-vehicle-report/get/recognition-images`, // 长期在场车辆上报 - 获取识别异常图片-V2.8
    POST_PRESENCE_VEHICLE_REPORT_FOLLOWV2: `${config.api}/presence-vehicle-report/v2/follow`, // 长期在场车辆上报处理-出场时间纠错-V2.8

    POST_WHITE_LIST_BILLING_PAGE: `${config.api}/white-list-billing/page`, // 计费白名单查询-V2.9
    GET_WHITE_LIST_LILLING_EXPORT: `${config.api}/white-list-billing/export`, // 白名单计费-导出V2.9
    POST_BIG_CUSTOMERUSER_PARKINGLOT: `${config.api}/bigcustomerUser/parkingLot`, // 根据车场ID查询大客户列表-V2.9
    GET_BIG_CUSTOMERUSER_CITY: `${config.api}/bigcustomerUser/city/`, // 根据城市ID查询大客户列表-V2.9

    POST_PARKINGPAYRECORD_GETPAYMENTINFO: `${config.api}/parkingPayRecord/getPaymentInfo`, // 停车场管理--停车支付记录-V2.9
    POST_PARKINGPAYRECORD_GETPAYMENTINFOCUS: `${config.api}/parkingPayRecord/getPaymentInfoForCus`, // 客户管理--停车支付记录-V2.9
    POST_PARKINGPAYRECORD_GETPAYMENTINFOCUSLIST: `${config.api}/parkingPayRecord/getPaymentInfoForCusList`, // 客户管理--客户列表--停车支付记录-V2.9
    GET_PARKINGPAYRECORD_EXPORT: `${config.api}/parkingPayRecord/export`, // 停车场管理-导出停车支付记录-V2.9
    GET_PARKINGPAYRECORD_EXPORTFORCUS: `${config.api}/parkingPayRecord/exportForCus`, // 客户管理--导出停车支付记录-V2.9
    GET_PARKINGPAYRECORD_EXPORTFORCUSLIST: `${config.api}/parkingPayRecord/exportForCusList`, // 客户管理--客户列表--导出停车支付记录-V2.9
    POST_PARKINGPAYRECORD_GETDEDUCTIONLIST: `${config.api}/parkingPayRecord/getDeductReCordList`, // 支付抵扣记录-停车抵扣记录v2.10
    CANCEL_PREPARE_COMBO: `${config.api}/car_pay_combo_prepare/cancel-prepare-combo`, // 套餐预定预约取消 v2.9
    POST_REFUNDS_REPORT_GETLIST: `${config.api}/refunds-report/getList`, // 获取退款报表列表-V2.9
    GET_REFUNDS_REPORT_EXPORT: `${config.api}/refunds-report/export`, // 退款报表导出-V2.9
    POST_REFUNDS_REPORT_GETTOTAL: `${config.api}/refunds-report/getTotal`, // 获取筛选条件下的合计数据-V2.9
    POST_PARKINGGROUP_PAY_COMBO_GROUP_PAGE: `${config.api}/parkingGroup/pay-combo-group/page`, // 分组套餐购买详情V2.10
    GET_PARKINGGROUP_EXPORT_PAY_COMBO_GROUP: `${config.api}/parkingGroup/export/pay-combo-group`, // 导出分组套餐购买详情V2.10

    GET_PARKINGGROUP_EXPORTCARLIST: `${config.api}/parkingGroup/export/car-list`, // 导出车主列表
    POST_CONSUMERECORD_READ_CONSUME_PAGE: `${config.api}/consumeRecord/read/consume-page`, // 运营管理-充值分组-获取余额支付记录
    POST_CONSUMERECORD_READ_CUSCONSUME_PAGE: `${config.api}/consumeRecord/read/customer-consume-page`, // 客户管理-充值分组-获取余额支付记录
    GET_CONSUMERECORD_CONSUME_EXPORT: `${config.api}/consumeRecord/export/consume-page`, // 运营管理-充值分组-导出余额支付记录
    GET_CONSUMERECORD_CUSCONSUME_EXPORT: `${config.api}/consumeRecord/export/customer-consume-page`, // 客户管理-充值分组-导出余额支付记录

    POST_ABNORMAL_MAPPING_ABNORMAL_RECORDS: `${config.api}/abnormal-mapping/abnormal-records`, // 识别异常库记录列表
    POST_ABNORMAL_MAPPING_RECOGNITION_INFO: `${config.api}/abnormal-mapping/recognition-info`, // 识别异常库记录详情
    POST_ABNORMAL_MAPPING_UPDATE_ABNORMAL_RECORD: `${config.api}/abnormal-mapping/update-abnormal-record`, // 识别异常库记录修改
    POST_ABNORMALMAPPING_SELECTABNORMALCONFIG_PAGE: `${config.api}/abnormal-mapping/selectAbnormalConfigPage`, // 识别异常配置记录列表
    POST_ABNORMALMAPPING_RECORD_UPDATE: `${config.api}/abnormal-mapping/updateAbnormalConfig`, // 识别异常配置修改
    GET_COMMON_COMBO_MANAGE_PARKINGLOT_PAYCOMBOID: `${config.api}/common-combo-manage/parking-lot/pay-combo-id/`, // 通过通用套餐ID查询所属车场-V2.10
    POST_PAY_COMBO_NOTICE_QUERY_LIST: `${config.api}/pay-combo-notice/query-list`, // 查询车场套餐须知配置V2.11
    POST_PAY_COMBO_NOTICE_UPDATE: `${config.api}/pay-combo-notice/update-enable`, // 更改车场套餐须知V2.11
    POST_ABNORMAL_CORRECT_RECORD: `${config.api}/abnormal-correct-record/abnormal-correct-record`, // 识别异常纠错统计记录
    POST_ABNORMAL_CORRECT_RECORD_DETAIL: `${config.api}/abnormal-correct-record/getAbnormalCorrectRecord`, // 获取识别异常纠错统计详情
    POST_SYSDEPT_READ_REGIONANDCITYANDPARKINGLOT: `${config.api}/sysDept/read/RegionAndCityAndParkingLot`, // 获取区域-城市-车场信息
    GET_ABNORMAL_CORRECT_RECORD_EXPORT: `${config.api}/abnormal-correct-record/exportAbnormalCorrectRecord`, // 导出识别异常纠错记录

    CUSTOMERINFO_BALANCE_LIST: `${config.api}/customerInfo/balance/list`, // 客户详情页的公众号余额列表接口带分页v2.10

    IMPORT_NOI_MONTH_RECORD: `${config.api}/parking-noi-record/import`, // 导入月度实际数表
    IMPORT_NOI_CORE_RECORD: `${config.api}/parking-annual-core-indicators/import`, // 导入核心指标表
    IMPORT_NOI_BASE_RECORD: `${config.api}/parking-noi-base-info/import`, // 导入基础信息表
    GET_NOI_RECORD: `${config.api}/parking-noi-record/getParkingNoiExcelPage`, // 获取月度实际数列表
    UPDATE_NOI_CHARTS: `${config.api}//parking-noi-record/updateReport`, // 更新图表

    // 事项、合同申请相关
    GET_CONTRACT_APPLY_LIST: `${config.api}/fee-contract-record/page`, // 获取合同申请列表
    GET_AFFAIR_APPLY_LIST: `${config.api}/fee-costs-record/page`, // 获取事项申请列表
    GET_ACCOUNT_SET_LIST: `${config.api}/account-set/get-all`, // 获取账套列表
    GET_PARKING_LOT_LIST: `${config.api}/account-set/project-info`, // 获取账套列表
    GET_AFFAIR_APPLY_DETAIL: `${config.api}/fee-costs-record/detail`, // 获取事项详情
    SUBMIT_K2: `${config.api}/k2/approve/create`, // 提交K2审批
    CONTRACT_APPLY_SUBMIT: `${config.api}/fee-contract-record/add`, // 保存合同申请
    GET_CUSTOM_BY_ACCOUNT: `${config.api}/account-set/customer-info`, // 根据账套获取客户
    GET_K2_FORM_URL: `${config.api}/k2/approve/url`, // 获取K2表单外链
    CANCEL_AFFAIR_APPLY: `${config.api}/fee-costs-record/cancel`, // 事项申请作废
    CANCEL_CONTRACT_APPLY: `${config.api}/fee-contract-record/cancel`, // 合同申请作废
    GET_CONTRACT_APPLY_DETAIL: `${config.api}/fee-contract-record/detail`, // 获取K2表单外链
    UPDATE_CONTRACT_APPLY: `${config.api}/fee-contract-record/update`, // 获取K2表单外链
    GET_CONTRACT_PAY_LIST: `${config.api}/fee-payment-record/contract/page`, // 获取合同付款列表
    GET_FEE_INFO: `${config.api}/fee-payment-record/fee-info`, // 获取费用清单
    GET_PAY_TYPE: `${config.api}/account-set/payment-type`, // 获取付款方式
    ADD_PAY_REQUEST: `${config.api}/fee-payment-record/contract/add`, // 新增付款申请
    GET_PAY_DETAIL: `${config.api}/fee-payment-record/contract/detail`, // 新增付款申请
    UPDATE_PAY_APPLY: `${config.api}/fee-payment-record/contract/update`, // 新增付款申请
    GET_FEE_LIST: `${config.api}/fee-payment-record/apply-module/record`, // 获取付款单列表
    GET_FLOW_ID_CONFIG: `${config.api}/k2-proc-config/page`, // 获取K2流程ID
    GET_PAY_BILL: `${config.api}/fee-payment-record/contract/bill`, // 获取付款单
    RE_IMPORT_BILL: `${config.api}/cash-control/reimport-payment-bill`, // 获取付款单
    CANCEL_PAY_REQUEST: `${config.api}/fee-payment-record/cancel`, // 获取付款单

    // 系统配置 -> 支付中心
    GET_PAYAPP_LIST: `${config.api}/pay-app/page`, // 支付应用列表
    GET_PAYAPP_DETAIL: `${config.api}/pay-app/detail`, // 支付应用详情
    ADD_PAYAPP_LIST: `${config.api}/pay-app/add`, // 支付应用新增
    UPDATE_PAYAPP_LIST: `${config.api}/pay-app/update`, // 支付应用编辑
    UPLOAD_PAYAPP_CRET: `${config.api}/pay-app/encode-cert`, // 支付应用公钥上传

    GET_PAYMERCH_LIST: `${config.api}/pay-merchant/page`, // 支付商户列表
    GET_PAYMERCH_DETAIL: `${config.api}/pay-merchant/page-detail`, // 支付商户详情
    ADD_PAYMERCH_LIST: `${config.api}/pay-merchant/add-pay-merchant`, // 支付商户新增
    UPDATE_PAYMERCH_LIST: `${config.api}/pay-merchant/update-pay-merchant`, // 支付商户编辑
    GET_ALL_MERCH_LIST: `${config.api}/pay-merchant/merchant-list`, // 服务商列表
    GET_ALL_APP_LIST: `${config.api}/pay-merchant/app-list`, // 应用名称列表
    UPLOAD_CRET_PATH: `${config.api}/pay-merchant/file-upload`, // 退款证书上传
    POST_ACCOUNT_SET_READ_LIST: `${config.api}/account-set/read/list`, // 获取账套列表
    POST_ACCOUNT_SET_ADD: `${config.api}/account-set/add`, // 新增账套
    POST_ACCOUNT_SET_UPDATE: `${config.api}/account-set/update`, // 账套编辑保存
    POST_ACCOUNT_SET_CUSTOMER_INFO_PAGE: `${config.api}/account-set/customer-info/page`, // 客户列表-分页-V2.14
    POST_ACCOUNT_SET_CUSTOMER_INFO_ADD: `${config.api}/account-set/customer-info/add`, // 客户列表-新增 V2.14
    POST_ACCOUNT_SET_CUSTOMER_INFO_UPDATE: `${config.api}/account-set/customer-info/update`, // 客户列表-编辑V2.14
    GET_ACCOUNT_SET_CUSTOMER_INFO_DETAIL: `${config.api}/account-set/customer-info/detail/`, // 客户信息-详情V2.14
    POST_ACCOUNT_SET_BIGCUSTOMER_MERCHANT_ASSOCIATEABLE: `${config.api}/account-set/customer-info/bigcustomer/merchant/associateable`, // 查询可关联的大客户商户-V2.14
    POST_ACCOUNT_SET_BIGCUSTOMER_MERCHANT_ASSOCIATEABLE_PAGE: `${config.api}/account-set/customer-info/bigcustomer/merchant/associateable/page`, // 分页查询可关联的大客户信息-V2.15
    GET_ACCOUNT_SET_GET_ALL: `${config.api}/account-set/get-all`, // 下拉查询账套接口-V2.14

    GET_BUSINESS_TYPE_LIST: `${config.api}/fee-costs-fee-type/read/list`, // 获取业务类型列表
    ADD_BUSINESS_TYPE: `${config.api}/fee-costs-fee-type/add`, // 新增业务类型数据
    UPDATE_BUSINESS_TYPE: `${config.api}/fee-costs-fee-type/update`, // 编辑业务类型数据
    DISABLED_BUSINESS_TYPE: `${config.api}/fee-costs-fee-type/updateOnOff`, // 业务类型启动禁用接口
    LOGIN_LOG_READ_LIST: `${config.api}/login-log/read/list`, // 获取登陆日志列表

    POST_K2_PROC_CONFIG_PAGE: `${config.api}/k2-proc-config/page`, // 分页查询K2流程配置-V2.15
    POST_K2_PROC_CONFIG_UPDATE_STATUS: `${config.api}/k2-proc-config/update/status`, // 更新流程配置状态-V2.15
    POST_K2_PROC_CONFIG_ABLE_PROCID: `${config.api}/k2-proc-config/config-able-procid`, // 查询可配置的流程ID-V2.15
    POST_K2_PROC_CONFIG_ABLE_PARKING: `${config.api}/k2-proc-config/config-able-parking`, // 查询可配置的车场-V2.15
    POST_K2_PROC_CONFIG_ADD: `${config.api}/k2-proc-config/add`, // K2流程配置新增-V2.15
    POST_K2_PROC_CONFIG_UPDATE: `${config.api}/k2-proc-config/update`, // 更新流程配置-V2.15
    POST_K2_PROC_CONFIG_DETAIL: `${config.api}/k2-proc-config/detail`, // 流程配置明细-V2.15

    // 停车抵扣配置
    PARK_COMMERCE_CONFIG_INFO: `${config.api}/parking-commerce-config/query/info`, // 查询积分抵扣配置
    PARK_INTEGRAL_DEDUCT_DELETE: `${config.api}/parking-commerce-config/delete`, // 删除积分配置
    PARK_INTEGRAL_DEDUCT_ADD: `${config.api}/parking-commerce-config/add`, // 添加积分抵用配置
    PARK_INTEGRAL_DEDUCT_UPDATE: `${config.api}/parking-commerce-config/update`, // 更新积分抵用配置
    PARK_MEMBER_CONFIG_ADD: `${config.api}/parking-member-config/add`, // 会员抵扣添加抵用配置
    PARK_MEMBER_CONFIG_PAGE: `${config.api}/parking-member-config/page`, // 分页查询会员抵扣配置
    PARK_MEMBER_CONFIG_UPDATE: `${config.api}/parking-member-config/update`, // 会员抵扣更新抵用配置
    PARK_MEMBER_CONFIG_QUERY: `${config.api}/parking-member-config/query/id`, // 查询会员抵扣配置
    PARK_MEMBER_CONFIG_DELETE: `${config.api}/parking-member-config/delete`, // 删除会员等级配置
    RECOGNITION_FAIL_RECORD_PRE_NEXT_PAGE: `${config.api}/recognitionFailRecord/getUpOrDownRecordDetail`, // 识别失败上一条或下一条记录
    GET_BUSINESS_DETAIL: `${config.api}/k2/approve/business/detail`, // 获取业务审批详情
    GET_K2_APPROVAL: `${config.api}/k2/approve/detail-business-id`, // 获取K2审批详情
    GET_K2_APPROVAL_BY_BOID: `${config.api}/k2/approve/detail-bo-id`, // 根据boid获取K2审批详情

    POST_CLEAN_RECOGNITION_CODE_CONFIG_PAGE: `${config.api}/clean-recognition-code-config/page`, // 获取识别码配置
    POST_CLEAN_RECOGNITION_CODE_CONFIG_ADD: `${config.api}/clean-recognition-code-config/add`, // 添加配置
    PUT_CLEAN_RECOGNITION_CODE_CONFIG_UPDATE: `${config.api}/clean-recognition-code-config/update`, // 编辑配置
    DELETE_CLEAN_RECOGNITION_CODE_CONFIG_DELETE: `${config.api}/clean-recognition-code-config/`, // 删除配置

    // 本地服务
    GET_JAR_VERSION_LIST: `${config.api}/ai-jar-version/page`, // 获取jar包版本信息列表
    GET_JAR_VERSION: `${config.api}/ai-jar-version/list`, // 根据车场获取可用jar包列表
    UPDATE_JAR_VERSION: `${config.api}/ai-jar-version/update`, // 更新jar包信息
    UPLOAD_JAR: `${config.api}/ai-jar-version/add`, // 上传文件信息
    DELETE_JAR: `${config.api}/ai-jar-version/delete`, // 删除对应版本包及信息
    GET_CLIENT_VERSION_LIST: `${config.api}/ai-client-version/page`, // 获取客户端版本列表
    ADD_CLIENT_VERSION: `${config.api}/ai-client-version/add`, // 新增已部署客户端
    UPDATE_CLIENT: `${config.api}/ai-client-version/upgrade`, // 升级客户端

    POST_MANAGEMENT_DAILY_REPORT_PAGE: `${config.api}/management-daily-report/page/list`, // 分页查询经营日报
    POST_MANAGEMENT_DAILY_REPORT_IMPORT: `${config.api}/management-daily-report/import`, // 经营日报导入

    PARK_PAY_RECORD_TOTAL_AMOUNT: `${config.api}/parkingGroup/parking-pay-record/list/total-amount`, // 车辆分组-多位多车-停车支付记录总金额 v2.16
    CUSTOMER_CONSUME_TOTAL_AMOUNT: `${config.api}/consumeRecord/customer-consume-page/total-amount`, // 客户管理&财务管理-充值分组-获取余额支付记录-总金额
    WHITE_LIST_TOTAL_AMOUNT: `${config.api}/white-list-billing/page/total-amount`, // 计费白名单查询-总金额-V2.16
    BALANCE_REFUND_TOTAL_AMOUNT: `${config.api}/refunds-balance-record/page/total-amount`, // 充值退款记录-总金额
    POST_PARKING_NOI_RECORD_DETAIL_PAGE: `${config.api}/parking-noi-record/getParkingNoiDetailPage`, // 一线/项目页签报表
    POST_PARKING_NOI_RECORD_DETAIL_PAGE_EXPORT: `${config.api}/parking-noi-record/exportParkingNoiDetailPage`, // 一线/项目页签报表导出
    OPERATION_CONSUME_PAGE_TOTAL_AMOUNT: `${config.api}/consumeRecord/consume-page/total-amount` // 运营管理-充值分组-获取余额支付记录-总金额
};
