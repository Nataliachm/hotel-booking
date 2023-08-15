const MOCK_USER_DB = [
  { email: 'natalia@gmail.com', password: '123' },
  { email: 'fabian@gmail.com', password: '456' },
  { email: 'victor@gmail.com', password: '789' },
];

const findUser = (email) => {
  return new Promise((res) => {
    const found = MOCK_USER_DB.find((e) => {
      return e.email === email;
    });
    setTimeout(() => {
      if (found) {
        res(found.email);
      } else {
        res();
      }
    }, 200);
  });
};

const findPassword = (email, password) => {
  return new Promise((res) => {
    const found = MOCK_USER_DB.find((e) => {
      return e.email === email;
    });
    setTimeout(() => {
      if (found.password === password) {
        res(found);
      } else {
        res();
      }
    }, 200);
  });
};

export { findUser, findPassword };
