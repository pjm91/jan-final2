document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    const employeeList = document.getElementById('employeeList');
    const message = document.getElementById('message');

    // Array to hold employee data
    let employees = [];

    // Function to add an employee
    const addEmployee = () => {
        const name = document.getElementById('name').value.trim();
        const profession = document.getElementById('profession').value.trim();
        const age = document.getElementById('age').value.trim();

        // Check if all fields are filled
        if (name === '' || profession === '' || age === '') {
            displayMessage('Please fill in all the fields', 'error');
            return;
        }

        // Create a new employee object
        const newEmployee = {
            id: employees.length + 1,
            name,
            profession,
            age: parseInt(age)
        };

        // Add the employee to the array
        employees.push(newEmployee);

        // Display success message
        displayMessage('Employee added successfully', 'success');

        // Update the displayed employee list
        updateEmployeeList();

        // Reset the form
        employeeForm.reset();
    };

    // Function to display messages (success/error)
    const displayMessage = (msg, type) => {
        message.textContent = msg;
        message.className = `message ${type}`;
    };

    // Function to update the employee list display
    const updateEmployeeList = () => {
        // Clear the current list
        employeeList.innerHTML = '';

        // Map through the employees array and display each one
        employees.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.className = 'employee-item';
            employeeDiv.innerHTML = `
                <div>${employee.name} (${employee.profession}, Age: ${employee.age})</div>
                <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
            `;
            employeeList.appendChild(employeeDiv);
        });
    };

    // Function to delete an employee by ID
    window.deleteEmployee = (id) => {
        // Remove the employee from the array
        employees = employees.filter(employee => employee.id !== id);

        // Update the displayed employee list
        updateEmployeeList();
    };

    // Add event listener to the add employee button
    addEmployeeBtn.addEventListener('click', addEmployee);
});
