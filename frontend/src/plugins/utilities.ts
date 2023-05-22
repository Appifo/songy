/**
 * Return time string(mm:ss) of a given decimal number
 * @param {number} number
 */
export const numberToTime = (number: number) => {
  let time = '00:00:00';
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if(number > 0 && number < 3600) {
    minutes = Math.floor(number / 60);
    seconds = Math.floor(number % 60);
    time = `${twoCharsString(minutes)}:${twoCharsString(seconds)}`
  } else if(number >= 3600) {
    hours = Math.floor(number / 3600);
    minutes = Math.floor((number - (hours * 3600)) / 60);
    seconds = Math.floor(number % 60);
    time = `${twoCharsString(hours)}:${twoCharsString(minutes)}:${twoCharsString(seconds)}`
  }

  return time
};

/**
 * Return string of two chars of a given number | string
 * @param {number | string} number
 */
const twoCharsString = (number: number | string) => {
  const str = '' + number;
  return str.length > 1 ? number : `0${number}`
}