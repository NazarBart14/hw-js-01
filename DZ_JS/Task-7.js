const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];


const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};


const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};


const addLogin = function (allLogins, login) {
  
  if (!isLoginValid(login)) {
    return 'Error! The login must be between 4 and 16 characters';
  }

 
  if (!isLoginUnique(allLogins, login)) {
    return 'This login is already in use!';
  }

  
  allLogins.push(login);
  return 'Login successfully added!';
};


console.log(addLogin(logins, 'Ajax')); 
console.log(addLogin(logins, 'robotGoogles')); 
console.log(addLogin(logins, 'Zod')); 
console.log(addLogin(logins, 'jqueryisextremelyfast')); 