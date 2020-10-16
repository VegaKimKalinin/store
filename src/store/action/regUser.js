export function regUser(userName, password) {
  return {
    type: 'REG_USER',
    user: {
      userName,
      password,
    },
  };
}
