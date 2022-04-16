import useTimeout from '../src';
import { renderHook, act } from '@testing-library/react-hooks';

jest.spyOn(global, 'setTimeout');

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllMocks();
  jest.useRealTimers();
});

describe('useTimeout testing', () => {
  it('should not call function until on mount.', () => {
    const callback = jest.fn();
    const interval = 10000;
    renderHook(() => useTimeout(callback, interval));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('should call function after 1 second.', async () => {
    const callback = jest.fn();
    const interval = 10000;

    renderHook(() => useTimeout(callback, interval));

    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(interval);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should clear timer before running callback.', () => {
    const callback = jest.fn();
    const interval = 10000;

    const { result } = renderHook(() => useTimeout(callback, interval));
    act(() => {
      result.current.clear();
    });
    jest.advanceTimersByTime(interval);
    expect(callback).not.toBeCalled();
  });

  it('should reset timer then run callback.', () => {
    const callback = jest.fn();
    const interval = 10000;

    const { result } = renderHook(() => useTimeout(callback, interval));

    act(() => {
      result.current.clear();
      result.current.reset();
    });
    jest.advanceTimersByTime(interval);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
