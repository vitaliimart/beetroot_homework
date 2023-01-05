// ?---------------------------------------------Завдання 3 -----------------------------

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

class Employee {
  name = 'по замовчуванню';
  age = 0;
  position = 'по замовчуванню';
  constructor(name, age, position) {
    if ((name, age, position)) {
      this.name = name;
      this.age = age;
      this.position = position;
    } else {
      throw new Error('Enter value');
    }
  }
}
const employee = new Employee('Артур', '27', 'Ангулярщик');
const employee1 = new Employee('Ярик', '18', 'Вискочка');
const employee2 = new Employee('Богдан', '23', 'Безробітний');
const employee3 = new Employee('Орест', '31', 'Всіх дістав');
const table = document.getElementById('table');

class EmpTable {
  constructor(empList) {
    this.empList = empList;
  }
  getHtml() {
    for (const element of this.empList) {
      const tr = document.createElement('tr');
      table.appendChild(tr);
      // ! innerHTML !!!
      tr.innerHTML = `<td>${element.name}</td><td>${element.position}</td><td>${element.age}</td>`;
    }
  }
}
const empList = new EmpTable([employee, employee1, employee2, employee3]);
empList.getHtml();

export { Employee, EmpTable };
