import Student from "./Student";

function StudentManager() {
    // dados que poderiam pertencer a uma base de dados ou API
    const listStudents = [
        { fullName: 'Joao', ageInYears: 20 },
        { fullName: 'Diogo', ageInYears: 50 },
        { fullName: 'Test', ageInYears: 0 },
        { fullName: 'Ramos', ageInYears: 70 },
        { fullName: 'Teramos', ageInYears: 59 }
    ];

    // variavel que ira conter o HTML que ira ser visivel no ecra
    let listStudentsHtml = [];

    // para cada elemento da lista, um componente aluno ira ser criado
    // cada um dos componentes ira ser adicionado ao array listStudentHtml
    listStudents.forEach(student => {
        listStudentsHtml.push(<Student name={student.fullName} age={student.ageInYears} />)
    })

    return <>
        <hr/>
        {/*mostra o array do componente alunos */}
        {listStudentsHtml}
    </>
}

export default StudentManager;