const getValueByKeyString = (
  path: string,
  obj: Record<string | number, unknown>,
  defaultValue = '',
) => {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj,
      );

  const result = travel(/[,[\]]+?/) || travel(/[,.[\]]+?/);

  return result === undefined || result === obj ? defaultValue : result;
};
