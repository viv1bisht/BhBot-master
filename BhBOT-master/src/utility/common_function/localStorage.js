export const setLocalStorage = (KeyName, KeyValue) => {
  localStorage.setItem(KeyName, KeyValue);
};

export const getLocalStorage = (keyName) => {
  return JSON.parse(localStorage.getItem(keyName)) || {};
};
