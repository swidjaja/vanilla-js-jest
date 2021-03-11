import add from '../add';

describe('add two numbers', () => {
  it('adds two numbers correctly', () => {
    expect(add(1, 4)).toEqual(5);
  });
});
