//testes do servidor: react-class.azurewebsites.net/swagger

import Utilizador from "../model/Utilizador";

export async function whoAmI(){
  const response = await fetch("https://react-class.azurewebsites.net/api/AuthenticationApi/whoami", {
    headers: {
      Accept: "*/*"
    }
  })

  if (response.status == 200) {
      const dados = await response.json();
      return dados;
    }

  return null;
}

export async function logIn(utilizador){
  const response = await fetch("https://react-class.azurewebsites.net/api/AuthenticationApi/login", {
    body: JSON.stringify(utilizador),
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json"
    },
    method: "POST"
  })

  if (response.status == 200) {
      const dados = await response.json();
      return dados;
    }

  return null;
}

export async function logOut(){
  const response = await fetch("https://react-class.azurewebsites.net/api/AuthenticationApi/logout", {
    headers: {
      Accept: "*/*"
    }
  })

  if (response.status == 200) {
      const dados = await response.json();
      return dados;
    }

  return null;
}