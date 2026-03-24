export {};

class Person {
  constructor(protected name: string) {}

  public describe(): string {
    return `Name: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name: string, protected rollNo: number) {
    super(name);
  }

  public describe(): string {
    return `${super.describe()}\nRoll No: ${this.rollNo}`;
  }
}

class GraduateStudent extends Student {
  constructor(name: string, rollNo: number, private specialization: string) {
    super(name, rollNo);
  }

  public describe(): string {
    return `${super.describe()}\nSpecialization: ${this.specialization}`;
  }
}

document.getElementById("showBtn")?.addEventListener("click", () => {
  const graduate = new GraduateStudent("Aarav", 27, "Computer Science");
  const output = document.getElementById("output") as HTMLPreElement;
  output.textContent = graduate.describe();
});
