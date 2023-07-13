export const usernameValidator = (username, setErrorMessage) => {
  let errors = {};

  if (username === undefined) {
    username = "";
  }

  var re = /^[a-zA-Z0-9_]{3,16}$/;

  if (username.length < 3) {
    setErrorMessage('O usuário deve ser maior que 3 caracteres');
    return false;
  }

  if (username !== null && username.length > 0) {
    if (re.test(username)) {
      errors.result = true;
    } else {
      errors.result = false;
    }
  }

  return errors;
};


export const passwordValidator = (password, newPassword, confirmPassword, setErrorMessage) => {
  let errors = {};

  if (password === undefined) {
    password = "";
  }

  const re = /^.{3,}$/;

  // if (password.length < 3) {
  //   setErrorMessage('O usuário deve ser maior que 3 caracteres');
  //   return false;
  // }


  if (password != null && password.length > 0) {
    if (re.test(password)) {
      errors.result = true;
    } else {
      errors.result = false;
    }
  }

  if (password === newPassword) {
    errors.result = false;
    errors.errorMessage = "A nova senha deve ser diferente da senha atual";
  } else if (newPassword === confirmPassword) {
    if (newPassword != null && newPassword.length >= 5) {
      errors.result = true;
    } else {
      errors.result = false;
      errors.errorMessage = "A senha deve ter pelo menos 5 caracteres";
    }
  } else {
    errors.result = false;
    errors.errorMessage = "A senha e a confirmação da senha devem ser iguais.";
  }

  return errors;
};

export const emailValidator = (email) => {
  let errors = {};
  if (email === undefined) {
    email = "";
  }
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email !== null && email.length > 0) {
    if (re.test(email)) {
      errors.result = true;
    } else {
      errors.result = false;
      errors.errorMessage = "E-mail Inválido";
    }
  } else {
    errors.result = false;
    errors.errorMessage = "Digite seu e-mail.";
  }

  return errors;
};
