"use strict";
exports.__esModule = true;
var testJson = require("./delete-goals-test-himself.json");
var fs = require("fs");
var item = {};
var goodJSON = [];
var tNameString = "";
testJson.forEach(function (srcItem) {
    tNameString = "type:" + srcItem.goalType + " initiator:" + srcItem.initiator.split('.', 1) + " gOwner:" + srcItem.goalOwner.split('.', 1) + " vis:" + srcItem.visibility + " shareWith:" + srcItem.shareWithUserNames + " gStatus:" + srcItem.goalStatus + " whoDel:" + srcItem.whoDeletesGoal.split('.', 1) + " expect:" + srcItem.expect;
    item = {
        id: srcItem.id,
        testName: tNameString,
        initiator: srcItem.initiator,
        goalOwner: srcItem.goalOwner,
        goalType: srcItem.goalType,
        visibility: srcItem.visibility,
        shareWithUserNames: srcItem.shareWithUserNames,
        goalStatus: srcItem.goalStatus,
        whoDeletesGoal: srcItem.whoDeletesGoal,
        expect: srcItem.expect
    };
    goodJSON.push(item);
});
console.log(goodJSON);
fs.writeFile("goodJSON.json", JSON.stringify(goodJSON), function (err) {
    if (err)
        throw err;
    console.log("Saved! test data");
});
