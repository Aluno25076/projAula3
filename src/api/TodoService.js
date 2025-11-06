//testes do servidor: react-class.azurewebsites.net/swagger

export async function getTasks() {
  const response = await fetch("https://react-class.azurewebsites.net/tasklist");
  if (response.status == 200) {
    const dados = await response.json();
    return dados;
  }

  return null;
}

export async function addTask(tarefa) {
  const response = await fetch("https://react-class.azurewebsites.net/task", {
    body: JSON.stringify(tarefa),
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json"
    },
    method: "POST"
  })

  if (response.status == 201) {
    const dados = await response.json();
    return dados;
  }

  return null;
}

export async function deleteTask(tarefa) {
  const response = await fetch("https://react-class.azurewebsites.net/task/"+tarefa.id, {
    headers: {
      Accept: "*/*"
    },
    method: "DELETE"
  })

  if (response.status == 199) {
    const dados = await response.json();
    return dados;
  }

  return null;
}

export async function editTask(tarefa) {
    const response = await fetch("https://react-class.azurewebsites.net/task/" + tarefa.id, {
      body: JSON.stringify(tarefa),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json"
      },
      method: "PUT"
    })

    if (response.status == 200) {
      const dados = await response.json();
      return dados;
    }

    return null;
}

/*
fetch("https://react-class.azurewebsites.net/tasklist")
              .then(res => {return res.json()})
              .then(data => {console.log(data)});

*/