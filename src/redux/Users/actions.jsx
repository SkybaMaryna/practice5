const { ADD_USER, DELETE_USER } = require('./types');

export const addUserAC = user => {
  return { type: ADD_USER, payload: user };
};

export const deleteUserAC = id => {
  return { type: DELETE_USER, payload: id };
};
