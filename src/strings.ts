export function max(...strings: string[]): string {
  if (strings.length === 0) throw new Error('Invalid array length');

  let max = strings[0];
  let { length: index } = strings;

  while (index--)
    if (strings[index] > max) max = strings[index];


  return max;
}

export function min(...strings: string[]): string {
  if (strings.length === 0) throw new Error('Invalid array length');

  let min = strings[0];
  let { length: index } = strings;

  while (index--)
    if (strings[index] < min) min = strings[index];


  return min;
}