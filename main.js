class Teacher() {
  constructor(student, teacher) {
    this.student = student;
    this.teacher = teacher;
  }
};

class student extends Teacher {
  constructor(classroom) {
    this.classrom = {
      teacher: classroom.teacher,
      student: classroom.student
    }
  }
  respect() {
    console.log('Hello my teacher, ' + this.classroom.teacher + '. I am your student, ' + this.classroom.student);
  }
};

/* Thanks for all, my dear techer - "Colt Steele" */
const greeting = new student('Abdullah', 'Colt');
/* respect your teacher */
greeting.respect();
// result: ❤
