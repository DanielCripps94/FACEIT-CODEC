export const parseDate = string => {
  let date = new Date(string);
  let dateString = date.toLocaleDateString();
  let time = date.toTimeString().split(' ')[0];
  return `${dateString}, ${time}`;
};

export const isEmpty = obj => {
  return Object.keys(obj).length === 0;
};
