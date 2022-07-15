import { UUID } from './uuid';

export const randomElements = <T extends Array<unknown>>(
  array: T,
  elements: number,
) => [...array].sort(() => 0.5 - Math.random()).slice(0, elements);

export const addKey = <T extends Record<string | number | symbol, unknown>[]>(
  array: T,
) =>
  Array.isArray(array) ? [...array].map((e) => ({ ...e, key: UUID() })) : [];

export const contains = <
  T extends Record<string | number | symbol, unknown>[],
  O extends Record<string | number | symbol, unknown>[],
>(
  array: T,
  other: O,
) => [...other].every((e) => [...array].includes(e));

export const containsAny = <
  T extends Record<string | number | symbol, unknown>[],
  O extends Record<string | number | symbol, unknown>[],
>(
  array: T,
  other: O,
) => [...other].some((e) => [...array].includes(e));

export const filterBy = <
  T extends Record<string | number | symbol, unknown>[],
  O extends Record<string | number | symbol, unknown | unknown[]>,
>(
  array: T,
  object: O,
) =>
  Array.isArray(array)
    ? [...array].filter((e) =>
        Object.keys(object).every((key) =>
          Array.isArray(object[key])
            ? containsAny(object[key], e[key])
            : e[key] === object[key],
        ),
      )
    : [];
