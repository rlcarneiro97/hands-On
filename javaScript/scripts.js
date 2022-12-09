const studentModal = document.querySelector('#student-modal');
const studentModalTitle = document.querySelector('#student-modal-title');
const studentForm = document.querySelector('#student-form');
const saveStudentButton = document.querySelector('#save-student');

const subjectModal = document.querySelector('#subject-modal');
const subjectModalTitle = document.querySelector('#subject-modal-title');
const subjectForm = document.querySelector('#subject-form');
const saveSubjectButton = document.querySelector('#save-subject');

/**
 * Função responsável abrir o modal de estudante
 */
const openStudentModal = () => studentModal.showModal();

/**
 * Função responsável fechar o modal de estudante
 */
const closeStudentModal = () => studentModal.close();

/**
 * Função responsável por criar linhas na tabela student-table
 * @param {nome} string
 * @param {matricula} string
 * @param {curso} string
 * @param {id} string
 */
const createStudentTableRow = (nome, matricula, curso, id) => {
  const studentTable = document.querySelector('#student-table tbody')
  const tableTr = document.createElement('tr');
  tableTr.innerHTML = ` 
  <td>${nome}</td>
  <td>${matricula}</td>
  <td>${curso}</td>
  <td align="center">
    <button class="button button--danger" onclick=deleteStudentTable(${id})>Apagar</button>
    <button class="button button--success" onclick="editdStudentModal(${id})">Editar</button>
  </td>`;
  studentTable.appendChild(tableTr);
}

/**
 * Função responsável savar os dados de um estudante
 * @param {url} string
 * @param {method} string
 */
const saveStundentData = (url, method) => {
  studentForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const formData = new FormData(studentForm);
    const payload = new URLSearchParams(formData);
    fetch(url, {
        method: method,
        body: payload
    })
    .catch(error => {
        closeStudentModal();
        alert('ocorreu um erro tente mais tarde')
        console.error(error);
    })
  });
}

/**
 * Função responsável abrir o modal de aluno e salvar um novo aluno
 * @param {studentId} string
 */
const createStudent = () => {
  openStudentModal();
  studentModalTitle.textContent = 'Novo Aluno';
  saveStudentButton.textContent = 'Criar';
  saveStundentData('http://localhost:3000/alunos',  'POST');
}

/**
 * Função responsável abrir o modal de edição e carregar os dados de um estudante e salvar os dados da edição
 * @param {studentId} string
 */
 const editdStudentModal = async (studentId)  => {
  const url = `http://localhost:3000/alunos/${studentId}`;
  openStudentModal();
  studentModalTitle.textContent='Editar aluno';
  saveStudentButton.textContent = 'Editar';
  const [name, matricula] = document.querySelectorAll('input');
  const selectCurso = document.querySelector("#curso");
  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    name.value = data.nome
    matricula.value = data.matricula
    selectCurso.value =  data.curso
  })
  saveStundentData(url, 'PUT');
 };

/**
 * Função responsável por apagar dados de um estutande
 * @param {studentId} string
 */
const deleteStudentTable = async (studentId)  =>  
  fetch(`http://localhost:3000/alunos/${studentId}`, {method : 'DELETE'});

/**
 * Função responsável por carregar os dados da student-table
 */
const loadStudentTable = () => {
  fetch('http://localhost:3000/alunos')
  .then(resp => resp.json())
  .then(data => {
    data.forEach(item => {
      createStudentTableRow(item.nome, item.matricula, item.curso, item.id)
    })
  }).catch((error) => {
    alert('ocorreu um erro tente mais tarde')
    console.error(error);
  });
};

loadStudentTable();


// -----------------------------------------------------------------------------------------------


/**
 * Função responsável abrir o modal de disciplina
 */
const openSubjectModal = () => subjectModal.showModal();

/**
 * Função responsável fechar o modal de disciplina
 */
const closeSubjectModal = () => subjectModal.close();

/**
 * Função responsável salvar os dados de uma disciplina
 * @param {url} string
 * @param {method} string
 */
