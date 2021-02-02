class Pupils {
  constructor(pupils) {
    this.student = pupils.student;
    this.teacher = pupils.teacher;
  }
};

class student extends Pupils {
  constructor(classroom) {
    super(classroom);
    console.log(classroom);
    this.state = {
      teacher: classroom.teacher,
      student: classroom.student
    }
  }
  respect() {
    const { teacher, student } = this.state;
    console.log('Hello my teacher, ' + teacher + '. I am your student, ' + student);
  }
};

/* Thanks for all, my dear teacher - "Colt Steele" */
const greeting = new student({student: 'Abdullah', teacher: 'Colt'});
/* respect your teacher */
greeting.respect();
// result: ❤
