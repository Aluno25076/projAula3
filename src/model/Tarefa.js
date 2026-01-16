import Utilizador from "./Utilizador";

export default class Tarefa{
    constructor(tarefa){
        this.tarefa=tarefa;
    }

    //id = Math.round(Math.random()*1000) + "-" + new Date().getTime(); descontinuado
    id = 0;
    tarefa = "";
    concluida = false;
    dataCriacao = new Date();
    dataConcluida = new Date();
    userCriacao = "";
    //dataConcluida = null;  descontinuado
}