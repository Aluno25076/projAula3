export async function getTasks(){
  const response = await fetch("https://react-class.azurewebsites.net/tasklist");
  const dados = await response.json();
  return dados;
}

/*
fetch("https://react-class.azurewebsites.net/tasklist")
              .then(res => {return res.json()})
              .then(data => {console.log(data)});

*/