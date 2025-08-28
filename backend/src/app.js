"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dummy_billing_1 = require("./service/dummy_billing");
var app = (0, express_1.default)();
var PORT = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/prepare", function (req, res) {
    setTimeout(function () {
        var data = (0, dummy_billing_1.prepare)(req.body.situration);
        if (data.code === "00")
            res.status(200).json(data);
        else
            res.status(500).json(data);
    }, 3000);
});
app.post("/process", function (req, res) {
    setTimeout(function () {
        var data = (0, dummy_billing_1.process)(req.body.situration);
        if (data.code === "00")
            res.status(200).json(data);
        else
            res.status(500).json(data);
    }, 5000);
});
app.get("/process", function (req, res) {
    setTimeout(function () {
        var situration = req.query.situration === "true";
        var data = (0, dummy_billing_1.process)(situration, req.query.orderProcessId);
        if (data.code === "00")
            res.status(200).json(data);
        else
            res.status(500).json(data);
    }, 3000);
});
app.post("/apply", function (req, res) {
    setTimeout(function () {
        var data = (0, dummy_billing_1.apply)(req.body.situration);
        if (data.code === "00")
            res.status(200).json(data);
        else
            res.status(500).json(data);
    }, 3000);
});
app.post("/result", function (req, res) {
    setTimeout(function () {
        var data = (0, dummy_billing_1.result)(req.body.situration);
        if (data.code === "00")
            res.status(200).json(data);
        else
            res.status(500).json(data);
    }, 3000);
});
app.listen(PORT, function () {
    console.log("\uB354\uBBF8 \uBC31\uC5D4\uB4DC \uC11C\uBC84\uAC00 http://localhost:".concat(PORT, " \uC5D0\uC11C \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4."));
    console.log("\uC694\uCCAD \uC131\uACF5/\uC2E4\uD328\uB97C \uC81C\uC5B4\uD558\uB824\uBA74 situration \uAC12\uC744 \uC0AC\uC6A9\uD558\uC138\uC694:");
    console.log("  situration === true => \uC131\uACF5");
    console.log("  situration === false => \uC2E4\uD328");
});
