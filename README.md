## Notes

### Person
  - name: string
  - cpf: string
  - birthDate: string
  - gender: string
  - email: string
  - phone: string

### Course
  - name: string
  - disciplines: Discipline[]
  - maxDisciplines: number

### Discipline - (name, course)
  - name: string
  - courses: Course[]
  - references: string[]
  - teachers: Professor[]
  
### Class - (startDate, code, shift)
  - discipline: Discipline
  - teacher: Professor
  - code: number,
  - shift: string
  - startDate: Date
  - students: Student[]
  - maxVacancies: number

### Professor - (name, cpf)
  ...Person
  - disciplines: Discipline[]
  - classes: Class[]

### Student - (name, code, cpf)
  ...Person
  - code: number
  - enroled: Class[]