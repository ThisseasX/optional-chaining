const testObject = {
  a: {
    b: {
      c: {
        d: 1234,
      },
    },
  },
};

const testCases = [
  {
    args: ['a.b.c.d'],
    expected: 1234,
  },
  {
    args: ['a.b.c'],
    expected: { d: 1234 },
  },
  {
    args: ['a.b'],
    expected: { c: { d: 1234 } },
  },
  {
    args: ['a'],
    expected: { b: { c: { d: 1234 } } },
  },
  {
    args: [''],
    expected: undefined,
  },
  {
    args: [undefined],
    expected: undefined,
  },
  {
    args: [null],
    expected: undefined,
  },
  {
    args: ['f'],
    expected: undefined,
  },
  {
    args: ['a.c'],
    expected: undefined,
  },
  {
    args: [['a', 'b', 'c', 'd']],
    expected: 1234,
  },
  {
    args: [['a', 'b', 'c']],
    expected: { d: 1234 },
  },
  {
    args: [['a', 'b']],
    expected: { c: { d: 1234 } },
  },
  {
    args: [['a']],
    expected: { b: { c: { d: 1234 } } },
  },
  {
    args: [['']],
    expected: undefined,
  },
  {
    args: [[]],
    expected: undefined,
  },
  {
    args: [],
    expected: undefined,
  },
  {
    args: [['a', 'b'], ['c', 'd']],
    expected: 1234,
  },
  {
    args: [['a', 'b'], 'c.d'],
    expected: 1234,
  },
  {
    args: [['a', !false && 'b'], 'c', true && 'd'],
    expected: 1234,
  },
];

module.exports = {
  testObject,
  testCases,
};
