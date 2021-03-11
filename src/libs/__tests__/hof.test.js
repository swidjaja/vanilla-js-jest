import hof from '../hof';

const a = jest.fn();

describe('hof', () => {
  it('hof\'d', () => {
    const b = hof(a);
    b();

    expect(a).toHaveBeenCalled();
  });

  it('hof\'d with param', () => {
    const b = hof(a);
    b(true);

    expect(a).toHaveBeenCalledWith(true);
  });
});
