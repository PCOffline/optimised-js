import { max as stringMax, min as stringMin } from './strings.js';

export function max(array: number[] | string[], sorted = false, strings = false) {
  if (sorted) {
    if (strings) {
      return stringMax(array[0] as string, array[array.length - 1] as string);
    } else {
      return Math.max(array[0] as number, array[array.length - 1] as number);
    }
  }

  if (strings) return stringMax(...array as string[]);

  let { length: index } = array;
  let max = -Infinity;

  while (index--) if (array[index] > max) max = array[index] as number;

  return max;
}

export function min(array: number[] | string[], sorted = false, strings = false) {
  if (sorted) {
    if (strings) {
      return stringMin(array[0] as string, array[array.length - 1] as string);
    } else {
      return Math.min(array[0] as number, array[array.length - 1] as number);
    }
  }

  if (strings) return stringMin(...array as string[]);

  let { length: index } = array;
  let min = Infinity;

  while (index--) if (array[index] < min) min = array[index] as number;

  return min;
}