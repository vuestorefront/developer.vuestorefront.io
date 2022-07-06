export const useObjectManipulation = () => {
  const removeProperties = (obj: any, properties: string[]) => {
    const newObj = { ...obj };
    properties.forEach((property) => {
      delete newObj[property];
    });

    return newObj;
  };

  const addProperties = (obj: any, properties: any) => {
    const newObj = { ...obj };
    Object.keys(properties).forEach((property) => {
      newObj[property] = properties[property];
    });

    return newObj;
  };

  const updateProperties = (obj: any, properties: any) => {
    const newObj = { ...obj };
    Object.keys(properties).forEach((property) => {
      newObj[property] = properties[property];
    });
    return newObj;
  };

  const mergeObjects = (obj: any, properties: any) => {
    const newObj = { ...obj };
    Object.keys(properties).forEach((property) => {
      newObj[property] = properties[property];
    });
    return newObj;
  };

  return {
    removeProperties,
    addProperties,
    updateProperties,
    mergeObjects,
  };
};
