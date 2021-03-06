let testUsers = require("./delete-goals-test-users.json");
// import { DelGoalType } from "./DeleteGoalType";
import * as fs from "fs";

let matrix: string[][] = [
  ["Development", "Private", "In progress", "can", "can", "no"],
  ["Development", "Private", "Completed Pending", "can", "can", "no"],
  ["Development", "Private", "Done", "can", "can", "no"],
  ["Development", "Private", "Deleted", "no", "no", "no"],
  ["Development", "Shared", "In progress", "can", "can", "cannot"],
  ["Development", "Shared", "Completed Pending", "can", "can", "cannot"],
  ["Development", "Shared", "Done", "can", "can", "cannot"],
  ["Development", "Shared", "Deleted", "no", "no", "no"],
  ["Development", "Public", "In progress", "can", "can", "cannot"],
  ["Development", "Public", "Completed Pending", "can", "can", "cannot"],
  ["Development", "Public", "Done", "can", "can", "cannot"],
  ["Development", "Public", "Deleted", "no", "no", "no"],
  ["Professional", "Private", "In progress", "can", "can", "no"],
  ["Professional", "Private", "Completed Pending", "can", "can", "no"],
  ["Professional", "Private", "Done", "can", "can", "no"],
  ["Professional", "Private", "Deleted", "no", "no", "no"],
  ["Professional", "Shared", "In progress", "can", "can", "cannot"],
  ["Professional", "Shared", "Completed Pending", "can", "can", "cannot"],
  ["Professional", "Shared", "Done", "can", "can", "cannot"],
  ["Professional", "Shared", "Deleted", "no", "no", "no"],
  ["Professional", "Public", "In progress", "can", "can", "cannot"],
  ["Professional", "Public", "Completed Pending", "can", "can", "cannot"],
  ["Professional", "Public", "Done", "can", "can", "cannot"],
  ["Professional", "Public", "Deleted", "no", "no", "no"],
  ["Business", "Private", "In progress", "can", "can", "no"],
  ["Business", "Private", "Completed Pending", "can", "can", "no"],
  ["Business", "Private", "Done", "can", "can", "no"],
  ["Business", "Private", "Deleted", "no", "no", "no"],
  ["Business", "Shared", "In progress", "can", "can", "cannot"],
  ["Business", "Shared", "Completed Pending", "can", "can", "cannot"],
  ["Business", "Shared", "Done", "can", "can", "cannot"],
  ["Business", "Shared", "Deleted", "no", "no", "no"],
  ["Business", "Public", "In progress", "can", "can", "cannot"],
  ["Business", "Public", "Completed Pending", "can", "can", "cannot"],
  ["Business", "Public", "Done", "can", "can", "cannot"],
  ["Business", "Public", "Deleted", "no", "no", "no"]
];
let item = {};
const goodJSON: {}[] = [];
let tNameString: string = "";
let shareWithUserNames: string[] = [];
let shareWithShort: string = "";
let whoDeletesGoal: string = "";
let expect: string = "";
let whoDelShort: string = "";

let id: number = 1;
matrix.forEach(function(matrixRow) {
  let initiator = testUsers.manager;
  let goalOwner = testUsers.employeeB;
  let goalType = matrixRow[0];
  let visibility = matrixRow[1];

  if (visibility == "Shared") {
    shareWithShort = "mng,hr";
    shareWithUserNames = [testUsers.manager, testUsers.hr];
  } else {
    shareWithShort = "";
    shareWithUserNames = [];
  }

  let goalStatus = matrixRow[2];
  var n: number;
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
    tNameString = `type:${goalType} initiator:manager gOwner:employeeB vis:${visibility} shareWith:${shareWithShort} gStatus:${goalStatus} whoDel:${whoDelShort} expect:${expect}`;
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

fs.writeFile("goodJSON.json", JSON.stringify(goodJSON), function(err: any) {
  if (err) throw err;
  console.log("Saved! test data");
});
