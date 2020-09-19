export class UI {
  constructor() {
    this.nameInput = document.getElementById("name");
    this.departmentInput = document.getElementById("department");
    this.salaryInput = document.getElementById("salary");
    this.employeesList = document.getElementById("employees");
    this.updateButton = document.getElementById("update");
  }

  addAllEmployeeToUI(employees) {
    let result = "";
    employees.forEach((employee) => {
      result += `
          <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td>
                    <a href="#" id="update-employee" class="btn btn-danger">
                    Güncelle
                    </a>
                </td>
                <td>
                    <a href="#" id="delete-employee" class="btn btn-danger">
                    Sil
                    </a>
                </td>
            </tr>
          `;
    });
    this.employeesList.innerHTML = result;
  }
  clearInputs() {
    this.nameInput.value = "";
    this.departmentInput.value = "";
    this.salaryInput.value = "";
  }
  addEmployeeToUI(employee) {
    this.employeesList.innerHTML += `
      <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td>
                <a href="#" id="update-employee" class="btn btn-danger">
                Güncelle
                </a>
            </td>
            <td>
                <a href="#" id="delete-employee" class="btn btn-danger">
                Sil
                </a>
            </td>
        </tr>
      `;
  }
  deleteEmployeeFromUI(element){
      element.remove();
  }
}
