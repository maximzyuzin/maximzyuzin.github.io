/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 **/

export const removePlus = (string: string): string => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: number, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

type CssString = {
  x: number,
  y: number,
};

export const getTransformFromCss = (transformCssString: string): CssString => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

type RGB = [number, number, number];

export const getColorContrastValue = ([red, green, blue]: RGB): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

type ContrastType = 'black' | 'white';

export const getContrastType = (contrastValue: number): ContrastType => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): RGB => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

type NumberedArray<T> = {
  value: T,
  number: number,
};

export const getNumberedArray = <T>(arr: Array<T>): NumberedArray<T>[] =>
  arr.map((value: T, number: number) => ({ value, number }));

export const toStringArray = <T>(arr: NumberedArray<T>[]): string[] =>
  arr.map(({ value, number }: NumberedArray<T>) => `${value}_${number}`);

type CustomerId = number | string;

type Customer = {
  id: CustomerId,
  name: string,
  age: number | string,
  isSubscribed: boolean,
};

type AccCustomer = {
  [id: CustomerId]: Omit<Customer, 'id'>,
};

export const transformCustomers = (customers: Customer[]) => {
  return customers.reduce((acc: AccCustomer, customer: Customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};