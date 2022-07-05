export const useArrayManipulation = () => {
  const uuid = useUuid();

  const randomElements = (array: unknown[], elements: number) =>
    array.sort(() => 0.5 - Math.random()).slice(0, elements);

  const addKey = (
    array: Record<string | number | symbol, unknown>[],
    index: number,
  ) => array.map((e) => ({ ...e, key: uuid() }));

  const contains = (array: unknown[], other: unknown[]) =>
    [...other].every((e) => [...array].includes(e));

  const containsAny = (array: unknown[], other: unknown[]) =>
    [...other].some((e) => [...array].includes(e));

  const filterBy = (
    array: Record<string | number | symbol, unknown>[],
    object: Record<string | number | symbol, unknown | unknown[]>,
  ) =>
    array.filter((e) =>
      Object.keys(object).every((key) =>
        Array.isArray(object[key])
          ? containsAny(object[key], e[key])
          : e[key] === object[key],
      ),
    );

  return {
    randomElements,
    addKey,
    filterBy,
  };
};
