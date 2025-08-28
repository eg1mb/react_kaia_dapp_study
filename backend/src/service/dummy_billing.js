"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.apply = exports.process = exports.prepare = void 0;
var prepare = function (situration) {
    if (situration)
        return {
            code: "00",
            message: "success",
            result: {
                orderProcessId: new Date().toISOString(),
            },
        };
    else
        return {
            code: "01",
            message: "fail",
        };
};
exports.prepare = prepare;
var process = function (situration, orderProcessId) {
    if (orderProcessId) {
        if (situration)
            return {
                code: "00",
                message: "success",
                result: {
                    orderProcessId: orderProcessId,
                },
            };
        else
            return {
                code: "01",
                message: "fail",
            };
    }
    else {
        if (situration)
            return {
                code: "00",
                message: "success",
            };
        else
            return {
                code: "01",
                message: "fail",
            };
    }
};
exports.process = process;
var apply = function (situration) {
    if (situration)
        return {
            code: "00",
            message: "success",
            result: {
                orderProcessId: new Date().toISOString(),
            },
        };
    else
        return {
            code: "01",
            message: "fail",
        };
};
exports.apply = apply;
var result = function (situration) {
    if (situration)
        return {
            code: "00",
            message: "success",
            result: {
                orderProcessId: new Date().toISOString(),
            },
        };
    else
        return {
            code: "01",
            message: "fail",
        };
};
exports.result = result;
