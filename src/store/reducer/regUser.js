const initialState = {
  user: {},
  logIn: false,
};

const userReg = (state = initialState, action) => {
  switch (action.type) {
    case 'REG_USER':
      return { ...state, user: action.user, logIn: true };
    default:
      return state;
  }
};

export default userReg;
