/**
 * name 关联前端 router
 * menuCode 关联后端权限树
 */
export default [
    {
        title: "停车场管理",
        name: "park",
        path: "park",
        menuCode: "parking",
        children: [
            {
                title: "车场详情",
                name: "parkDetail",
                menuCode: "parking.base",
                path: "detail"
            },
            {
                title: "基础配置",
                name: "parkConfiguration",
                menuCode: "parking.baseConfig",
                path: "configuration"
            },
            {
                title: "销方配置",
                name: "parkInvoice",
                path: "invoice",
                menuCode: "parking.invoiceconfig"
            },
            {
                title: "套餐管理",
                name: "comboManager",
                menuCode: "parking.combomanager",
                path: "combomanager",
                children: [
                    {
                        title: "车辆套餐管理",
                        name: "carPayCombo",
                        menuCode: "parking.combomanager.carpaycombo",
                        path: "carpaycombo"
                    },
                    {
                        title: "套餐预定记录",
                        name: "comboBookRecord",
                        menuCode: "parking.combomanager.comboPrepare",
                        path: "combobookrecord"
                    },
                    {
                        title: "套餐购买记录",
                        name: "comboRecord",
                        menuCode: "parking.combomanager.comboRecord",
                        path: "comborecord"
                    },
                    {
                        title: "购买须知配置",
                        name: "comboBuyInstruction",
                        menuCode: "parking.combomanager.notice",
                        path: "comboBuyInstruction"
                    }
                ]
            },
            {
                title: "停车记录",
                name: "parkRecord",
                menuCode: "parking.parkingrecord",
                path: "record"
            },
            {
                title: "支付抵扣记录",
                name: "parkPayRecord",
                menuCode: "parking.parkingPayRecord",
                path: "payRecord"
            },
            {
                title: "拥堵放行",
                name: "parkCongestion",
                menuCode: "parking.congestion"
            },
            {
                title: "公告信息",
                name: "parkNotice",
                menuCode: "parking.noticeConfig"
            },
            {
                title: "计费规则",
                name: "parkRules",
                menuCode: "parking.payRule",
                path: "rules",
                children: [
                    {
                        title: "临停规则",
                        name: "parkTempRule",
                        menuCode: "parking.payRule.tempRule",
                        path: "temp"
                    },
                    {
                        title: "套餐规则",
                        name: "parkComboRule",
                        menuCode: "parking.payRule.comboRule",
                        path: "combo"
                    },
                    {
                        title: "节假日计费规则",
                        name: "parkHolidayRule",
                        menuCode: "parking.payRule.holidayRule",
                        path: "holiday"
                    },
                    {
                        title: "次卡计费规则",
                        name: "parkOvernightRule",
                        menuCode: "parking.payRule.overnight",
                        path: "overnight"
                    },
                    {
                        title: "预约计费规则",
                        name: "appointFee",
                        menuCode: "parking.payRule.placeholder_lock.appoint_rule",
                        path: "appointFee"
                    }
                ]
            },
            {
                title: "分组功能",
                name: "parkGroup",
                path: "group",
                children: [
                    {
                        title: "一位多车",
                        name: "parkGroupMulcar",
                        path: "mulcar"
                    },
                    {
                        title: "套餐分组",
                        name: "parkGroupCombo",
                        path: "combo"
                    },
                    {
                        title: "充值分组",
                        name: "parkGroupRecharge",
                        path: "recharge"
                    }
                ]
            },
            {
                title: "白名单",
                name: "parkWhitelist",
                path: "whitelist"
            },
            {
                title: "套餐详情",
                name: "parkCombo",
                path: "combo"
            },
            {
                title: "套餐购买记录",
                name: "parkComborecord",
                path: "comborecord"
            },
            {
                title: "预警历史",
                name: "parkAlert",
                path: "alert"
            },
            {
                title: "大客户管理",
                name: "parkBigCustomer",
                menuCode: "parking.bigcustomer",
                children: [
                    {
                        title: "大客户账号配置",
                        name: "parkBigCustomerAccount",
                        menuCode: "parking.bigcustomer.user"
                    },
                    {
                        title: "时长配置",
                        name: "parkBigCustomerDuration",
                        menuCode: "parking.bigcustomer.duration"
                    },
                    {
                        title: "纸质抵用券",
                        name: "parkBigCustomerVoucher",
                        menuCode: "parking.bigcustomer.ticket"
                    },
                    {
                        title: "抵用券抵用记录",
                        name: "parkBigCustomerDerate",
                        menuCode: "parking.bigcustomer.derate"
                    },
                    {
                        title: "结算账单",
                        name: "parkBigCustomerClearBill",
                        menuCode: "parking.bigcustomer.settle"
                    }
                ]
            },
            {
                title: "出入场控制",
                name: "incontrol",
                menuCode: "parking.incontrol",
                children: [
                    {
                        title: "出入时段控制",
                        name: "parkControlTime",
                        menuCode: "parking.incontrol.time"
                    },
                    {
                        title: "出入识别控制",
                        name: "parkControlCheck",
                        menuCode: "parking.incontrol.inoutcheck"
                    }
                ]
            },
            {
                title: "分组车辆管理",
                name: "groupCarManage",
                menuCode: "parking.groupcarmanage",
                children: [
                    {
                        title: "套餐分组",
                        name: "manageComboGroup",
                        menuCode: "parking.groupcarmanage.comboGroup"
                    },
                    {
                        title: "多位多车",
                        name: "manageMultiPlaceAndCarList",
                        menuCode: "parking.groupcarmanage.multiPlaceAndCar"
                    },
                    {
                        title: "白名单管理",
                        name: "manageWhite",
                        menuCode: "parking.groupcarmanage.whitelist"
                    },
                    {
                        title: "黑名单管理",
                        name: "manageBlack",
                        menuCode: "parking.groupcarmanage.blacklist"
                    },
                    {
                        title: "预约分组",
                        name: "manageSubscribe",
                        menuCode: "parking.groupcarmanage.reserve.group"
                    }
                ]
            },
            {
                title: "占位型车位锁",
                name: "occupyLock",
                menuCode: "parking.placeholder_lock",
                children: [
                    {
                        title: "车位锁列表",
                        name: "occupyLockList",
                        menuCode: "parking.placeholder_lock.list"
                    },
                    {
                        title: "用户列表",
                        name: "occupyLockUserGroup",
                        menuCode: "parking.placeholder_lock.user_manage"
                    },
                    {
                        title: "警报管理",
                        name: "occupyLockAlarmManage",
                        menuCode: "parking.placeholder_lock.alert_manage"
                    },
                    {
                        title: "停车记录",
                        name: "occupyLockRecord",
                        menuCode: "parking.placeholder_lock.parking_record"
                    },
                    {
                        title: "车位锁信息",
                        name: "occupyLockInfoList"
                    },
                    {
                        title: "车主信息",
                        name: "occupyLockOwnerList"
                    },
                    {
                        title: "预约记录",
                        name: "occupyAppoint",
                        menuCode: "parking.placeholder_lock.reserve_record"
                    }
                ]
            },
            {
                title: "拥堵放行",
                name: "parkCongestion",
                menuCode: "parking.congestion"
            },
            {
                title: "卡底盘车位锁",
                name: "lockManage",
                menuCode: "parking.lock",
                children: [
                    {
                        title: "车位锁列表",
                        name: "chassisLockList",
                        menuCode: "parking.lock.list"
                    },
                    {
                        title: "停车记录",
                        name: "chassisLockRecord",
                        menuCode: "parking.lock.parkingRecord"
                    },
                    {
                        title: "预约记录",
                        name: "chassisAppointRecord",
                        menuCode: "parking.lock.appointmentRecord"
                    }
                ]
            },
            {
                title: "显屏文案管理",
                name: "displayScreen",
                menuCode: "parking.screenCopywriting"
            },
            {
                title: "停车优惠配置",
                name: "parkConcessions",
                menuCode: "parking.parkingDeductConfig"
            }
        ]
    },
    {
        title: "资产管理",
        name: "project",
        path: "project",
        icon: "vk-icon-level1-program",
        desc: "自主车场项目信息配置与管理，操作灵活快捷",
        menuCode: "project",
        children: [
            {
                title: "资产列表",
                name: "propertyList",
                path: "propertyList",
                hideSubMenu: true,
                menuCode: "project.assetList",
                children: [
                    {
                        title: "资产卡片",
                        path: "propertyCard",
                        name: "propertyCard",
                        menuCode: "project.assetList.card"
                    },
                    {
                        title: "项目管理",
                        path: "projectManage",
                        name: "projectManage",
                        menuCode: "project.assetList.parkingLot"
                    }
                ]
            },
            {
                title: "资产列表（新）",
                name: "newAssetsList",
                path: "newAssetsList",
                menuCode: "parking.baseInfo"
            }
        ]
    },
    {
        title: "客户管理",
        name: "customer",
        path: "customer",
        icon: "vk-icon-level1-customer",
        desc: "客户信息查询与分析，深度挖掘客户需求与价值",
        menuCode: "customer",
        children: [
            {
                title: "客户列表",
                name: "customerList",
                path: "list",
                hideSubMenu: true,
                menuCode: "customer.list",
                children: [
                    {
                        title: "车牌管理",
                        name: "customerPlate",
                        path: "plate",
                        menuCode: "customer.list.plateNumber"
                    }, {
                        title: "停车记录",
                        name: "customerRecord",
                        path: "record",
                        menuCode: "customer.list.record"
                    }, {
                        title: "支付抵扣记录",
                        name: "customeDetailPayRecord",
                        path: "payRecord",
                        menuCode: "customer.list.parkingPayRecord"
                    }, {
                        title: "套餐管理",
                        name: "customerCombo",
                        path: "combo",
                        menuCode: "customer.list.combo"
                    }, {
                        title: "套餐购买记录",
                        name: "customerComboRecord",
                        path: "comboRecord",
                        menuCode: "customer.list.comboRecord"
                    }, {
                        title: "充值记录",
                        name: "customerRecharge",
                        path: "record",
                        menuCode: "customer.list.recharge"
                    }, {
                        title: "停车时长账户",
                        name: "customerTimeAccount",
                        path: "record",
                        menuCode: "customer.list.timeticket"
                    }
                ]
            },
            {
                title: "停车记录",
                name: "customerParkingRecord",
                path: "parkingrecord",
                menuCode: "customer.parkingrecord"
            },
            {
                title: "支付抵扣记录",
                name: "customerPayRecord",
                path: "payRecord",
                menuCode: "customer.parkingPayRecord"
            },
            {
                title: "套餐管理",
                name: "customerComboList",
                path: "combo",
                menuCode: "customer.combo"
            },
            {
                title: "套餐购买记录",
                name: "customerComboBuyRecord",
                path: "comboBuyRecord",
                menuCode: "customer.comboBuyRecord"
            },
            {
                title: "充值记录",
                name: "customerRechargeList",
                path: "recharge",
                menuCode: "customer.recharge"
            },
            {
                title: "充电桩",
                name: "ChargingPile",
                menuCode: "customer.evcs",
                children: [
                    {
                        title: "用户管理",
                        name: "UserManageList",
                        path: "UserManageList",
                        menuCode: "customer.evcs.customerManage"
                    },
                    {
                        title: "充值记录",
                        name: "RechargeRecodeList",
                        path: "RechargeRecodeList",
                        menuCode: "customer.evcs.rechargeRecord"
                    },
                    {
                        title: "充电记录",
                        name: "ChargingRecodeList",
                        path: "ChargingRecodeList",
                        menuCode: "customer.evcs.chargeRecord"
                    },
                    {
                        title: "统计报表",
                        name: "numericalStatement",
                        path: "numericalStatement",
                        menuCode: "customer.evcs.numericalStatement"
                    },
                    {
                        title: "计费规则",
                        name: "chargingPileFeeRule",
                        path: "feeRule",
                        menuCode: "customer.evcs.chargeConfig"
                    },
                    {
                        title: "公告管理",
                        name: "chargingPileNoticyManage",
                        path: "noticyManage",
                        menuCode: "customer.evcs.bulletin"
                    },
                    {
                        title: "电桩管理",
                        name: "chargingPileStation",
                        path: "station",
                        menuCode: "customer.evcs.gun"
                    }

                ]
            }
        ]
    },
    {
        title: "运营管理",
        name: "operation", // operation
        path: "operation",
        icon: "vk-icon-level1-operation",
        desc: "智能化车场后台运营与操作，提升客户无感体验",
        menuCode: "operation",
        children: [
            {
                title: "客服后台",
                name: "oprService",
                menuCode: "operation.service",
                children: [
                    {
                        title: "客户评价",
                        name: "oprServiceEvaluation",
                        menuCode: "operation.service.evaluation"
                    },
                    {
                        title: "退款申请",
                        name: "oprServiceRefunds",
                        menuCode: "operation.service.refunds"
                    },
                    {
                        title: "消控报错",
                        name: "oprServiceCtrl",
                        menuCode: "operation.service.controlerror"
                    },
                    // {
                    //     title: "咨询反馈",
                    //     name: "oprServiceFeedback",
                    //     menuCode: "operation.service.feeback"
                    // },
                    {
                        title: "上报异常",
                        name: "OprReportQuestion",
                        menuCode: "operation.service.pv_report"
                    },
                    {
                        title: "意见反馈",
                        name: "opinionFeedback",
                        menuCode: "operation.service.feedback"
                    }
                ]
            },
            {
                title: "车辆管理",
                name: "carManage",
                menuCode: "operation.carmanage",
                children: [
                    {
                        title: "充值分组",
                        name: "groupRecharge",
                        menuCode: "operation.carmanage.recharge"
                    },
                    {
                        title: "白名单管理",
                        name: "carManageWhite",
                        menuCode: "operation.carmanage.whitelist"
                    },
                    {
                        title: "黑名单管理",
                        name: "carManageBlack",
                        menuCode: "operation.carmanage.blacklist"
                    },
                    {
                        title: "多位多车分组",
                        name: "carManageMultiPlaceAndCarList",
                        menuCode: "operation.carmanage.multiPlaceAndCar"
                    }
                ]
            },
            {
                title: "运营业务管理",
                name: "oprBusiness",
                menuCode: "operation.bs_apply",
                children: [
                    {
                        title: "支出事项申请",
                        name: "feeCostReported",
                        menuCode: "operation.bs_apply.fee_cost"
                    },
                    {
                        title: "支出合同申请",
                        name: "contractApply",
                        menuCode: "operation.bs_apply.contract"
                    },
                    {
                        title: "合同付款申请",
                        name: "contractPay",
                        menuCode: "operation.bs_apply.payment_contract"
                    },
                    {
                        title: "客户列表",
                        name: "oprBusinessCustomerList",
                        menuCode: "operation.bs_apply.customer"
                    }
                ]
            },
            {
                title: "套餐到期管理",
                name: "packageDueManage",
                menuCode: "operation.comboOverdueManage"
            },
            {
                title: "套餐新用户管理",
                name: "comboNewUser",
                menuCode: "operation.combonewuser"
            },
            {
                title: "费用追缴",
                name: "oprSupplementary",
                menuCode: "operation.supplementary"
            },
            {
                title: "获取验证码",
                name: "oprCaptcha",
                menuCode: "operation.messagecode"
            },
            {
                title: "实名认证",
                name: "oprConfirm",
                menuCode: "operation.confirm"
            },
            {
                // title: "总控室",
                // name: "oprCtrl",
                // menuCode: "operation.control"
            },
            {
                title: "运营操作记录",
                name: "oprRecord",
                menuCode: "operation.operationrecord"
            },
            {
                // title: "白名单配置",
                // name: "oprWhitelist",
                // menuCode: "operation.whitelist"
            },
            {
                title: "预警历史",
                name: "earlyWarningHistory",
                menuCode: "operation.earlyWarningHistory"
            }
        ]
    },
    {
        title: "营销管理",
        name: "marketing",
        path: "marketing",
        icon: "vk-icon-level1-marketing",
        desc: "科技化线上营销手段，搭建精准完善的线上线下运营体系",
        menuCode: "marketing",
        children: [
            {
                title: "活动配置",
                name: "marketActivity",
                menuCode: "marketing.activity",
                children: [
                    // {
                    //     title: "支付活动",
                    //     name: "marketActivityPay",
                    //     path: "pay",
                    //     menuCode: "operation.activity.pay"
                    // },
                    {
                        title: "注册活动",
                        name: "marketActivityRegister",
                        path: "register",
                        menuCode: "marketing.activity.register"
                    }
                ]
            },
            {
                title: "停车券管理",
                name: "couponManage",
                menuCode: "marketing.userticket",
                children: [
                    {
                        title: "停车券",
                        name: "couponList",
                        path: "list",
                        menuCode: "marketing.userticket.activilty"
                    },
                    {
                        title: "已发放",
                        name: "releasedCoupon",
                        path: "released",
                        menuCode: "marketing.userticket.issued"
                    }
                ]
            },
            {
                title: "支付立减",
                name: "reduce",
                path: "reduce",
                menuCode: "marketing.reduce"
            },
            {
                title: "消息模板管理",
                name: "messageTemplateManage",
                menuCode: "marketing.msg.template",
                children: [
                    {
                        title: "消息模板列表",
                        name: "messageTemplateList",
                        menuCode: "marketing.msg.template.list"
                    }
                ]
            },
            {
                title: "广告管理",
                name: "oprAd",
                menuCode: "marketing.adManager",
                children: [
                    {
                        title: "广告配置",
                        name: "oprAdSetting",
                        menuCode: "marketing.adManager.adConfig"
                    },
                    {
                        title: "推送分析",
                        name: "oprAdAnalysis",
                        menuCode: "marketing.adManager.analysis"
                    }
                ]
            },
            {
                title: "通用套餐",
                name: "commonCombo",
                menuCode: "marketing.commoncombo",
                children: [
                    {
                        title: "通用套餐设置",
                        name: "commonComboList",
                        menuCode: "marketing.commoncombo.list"
                    },
                    {
                        title: "套餐购买记录",
                        name: "comboBuyRecordList",
                        menuCode: "marketing.commoncombo.buyrecord"
                    },
                    {
                        title: "通用套餐管理",
                        name: "comboManageList",
                        menuCode: "marketing.commoncombo.manage"
                    }
                ]
            }
        ]
    },
    {
        title: "财务管理",
        name: "finance",
        path: "finance",
        icon: "vk-icon-level1-finance",
        desc: "多维度财务报表统计，营收情况一目了然",
        menuCode: "finance",
        children: [
            {
                title: "财务配置",
                name: "financeConfig",
                path: "financeConfig",
                menuCode: "finance.configuration",
                children: [
                    {
                        title: "公司及账套管理",
                        name: "companyAccountManageList",
                        path: "list",
                        menuCode: "finance.configuration.accountSet"
                    }
                ]
            },
            {
                title: "统计报表",
                name: "statReport",
                path: "statReport",
                menuCode: "finance.statisticsReport",
                children: [
                    {
                        title: "年度统计(填报)",
                        name: "annualReport",
                        path: "annualReport",
                        menuCode: "finance.statisticsReport.annual"
                    }
                ]
            },
            {
                title: "发票管理",
                name: "finInvoice",
                path: "invoice",
                menuCode: "finance.invoice",
                children: [
                    {
                        title: "销方列表",
                        name: "finInvoiceSeller",
                        path: "sellerList",
                        menuCode: "finance.invoice.seller"
                    },
                    {
                        title: "开票记录",
                        name: "finInvoiceRecord",
                        path: "record",
                        menuCode: "finance.invoice.record"
                    },
                    {
                        title: "开票内容配置",
                        name: "finInvoiceConfigList",
                        path: "list",
                        menuCode: "finance.invoice.content"
                    }
                ]
            },
            {
                title: "报表管理",
                name: "finStatement",
                path: "statement",
                menuCode: "finance.statement",
                children: [
                    {
                        title: "经营报表",
                        name: "finStatementOperation",
                        path: "operation",
                        menuCode: "finance.statement.operation"
                    },
                    {
                        title: "实收报表",
                        name: "finStatementFinance",
                        path: "finance",
                        menuCode: "finance.statement.finance"
                    },
                    {
                        title: "临停记录表",
                        name: "finStatementParking",
                        path: "parking",
                        menuCode: "finance.statement.parking"
                    },
                    {
                        title: "套餐购买记录表",
                        name: "finStatementCombo",
                        path: "combo",
                        menuCode: "finance.statement.combo"
                    },
                    {
                        title: "充值记录表",
                        name: "finStatementRecharge",
                        path: "recharge",
                        menuCode: "finance.statement.recharge"
                    },
                    {
                        title: "白名单计费表",
                        name: "finStatementWhiteList",
                        path: "whitelist",
                        menuCode: "finance.statement.whiteListBilling"
                    },
                    {
                        title: "共享停车收入表",
                        name: "finStatementShareList",
                        path: "sharelist",
                        menuCode: "finance.statement.shareparking"
                    }
                ]
            },
            {
                title: "收支管理",
                name: "finExpenditure",
                path: "expenditure",
                menuCode: "finance.revenuesAndExpenditure",
                children: [
                    {
                        title: "退款申请",
                        name: "finExpenditureRefund",
                        path: "refund",
                        menuCode: "finance.revenuesAndExpenditure.refund"
                    },
                    {
                        title: "结算账单",
                        name: "financeClearBill",
                        path: "clearBill",
                        menuCode: "finance.revenuesAndExpenditure.settle"
                    }
                ]
            }
        ]
    },
    {
        title: "系统配置",
        name: "system",
        path: "system",
        icon: "vk-icon-level1-system",
        desc: "系统后台基础配置，同时实现权限层级分配与隔离",
        menuCode: "system",
        children: [
            {
                title: "角色权限",
                name: "systemRole",
                path: "role",
                menuCode: "system.role"
            },
            {
                title: "用户管理",
                name: "systemUser",
                path: "user",
                menuCode: "system.user"
            },
            {
                title: "公众号管理",
                name: "systemWxpublic",
                path: "wxpublic",
                menuCode: "system.wxPublic"
            },
            {
                title: "供应商管理",
                name: "systemSupplier",
                path: "supplier",
                menuCode: "system.supplier"
            },
            {
                title: "日期转化配置",
                name: "systemDateConvert",
                path: "date",
                menuCode: "system.dateConvert"
            },
            {
                title: "预警管理",
                name: "systemAlert",
                path: "alert",
                menuCode: "system.earlyWarning"
            },
            {
                title: "全局配置",
                name: "systemGlobal",
                path: "global",
                menuCode: "system.global",
                children: [
                    {
                        title: "活动配置",
                        name: "systemGlobalActivity",
                        path: "activty",
                        menuCode: "system.global.activity"
                    }
                ]
            },
            {
                title: "退款配置",
                name: "systemRefund",
                path: "refund",
                menuCode: "system.refundConfig",
                children: [
                    {
                        title: "自动退款",
                        name: "systemRefundAutoRefund",
                        path: "autoRefund",
                        menuCode: "system.refundConfig.autoRefund"
                    },
                    {
                        title: "无需审批",
                        name: "systemRefundApproval",
                        path: "approval",
                        menuCode: "system.refund.approval"
                    }
                ]
            },
            {
                title: "支付管理",
                name: "payManage",
                path: "paymanage",
                menuCode: "system.paymanage",
                children: [
                    {
                        title: "招商银行一网通",
                        name: "payManageCMB",
                        path: "cmb",
                        menuCode: "system.paymanage.cmbc"
                    },
                    {
                        title: "工商银行E支付",
                        name: "payManageICBC",
                        path: "icbc",
                        menuCode: "system.paymanage.icbc"
                    },
                    {
                        title: "支付宝商户",
                        name: "payManageAlipay",
                        path: "alipay",
                        menuCode: "system.paymanage.alipay"
                    },
                    {
                        title: "合并支付配置",
                        name: "consolidatedPay",
                        path: "consolidatedpay",
                        menuCode: "system.combine"
                    }
                ]
            }, {
                title: "支付中心配置",
                name: "payCenter",
                path: "paycenter",
                menuCode: "system.payCenterConfig",
                children: [
                    {
                        title: "支付应用配置",
                        name: "payCenterApp",
                        path: "app",
                        menuCode: "system.payCenterConfig.application"
                    },
                    {
                        title: "支付商户配置",
                        name: "payCenterBusiness",
                        path: "business",
                        menuCode: "system.payCenterConfig.merchant"
                    }
                ]
            }, {
                title: "数据导入",
                name: "dataImport",
                path: "import",
                menuCode: "system.dataImport",
                children: [
                    {
                        title: "NOI列表",
                        name: "NOIList",
                        path: "noi",
                        menuCode: "system.dataImport.noi"
                    },
                    {
                        title: "业务类型配置",
                        name: "businessTypeList",
                        path: "add",
                        menuCode: "system.dataImport.business"
                    },
                    {
                        title: "流程ID配置",
                        name: "ProcessIdConfig",
                        path: "processIdConfig",
                        menuCode: "system.dataImport.k2ProcConfig"
                    }
                ]
            }, {
                title: "登录日志",
                name: "loginReport",
                path: "loginReport",
                menuCode: "system.login.log"
            }, {
                title: "识别码清理",
                name: "idCodeCleaning",
                path: "idCodeCleaning",
                menuCode: "system.recognitionCode.clean"
            }
        ]
    },
    {
        title: "总控中心",
        name: "control",
        path: "control",
        icon: "vk-icon-level1-control",
        desc: "车场远程管理与控制，客户问题秒级处理",
        menuCode: "controlcenter",
        children: [
            {
                title: "进出场监控",
                name: "controlMonitor",
                path: "monitor",
                menuCode: "controlcenter.inoutmonitor"
            },
            {
                title: "车辆报错历史",
                name: "controlErrorHistory",
                path: "history",
                menuCode: "controlcenter.errorhistory"
            },
            {
                title: "车辆识别记录",
                name: "controlCarRecord",
                path: "record",
                menuCode: "controlcenter.recoginition"
            },
            {
                title: "识别失败记录",
                name: "abnormalRecord",
                path: "abnormal",
                menuCode: "controlcenter.recognitionFail"
            },
            {
                title: "放行记录",
                name: "relatedReport",
                path: "report",
                menuCode: "controlcenter.relatedReport"
            },
            {
                title: "无入场记录",
                name: "noneInRecord",
                path: "inrecord",
                menuCode: "controlcenter.noParkingRecord"
            },
            {
                title: "历史消息",
                name: "historyMessage",
                path: "historyMessage",
                menuCode: "controlcenter.cimProcessed"
            }
        ]
    },
    {
        title: "数据中心",
        name: "dataCenter",
        path: "data",
        icon: "vk-icon-level1-datacenter",
        desc: "数据可视化与智能化，助力精细化运营",
        menuCode: "data",
        children: [
            {
                title: "识别率统计",
                name: "secRecognition",
                path: "recognition",
                menuCode: "data.sec_recognition",
                children: [
                    {
                        title: "识别率分析",
                        name: "recognitionRateAnalyze",
                        path: "recognitionRateAnalyze",
                        menuCode: "data.sec_recognition.rec_rate_analysis"
                    },
                    {
                        title: "二次识别明细",
                        name: "recDetail",
                        path: "recdetail",
                        menuCode: "data.sec_recognition.rec_detail"
                    },
                    {
                        title: "二次识别统计",
                        name: "reCount",
                        path: "recount",
                        menuCode: "data.sec_recognition.rec_statistics"
                    },
                    {
                        title: "识别统计",
                        name: "recognitionStatistic",
                        path: "recognitionStatistic",
                        menuCode: "data.sec_recognition.cgrc_statistics"
                    },
                    {
                        title: "识别异常处理",
                        name: "recognitionAbnormal",
                        path: "abnormal",
                        menuCode: "data.sec_recognition.abnormal"
                    }
                ]
            },
            {
                title: "经营分析",
                name: "incomeAnalysis",
                path: "income",
                menuCode: "data.income_analysis",
                children: [
                    {
                        title: "车位占用率分析",
                        name: "incomeAnalysisList",
                        path: "list",
                        menuCode: "data.income_analysis.load_statistics"
                    },
                    {
                        title: "套餐销售分析",
                        name: "comboSellAnalysis",
                        path: "combo",
                        menuCode: "data.income_analysis.combo_sales"
                    },
                    {
                        title: "进出场流量分析",
                        name: "flowAnalysis",
                        path: "flow",
                        menuCode: "data.income_analysis.in_out_traffic"
                    },
                    {
                        title: "停车市场分布",
                        name: "parkingTime",
                        path: "parkingTime",
                        menuCode: ""
                    }
                ]
            },
            {
                title: "客户分析",
                name: "customerAnalysis",
                path: "customer",
                menuCode: "data.customer_analysis",
                children: [
                    {
                        title: "车辆信息",
                        name: "customerAnalysisCarDetail",
                        path: "detail",
                        menuCode: "data.customer_analysis.vehicle_info"
                    },
                    {
                        title: "基础数据",
                        name: "customerAnalysisList",
                        path: "list",
                        menuCode: "data.customer_analysis.basic_data"
                    },
                    {
                        title: "消费行为分析",
                        name: "customerAnalysisCosList",
                        path: "list",
                        menuCode: "data.customer_analysis.cos_analys"
                    }
                ]
            },
            {
                title: "下载中心",
                name: "downloadCenter",
                path: "download",
                menuCode: "data.download_center"
            },
            {
                title: "FAE数据分析",
                name: "faeDataAnalyze",
                path: "faeDataAnalyze",
                menuCode: "data.fae",
                children: [
                    {
                        title: "车场故障分析",
                        name: "carportFaultAnalyze",
                        path: "carportFaultAnalyze",
                        menuCode: "data.fae.parking_fault_statistics"
                    },
                    {
                        title: "车场故障明细",
                        name: "carportFaultDetail",
                        path: "faultDetail",
                        menuCode: "data.fae.parking_fault_detail"
                    },
                    {
                        title: "管家数据统计",
                        name: "faeDataStatistic",
                        path: "statistic",
                        menuCode: "data.fae.gjwx_statistics"
                    }
                ]
            },
            {
                title: "数据大盘",
                name: "dataOverview",
                path: "dataOverview",
                menuCode: "data.data_summary",
                children: [
                    {
                        title: "项目日报",
                        name: "projectReport",
                        path: "projectReport",
                        menuCode: "data.data_summary.project_daily_report"
                    },
                    {
                        title: "城市数据",
                        name: "cityData",
                        path: "cityData",
                        menuCode: "data.data_summary.city_data"
                    }
                ]
            },
            {
                title: "移动端底表",
                name: "mobileBottomTable",
                path: "mobileBottomTable",
                menuCode: "data.management_daily_report"
            }
        ]
    },
    {
        title: "车位锁管理",
        name: "parkLock",
        path: "parkLock",
        icon: "vk-icon-level1-parkLock",
        desc: "自研车位锁管理与配置，助力单车位管理",
        menuCode: "lock",
        children: [
            {
                title: "版本信息",
                name: "pLockVersion",
                path: "version",
                menuCode: "lock.version"
            },
            {
                title: "机器分发",
                name: "pLockMachine",
                path: "machine",
                menuCode: "lock.machine"
            },
            {
                title: "升级进度",
                name: "pLockGrogressIndex",
                path: "progress/index",
                menuCode: "lock.schedule"
            }
        ]
    },
    {
        title: "本地服务",
        name: "localService",
        path: "localService",
        icon: "vk-icon-level1-localService",
        desc: "本地服务远程管理操作，致力于提升管理效能",
        menuCode: "local.service",
        children: [
            {
                title: "版本管理",
                name: "versionManager",
                path: "versionManager",
                menuCode: "local.service.jar"
            },
            {
                title: "自动升级",
                name: "autoUpgrade",
                path: "autoUpgrade",
                menuCode: "local.service.client"
            },
            {
                title: "本地数据",
                name: "localData",
                path: "localData",
                menuCode: "local.service.data"
            }
        ]
    }
];
