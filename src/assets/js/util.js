/* eslint valid-typeof: 0 */
const UA = window.navigator.userAgent;
const { toString } = Object.prototype;
const Util = window.Util || {};

// 类型判断
["Array", "Function", "Object", "RegExp", "Date"].forEach((type) => {
    Util[`is${type}`] = (obj) => {
        return obj && toString.call(obj) === `[object ${type}]`;
    };
});

["Boolean", "Number", "String"].forEach((type) => {
    Util[`is${type}`] = (obj) => {
        return typeof obj === type.toLowerCase();
    };
});

// 标准浏览器使用原生的判断方法
if (Array.isArray) {
    Util.isArray = Array.isArray;
}

// 判断是否为空对象
Util.isEmptyObject = (obj) => {
    for (const name in obj) {
        return false;
    }
    return true;
};

// 判断是否为纯粹的对象
Util.isPlainObject = (obj) => {
    if (!obj || !Util.isObject(obj)) {
        return false;
    }

    try {
        for (const name in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, name)) {
                return false;
            }
        }
    } catch (_) {
        return false;
    }

    return true;
};

// 首字母大写转换
Util.capitalize = (str) => {
    const firstStr = str.charAt(0);
    return firstStr.toUpperCase() + str.replace(firstStr, "");
};

/**
 * 对象深拷贝
 * JSON.parse(JSON.stringify(obj));
 */
Util.clone = (obj) => {
    if (JSON && JSON.parse) {
        return JSON.parse(JSON.stringify(obj));
    }

    let o;
    if (typeof obj === "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (let i = 0, len = obj.length; i < len; i++) {
                    o.push(Util.clone(obj[i]));
                }
            } else {
                o = {};
                for (const j in obj) {
                    o[j] = Util.clone(obj[j]);
                }
            }
        }
    } else {
        o = obj;
    }

    return o;
};


Util.uniqueId = (length = 16, namespace = "vk") => {
    let text = "";
    const possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        text = `${text}${possible.charAt(Math.floor(Math.random() * possible.length))}`;
    }
    return `${namespace}-${text}`;
};

Util.isIE = () => {
    return (!!window.ActiveXObject || "ActiveXObject" in window);
};

Util.isFirefox = () => {
    return navigator.userAgent.indexOf("Firefox") > -1;
};

/**
 * @param  {Number}    delay          延迟时间（ms），不传默认200ms
 * @param  {Function}  callback       回调函数
 * @return {Function}  A new debounce function
 */

Util.debounce = (callback, delay = 200) => {
    let timeoutID;
    return (...args) => {
        const self = this;
        if (timeoutID) clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            callback.apply(self, args);
        }, delay);
    };
};

Util.throttle = (fn, delay = 300, mustRunDelay, ctx) => {
    let timer = null;
    let tStart;
    return (...args) => {
        const context = ctx || this;
        // const args = arguments;
        const tCurr = +new Date();
        clearTimeout(timer);
        if (!tStart) {
            tStart = tCurr;
        }
        if (mustRunDelay && tCurr - tStart >= mustRunDelay) {
            fn.apply(context, args);
            tStart = tCurr;
        } else {
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        }
    };
};

Util.listener = (target, eventType, callback) => {
    let remove = null;
    if (target.addEventListener) {
        target.addEventListener(eventType, callback, false);
        remove = () => target.removeEventListener(eventType, callback, false);
    } else if (target.attachEvent) {
        target.attachEvent(`on${eventType}`, callback);
        remove = () => target.detachEvent(`on${eventType}`, callback);
    }
    return {
        remove
    };
};

/*
  * 数组对象按某一属性排列
  * 降序desc  升序asc
*/
Util.ArrayObJectSort = (arr, property, type = "desc") => {
    function compare(p, t) {
        return function (obj1, obj2) {
            const value1 = obj1[p];
            const value2 = obj2[p];
            if (t === "desc") {
                return value2 - value1;
            } else if (t === "asc") {
                return value1 - value2;
            }
        };
    }
    const res = arr.sort(compare(property, type));
    return res;
};

export default Util;
