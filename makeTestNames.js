"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var delete_goals_test_data_json_1 = __importDefault(require("./delete-goals-test-data.json"));
// import fs from 'fs';
var item = {};
var goodJSON = [];
delete_goals_test_data_json_1.default.forEach(function (srcItem) {
    item = {
        id: srcItem.id,
        testName: 'type:$srcItem.goalType initiator:$srcItem.initiator goalOwner:$srcItem.goalOwner \
      visibility:$srcItem.visibility',
        goalType: srcItem.goalType,
        visibility: srcItem.visibility,
        shareWithUserNames: srcItem.shareWithUserNames,
        goalStatus: srcItem.goalStatus,
        whoDeletesGoal: srcItem.whoDeletesGoal,
        expect: srcItem.expect,
    };
    goodJSON.push(item);
});
console.log(goodJSON);
// fs.writeFile('goodJSON.json', JSON.stringify(goodJSON), function(err) {
//   if (err) throw err;
//   console.log('Saved! test data');
// });
