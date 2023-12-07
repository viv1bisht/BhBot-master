export const copyToClipboard = (value) => {
  return navigator.clipboard.writeText(value);
};

export const fixQuotes = (value) => {
  return value.replace("'", "''");
};
