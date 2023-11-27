class Student {
  name: string;
  module: string;
  grade: number | null = null;

  constructor(name: string, module: string) {
    this.name = name;
    this.module = module;
  }

  sayHello() {
    console.log(`Ola sou ${this.name} e estou no modulo ${this.module}.`);
  }

  setGrade(grade: number) {
    this.grade = grade;
  }

  getGrade() {
    console.log(`Nota: ${this.grade}`);
  }
}

const student = new Student("Eduardo", "M4");
student.sayHello();
student.setGrade(10);
student.getGrade();
