import mergeTwoObjects from '../mergeTwoObjects';

describe('mergeTwoObjects', () => {
  it('merges two objects correctly', () => {
    const obj1 = {
      a: 1,
      b: 3,
    };
    const obj2 = {
      b: 2,
    };
    const obj3 = mergeTwoObjects(obj1, obj2);
    expect(obj3).toStrictEqual({a: 1, b: 2});
  });
});
