"use strict";
exports.__esModule = true;
var testJson = require("./delete-goals-test-himself.json");
var testUsers = require("./delete-goals-test-users.json");
// import { DelGoalType } from "./DeleteGoalType";
var fs = require("fs");
var matrix = [
    ["Development", "Private", "Approval pending", "can", "can", "no"],
    ["Development", "Private", "Declined", "can", "can", "no"],
    ["Development", "Private", "In progress", "can", "can", "no"],
    ["Development", "Private", "Completed Pending", "can", "can", "no"],
    ["Development", "Private", "Done", "can", "can", "no"],
    ["Development", "Private", "Deleted", "no", "no", "no"],
    ["Development", "Shared", "Approval pending", "can", "can", "cannot"],
    ["Development", "Shared", "Declined", "can", "can", "cannot"],
    ["Development", "Shared", "In progress", "can", "can", "cannot"],
    ["Development", "Shared", "Completed Pending", "can", "can", "cannot"],
    ["Development", "Shared", "Done", "can", "can", "cannot"],
    ["Development", "Shared", "Deleted", "no", "no", "no"],
    ["Development", "Public", "Approval pending", "can", "can", "cannot"],
    ["Development", "Public", "Declined", "can", "can", "cannot"],
    ["Development", "Public", "In progress", "can", "can", "cannot"],
    ["Development", "Public", "Completed Pending", "can", "can", "cannot"],
    ["Development", "Public", "Done", "can", "can", "cannot"],
    ["Development", "Public", "Deleted", "no", "no", "no"],
    ["Professional", "Private", "Approval pending", "can", "can", "no"],
    ["Professional", "Private", "Declined", "can", "can", "no"],
    ["Professional", "Private", "In progress", "can", "can", "no"],
    ["Professional", "Private", "Completed Pending", "can", "can", "no"],
    ["Professional", "Private", "Done", "can", "can", "no"],
    ["Professional", "Private", "Deleted", "no", "no", "no"],
    ["Professional", "Shared", "Approval pending", "can", "can", "cannot"],
    ["Professional", "Shared", "Declined", "can", "can", "cannot"],
    ["Professional", "Shared", "In progress", "can", "can", "cannot"],
    ["Professional", "Shared", "Completed Pending", "can", "can", "cannot"],
    ["Professional", "Shared", "Done", "can", "can", "cannot"],
    ["Professional", "Shared", "Deleted", "no", "no", "no"],
    ["Professional", "Public", "Approval pending", "can", "can", "cannot"],
    ["Professional", "Public", "Declined", "can", "can", "cannot"],
    ["Professional", "Public", "In progress", "can", "can", "cannot"],
    ["Professional", "Public", "Completed Pending", "can", "can", "cannot"],
    ["Professional", "Public", "Done", "can", "can", "cannot"],
    ["Professional", "Public", "Deleted", "no", "no", "no"],
    ["Business", "Private", "Approval pending", "can", "can", "no"],
    ["Business", "Private", "Declined", "can", "can", "no"],
    ["Business", "Private", "In progress", "can", "can", "no"],
    ["Business", "Private", "Completed Pending", "can", "can", "no"],
    ["Business", "Private", "Done", "can", "can", "no"],
    ["Business", "Private", "Deleted", "no", "no", "no"],
    ["Business", "Shared", "Approval pending", "can", "can", "cannot"],
    ["Business", "Shared", "Declined", "can", "can", "cannot"],
    ["Business", "Shared", "In progress", "can", "can", "cannot"],
    ["Business", "Shared", "Completed Pending", "can", "can", "cannot"],
    ["Business", "Shared", "Done", "can", "can", "cannot"],
    ["Business", "Shared", "Deleted", "no", "no", "no"],
    ["Business", "Public", "Approval pending", "can", "can", "cannot"],
    ["Business", "Public", "Declined", "can", "can", "cannot"],
    ["Business", "Public", "In progress", "can", "can", "cannot"],
    ["Business", "Public", "Completed Pending", "can", "can", "cannot"],
    ["Business", "Public", "Done", "can", "can", "cannot"],
    ["Business", "Public", "Deleted", "no", "no", "no"]
];
var item = {};
var goodJSON = [];
var tNameString = "";
var shareWithUserNames = [];
var shareWithShort = "";
var whoDeletesGoal = "";
var expect = "";
var whoDelShort = "";
var id = 1;
matrix.forEach(function (matrixRow) {
    var initiator = testUsers.employeeB;
    var goalOwner = testUsers.employeeB;
    var goalType = matrixRow[0];
    var visibility = matrixRow[1];
    if (visibility == "Shared") {
        shareWithShort = "mng,hr";
        shareWithUserNames = [testUsers.manager, testUsers.hr];
    }
    else {
        shareWithShort = "";
        shareWithUserNames = [];
    }
    var goalStatus = matrixRow[2];
    var n;
    for (n = 3; n < 6; n++) {
        switch (n) {
            case 3: {
                whoDelShort = "employeeB";
                expect = matrixRow[3];
                break;
            }
            case 4: {
                whoDelShort = "manager";
                expect = matrixRow[4];
                break;
            }
            case 5: {
                whoDelShort = "hr";
                expect = matrixRow[5];
            }
        }
        whoDeletesGoal = testUsers[whoDelShort];
        tNameString = "type:" + goalType + " initiator:employeeB gOwner:employeeB vis:" + visibility + " shareWith:" + shareWithShort + " gStatus:" + goalStatus + " whoDel:" + whoDelShort + " expect:" + expect;
        item = {
            id: id,
            testName: tNameString,
            initiator: initiator,
            goalOwner: goalOwner,
            goalType: goalType,
            visibility: visibility,
            shareWithUserNames: shareWithUserNames,
            goalStatus: goalStatus,
            whoDeletesGoal: whoDeletesGoal,
            expect: expect
        };
        goodJSON.push(item);
        id++;
    }
});
console.log(goodJSON);
fs.writeFile("goodJSON.json", JSON.stringify(goodJSON), function (err) {
    if (err)
        throw err;
    console.log("Saved! test data");
});
