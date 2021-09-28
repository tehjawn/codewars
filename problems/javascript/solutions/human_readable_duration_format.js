// Human readable duration format (4 kyu)
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

/**
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
 */

const SECONDS_PER_MIN   = 60;
const SECONDS_PER_HOUR  = SECONDS_PER_MIN * 60;
const SECONDS_PER_DAY   = SECONDS_PER_HOUR * 24;
const SECONDS_PER_YEAR  = SECONDS_PER_DAY * 365;

const formatDuration = (seconds) => {
  // let tSeconds = seconds;
  // let mYears = mDays = mHours = mMinutes = mSeconds = 0;

  let timeFormatArray = []

  let mYears = Math.floor(seconds / SECONDS_PER_YEAR);
  seconds -= mYears * SECONDS_PER_YEAR;
  if (mYears > 0) timeFormatArray.push(mYears > 1 ? 'years' : 'year')

  let mDays = Math.floor(seconds / SECONDS_PER_DAY);
  seconds -= mDays * SECONDS_PER_DAY;
  if (mDays > 0) timeFormatArray.push(mDays > 1 ? 'days' : 'day')

  let mHours = Math.floor(seconds / SECONDS_PER_HOUR);
  seconds -= mDays * SECONDS_PER_HOUR;
  if (mHours > 0) timeFormatArray.push(mHours > 1 ? 'hours' : 'hour')

  let mMinutes = Math.floor(seconds / SECONDS_PER_MIN);
  seconds -= mMinutes * SECONDS_PER_MIN;
  if (mMinutes > 0) timeFormatArray.push(mMinutes > 1 ? 'minutes' : 'minute')
  
  let mSeconds = seconds;
  if (mSeconds > 0) timeFormatArray.push(mSeconds > 1 ? 'seconds' : 'second')

  console.log(timeFormatArrayToString(timeFormatArray))
}

const timeFormatArrayToString = (timeFormatArray) => {
  if (timeFormatArray.length === 1) {
    return timeFormatArray.join('')
  } else if (timeFormatArray.length === 2) {
    return timeFormatArray.join(' and ')
  } else if (timeFormatArray.length === 3) {
    return
  }
  timeFormatArray.join(', ')
}

formatDuration(61)