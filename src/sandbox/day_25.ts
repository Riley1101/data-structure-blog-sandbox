interface Employee {
  doWork(): void;
}

class Designer implements Employee {
  doWork() {
    console.log("Designer designing ");
  }
}

class Developer implements Employee {
  doWork() {
    console.log("Developer developing");
  }
}

class Tester implements Employee {
  doWork() {
    console.log("Tester testing");
  }
}

class Company {
  employees: Employee[] = [];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getEmployees() {
    return this.employees;
  }
}
