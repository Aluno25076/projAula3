export default class Tarefa{
    id = Math.round(Math.random()*1000) + "-" + new Date().getTime();
    tarefa = "";
    feita = false;
    dataCriacao = new Date();
    dataConcluida = null;
}