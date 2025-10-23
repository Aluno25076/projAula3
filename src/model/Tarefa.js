export default class Tarefa{
    constructor(tarefa){
        this.tarefa=tarefa;
    }

    id = Math.round(Math.random()*1000) + "-" + new Date().getTime();
    tarefa = "";
    concluida = false;
    dataCriacao = new Date();
    dataConcluida = null;
}