const saveSubjectData = (url, method) => {
  subjectForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const formData = new FormData(subjectForm);
    const payload = new URLSearchParams(formData);
    fetch(url, {
        method: method,
        body: payload
    })
    .catch(error => {
        closeSubjectModal();
        alert('ocorreu um erro tente mais tarde')
        console.error(error);
    })
  });
}

/**
 * Função responsável abrir o modal de disciplinas e salvar uma nova disciplina
 * @param {subjectId} string
 */
const createSubject = () => {
  openSubjectModal();
  subjectModalTitle.textContent = 'Nova Disciplina';
  saveSubjectButton.textContent = 'Criar';
  saveSubjectData('http://localhost:3000/disciplinas', 'POST');
}

/**
 * Função responsável abrir o modal de edição e carregar os dados de uma disciplina e salvar os dados da edição
 * @param {subjectId} string
 */
const editdSubjectModal = async (subjectId)  => {
  const url = `http://localhost:3000/disciplinas/${subjectId}`;
  openSubjectModal();
  subjectModalTitle.textContent='Editar disciplina';
  saveSubjectButton.textContent = 'Editar';
  const form = document.querySelectorAll('#subject-form input');
  const selectStatus = document.querySelector("#status");
  const selectTextarea = document.querySelector("#observacos")

  fetch(url)
  .then(resp => resp.json())
  .then(data => {

    form[0].value = data.nome
    form[1].value = data.cargaHoraria
    form[2].value = data.professor
    selectStatus.value = data.status
    selectTextarea.value = data.observacos
    
  })

  saveSubjectData(url, 'PUT');
 };

 /**
 * Função responsável por apagar dados de uma disciplina
 * @param {subjectId} string
 */
const deleteSubject = async (subjectId)  =>  
fetch(`http://localhost:3000/disciplinas/${subjectId}`, {method : 'DELETE'});

/**
 * Função responsável por criar secoes no subject-section
 * @param {nome} string
 * @param {cargaHoraria} string
 * @param {professor} string
 * @param {status} string
 * @param {observacos} string
 * @param {id} string
 */
const createSubjectSection = (nome, cargaHoraria, professor, status, observacos, id) => {
  const subjectSection = document.querySelector('#subject-list')
  const subjectElem = document.createElement('div');

  if (status == "Obrigatória"){
    subjectElem.innerHTML = `
    <div class="subject-card">
      <h3 class="subject-card__title">${nome}</h3>
      <hr />
      <ul class="subject-card__list">
        <li>carga horária: ${cargaHoraria}</li>
        <li>Professor: ${status}</li>
        <li>Status <span class="tag tag--danger">${status}</span></li>
        </ul>
        <p>${observacos}</p>
        <div class="modal__form-buttons">
          <button class="button button--danger" onclick=deleteSubject(${id})>Apagar</button>
          <button class="button button--success" onclick="editdSubjectModal(${id})">Editar</button>
        </div>
      </div>`;
  }

  if (status == "Opcional"){
    subjectElem.innerHTML = `
    <div class="subject-card">
      <h3 class="subject-card__title">${nome}</h3>
      <hr />
      <ul class="subject-card__list">
        <li>carga horária: ${cargaHoraria}</li>
        <li>Professor: ${status}</li>
        <li>Status <span class="tag tag--success">Opcional</span></li>
        </ul>
        <p>${observacos}</p>
        <div class="modal__form-buttons">
          <button class="button button--danger" onclick=deleteSubject(${id})>Apagar</button>
          <button class="button button--success" onclick="editdSubjectModal(${id})">Editar</button>
        </div>
      </div>`;
  }

  subjectSection.appendChild(subjectElem);
}

/**
 * Função responsável por carregar os dados da subject-section
 */
const loadSubjectSection = () => {
  fetch('http://localhost:3000/disciplinas')
  .then(resp => resp.json())
  .then(data => {
    data.forEach(item => {
      createSubjectSection(item.nome, item.cargaHoraria, item.professor, item.status, item.observacos, item.id)
    })
  }).catch((error) => {
    alert('ocorreu um erro tente mais tarde')
    console.error(error);
  });
};

loadSubjectSection();