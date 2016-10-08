module.exports = {
  get: (name) => localStorage.getItem(name),
  set: (name, value) => {
    localStorage.setItem(name, value);
  },
  remove: (name) => {
    localStorage.removeItem(name);
  },
};
