import testJson from './delete-goals-test-data.json';
import fs from 'fs';

let item = {};
const goodJSON: {}[] = [];
let tNameString: string = '';
testJson.forEach((srcItem) => {
  tNameString = `type:${srcItem.goalType} initiator:${srcItem.initiator} goalOwner:${srcItem.goalOwner} visibility:${srcItem.visibility} shareWithUserNames:${srcItem.shareWithUserNames} goalStatus:${srcItem.goalStatus} whoDeletesGoal:${srcItem.whoDeletesGoal} expect:${srcItem.expect}`
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
    expect: srcItem.expect,
  };
  goodJSON.push(item);
});

console.log(goodJSON);

fs.writeFile('goodJSON.json', JSON.stringify(goodJSON), function(err: any) {
   if (err) throw err;
   console.log('Saved! test data');
 });
