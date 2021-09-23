import numTimesAllBlue from '../solutions/bulb_switcher_iii';

describe('Bulb Switcher III', () => {
  it('Input: [1] => Output: 1', () => {
    expect(numTimesAllBlue([1])).toBe(1);
  })

  it('Input: [1, 2] => Output: 2', () => {
    expect(numTimesAllBlue([1, 2])).toBe(2);
  })

  it('Input: [3, 2, 4, 1, 5] => Output: 2', () => {
    expect(numTimesAllBlue([3, 2, 4, 1, 5])).toBe(2);
  })
})

