export const formatFilters = (filters) => {
  const keys = Object.keys(filters);
  const formattedString = keys.reduce((acc, key) => {
    const value = filters[key];
    if (value) {
      return `${acc}${key}=${value}&`;
    }
    return acc;
  }, "/?");
  return formattedString.slice(0, formattedString.length - 1);
};
