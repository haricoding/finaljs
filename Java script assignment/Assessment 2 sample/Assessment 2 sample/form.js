// empty array to push the form data and display 
// in table
const employeeData = []

const loginElement = document.getElementById('login')
loginElement.addEventListener('click', function () {
    // employee object to add the input fields value
    const employee = {
        userName: '',
        password: ''
    }
    // debugger
    // console.log('login button clicked');
    const userNameVal =
        document.getElementById('username').value
    const passwordVal =
        document.getElementById('password').value
    // console.log(userNameVal, passwordVal);
    const isUsernameValid = validateUsername(userNameVal)
    const isPasswordValid = validatePassword(passwordVal)
    if (isUsernameValid && isPasswordValid) {
        // if all the fields are valid add the values 
        // to employee object
        employee.userName = userNameVal
        employee.password = passwordVal

        // push the object to employeeData
        employeeData.push(employee)

        // display employee data using below function
        displayEmployeeData(employeeData)
    } else {
    }
})

function displayEmployeeData(empData) {
    const tableDiv = document.getElementById('tableData')
    let empTable = `<table border="1">
    <thead>
        <tr>
        <th>UserName</th>
        <th>Password</th>
        </tr>
    </thead>`
    empData.forEach(emp => {
        empTable += `<tr><td>${emp.userName}</td>
            <td>${emp.password}</td></tr>`
    })
    empTable+=`</table>`
    // display data in table
    tableDiv.innerHTML = empTable
}
function validateUsername(userName) {
    if (userName) {
        if (/^[a-zA-Z]*$/.test(userName)) {
            console.log(userName);
            showError(false,'','usernameError')
            return true
        } else {
            showError(true, 'Only characters are allowed','usernameError')
            return false
        }
    } else {
        // console.log('user name is empty');
        showError(true, 'Username cannot be empty','usernameError')
        return false
    }
}

function validatePassword(password) {
    if (password) {
        console.log(password);
        showError(false,'','passwordError')
        return true
    } else {
        // console.log('password is empty');
        showError(true, 'Password cannot be empty','passwordError')
        return false
    }
}

function showError(isShowError, errMsg,id) {
    const ele = document.getElementById('usernameError')
    if (isShowError) {
        ele.innerText = errMsg
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}

function showError(isError, errMsg,spanId) {
    const ele = document.getElementById(spanId)
    if (isError) {
        ele.innerText = errMsg
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}

// regex