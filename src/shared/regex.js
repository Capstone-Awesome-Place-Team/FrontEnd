//최대 15자리까지
export const IdCheck = (id) => {
  const idRegex = /^[0-9a-z]{1,15}$/g;
  return idRegex.test(id);
};

//영대문자숫자조합 8자리부터 15자리까지
export const PwCheck = (pwd) => {
  const PwRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]){8,15}$/g;
  return PwRegex.test(pwd);
};
