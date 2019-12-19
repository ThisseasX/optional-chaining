const { testObject, testCases } = require('./test-cases');
const { deepEqual } = require('assert');
const optional = require('../src');

const getText = (args, obj, expected) =>
  `Takes arguments [${args}] with [${JSON.stringify(
    obj,
  )}] and returns [${JSON.stringify(expected)}]`;

describe('optional chaining', () => {
  testCases.forEach(testCase => {
    it(getText(testCase.args, testObject, testCase.expected), () => {
      deepEqual(optional(...testCase.args)(testObject), testCase.expected);
    });
  });
});
