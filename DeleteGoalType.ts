export type DelGoalType = {
  readonly id: number;
  testName: string;
  initiator: string;
  goalOwner: string;
  goalType: string;
  visibility: string;
  shareWithUserNames: string[];
  goalStatus: string;
  whoDeletesGoal: string;
  expect: string;
};
