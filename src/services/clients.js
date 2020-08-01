import { formatDate } from '../utils/formatDate'

const fakeProfessors = [
  {
    name: 'Professor 1',
    cpf: '12897512326',
    birthDate: '22/06/1999',
    sex: 'M',
    email: 'prof1@gmail.com',
    phone: '27988521802',
    classes: [],
    id: 'P1'
  },
  {
    name: 'Professor 2',
    cpf: '22897512326',
    birthDate: '23/07/1999',
    sex: 'F',
    email: 'prof2@gmail.com',
    phone: '27998521112',
    classes: [],
    id: 'P1'
  }
]

const fakeDisciplines = [
  {
    name: 'Disciplina 1',
    references: ['Livro Estrutura de dados e Algoritimos'],
    teachers: [fakeProfessors[0]],
    courses: [],
    id: 'D1'
  },
  {
    name: 'Disciplina 2',
    references: ['Artigo Análise Refactoring Martin Fowler'],
    teachers: [fakeProfessors[0], fakeProfessors[1]],
    courses: [],
    id: 'D2'
  },
  {
    name: 'Disciplina 3',
    references: ['Refactoring: Improving the Design of Existing Code'],
    teachers: [fakeProfessors[1], fakeProfessors[0]],
    courses: [],
    id: 'D3'
  }
]

export const getAllDisciplines = async () => {
  return fakeDisciplines
}

export const addDiscipline = async newCourseData => {
  const newCourse = {
    ...newCourseData,
    id: `${new Date().getTime()}`
  }

  return newCourse
}

const fakeCourses = [
  {
    name: 'Course 1',
    id: 'C1',
    disciplines: [fakeDisciplines[0]],
    maxDisciplines: 10
  },
  {
    name: 'Course 2',
    id: 'C2',
    disciplines: [fakeDisciplines[1], fakeDisciplines[2]],
    maxDisciplines: 5
  }
]
const fakeClasses = [
  {
    code: 1596344172492,
    discipline: fakeDisciplines[0],
    maxVacancies: 10,
    shift: 'Verspetino',
    startDate: formatDate(1596510000000),
    teacher: fakeProfessors[0],
    id: 'Class1'
  },
  {
    code: 1602039600000,
    discipline: fakeDisciplines[1],
    maxVacancies: 10,
    shift: 'Matutino',
    startDate: formatDate(1596510000000),
    teacher: fakeProfessors[1],
    id: 'Class2'
  }
]
export const getAllCourses = async () => {
  return fakeCourses
}

export const addCourse = async newCourseData => {
  const newCourse = {
    ...newCourseData,
    id: `${new Date().getTime()}`
  }

  return newCourse
}

export const getAllProfessors = async () => {
  return fakeProfessors
}

// export const getAllProfessorsByDiscipline = async (disciplineId) => {
export const getAllProfessorsByDiscipline = async () => {
  return fakeProfessors
}

export const getAllClasses = async () => {
  return fakeClasses
}
export const addClass = async classToAdd => {
  const fakeClassCreated = {
    ...classToAdd,
    id: new Date().getTime()
  }
  return fakeClassCreated
}
