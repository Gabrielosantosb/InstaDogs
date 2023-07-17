export const usernameValidator = (username, setErrorMessage) => {
  let errors = {};

  if (username === undefined) {
    username = "";
  }

  var re = /^[a-zA-Z0-9_]{3,16}$/;

  if (username.length < 3) {
    setErrorMessage("O usuário deve ser maior que 3 caracteres");
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
export const createPassword = (password, setErrorMessage) => {
  let errors = {};

  if (password === undefined) {
    password = "";
  }

  var re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  if (password.length < 8) {
    setErrorMessage("A senha deve ter pelo menos 8 caracteres");
    return false;
  }

  if (password !== null && password.length > 0) {
    if (re.test(password)) {
      errors.result = true;
    } else {
      errors.result = false;
    }
  }
};

export const passwordValidator = (
  password,
  newPassword,
  confirmPassword,
  setErrorMessage
) => {
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

export const emailValidator = (email, setErrorMessage) => {
  // let errors = {};

  if (email === undefined) {
    email = "";
  }

  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    setErrorMessage("E-mail inválido");
    return false;
  }

  // Additional conditions below

  if (email.includes("example.com")) {
    setErrorMessage("Endereço de e-mail inválido");
    return false;
  }

  if (email.startsWith("test")) {
    setErrorMessage("O e-mail não pode começar com 'test'");
    return false;
  }


  return true;
};





export const validateFields = (username, password, setErrorMessage, email) => {
  const usernameResult = usernameValidator(username, setErrorMessage);
  const passwordResult = passwordValidator(password, setErrorMessage);
  const emailResult = emailValidator(email, setErrorMessage);
  if (!email) {
    if (!usernameResult || !passwordResult) {
      return false;
    }
  }

  if (!usernameResult || !passwordResult || !emailResult) {
    return false;
  }

  return true;
};
