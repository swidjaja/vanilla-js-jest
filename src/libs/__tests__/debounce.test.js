import debounce from '../debounce';

const a = jest.fn();

describe('debounce', () => {
  beforeEach(() => {
    // Clear all mock calls count
    jest.clearAllMocks();
    // Clear fake timers used
    jest.clearAllTimers();
  });

  it('invokes input function immediately on leading mode', () => {
    const b = debounce(a, 250, true);
    b();

    expect(a).toHaveBeenCalledTimes(1);
  });

  it('does not invoke input function later if on leading mode', () => {
    jest.useFakeTimers();

    const b = debounce(a, 250, true);
    b();
  
    jest.advanceTimersByTime(250);

    expect(a).toHaveBeenCalledTimes(1);
  });

  it('does not invoke input function immediately if on trailing mode', () => {
    const b = debounce(a, 250, false);
    b();

    expect(a).not.toHaveBeenCalled();
  });

  it('invokes input function later if on trailing mode', () => {
    jest.useFakeTimers();

    const b = debounce(a, 250, false);
    b();
  
    jest.advanceTimersByTime(250);

    expect(a).toHaveBeenCalledTimes(1);
  });

  it('invokes input function from multiple calls only once within the wait period', () => {
    jest.useFakeTimers();

    const b = debounce(a, 250, true);
    b();
    b();
    b();

    expect(a).toHaveBeenCalledTimes(1);
  });

  it('invokes input function again when timer is expired', () => {
    jest.useFakeTimers();

    const b = debounce(a, 250, true);
    b();
    b();
    b();

    jest.advanceTimersByTime(250);

    b();

    expect(a).toHaveBeenCalledTimes(2);
  });
});
