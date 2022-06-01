
//-----------------show and hide form----------------------//
function showForm() {
	document.getElementById('close').className = 'close1';
	document.getElementById('tab').className = 'popin'
}
function hideForm() {
	document.getElementById('close').className = 'close2';
	document.getElementById('tab').className = 'popout'
}
//-----------------show and hide form----------------------//


//-----------------password hide or show----------------------//
let state1 = false
function showPass() {
	if (state1) {
		document.getElementById('password').setAttribute("type", "password");
		state1 = false;
	}
	else {
		document.getElementById('password').setAttribute("type", "text");
		state1 = true;
	}
}
//-----------------password hide or show----------------------//
const localSrorageLength = window.localStorage.length

function clearLocalStorage() {
	localStorage.clear()
	if (localSrorageLength === 0) {
		alert('local storage is empty')
	}
	else { alert('successfully fetched') }
}

let j = 1;
function retrivePriviousData() {
	const str1 = 'obj'
	for (let k = 1; k <= count; k++) {
		const employeeData1 = []
		let str = str1.concat(j)
		let value = localStorage.getItem(str)
		let data = JSON.parse(value)
		const table = document.getElementById('table')
		employeeData1.push(data)
		console.log(employeeData1);
		employeeData1.forEach(emp => {
			const row = document.createElement('tr')
			Object.values(emp).forEach(text => {
				const cell = document.createElement('td')
				const text1 = document.createTextNode(text)
				cell.appendChild(text1)
				row.appendChild(cell)
			})
			table.appendChild(row)
		})
		j = j + 1
	}
	if (localSrorageLength === 0) {
		alert('local storage is empty')
	}
	else { alert('successfully fetched') }
}

//-----------------validation inputs----------------------//
const form = document.getElementById('form');
const pname = document.getElementById('name');
const age = document.getElementById('age')
const password = document.getElementById('password');
const email = document.getElementById('email');
const terms = document.getElementById('checkbox')
const subject = document.getElementsByClassName('subject')
const subject1 = document.getElementById('subject1')
const subject2 = document.getElementById('subject2')
const subject3 = document.getElementById('subject3')
const subject4 = document.getElementById('subject4')
const sex = document.getElementsByClassName('sex')
const sex1 = document.getElementById('sex1')
const sex2 = document.getElementById('sex2')
const state = document.getElementById('state')

let employeeData = [];
let i = localSrorageLength + 1;
let count = localSrorageLength;

//-----------------validation----------------------//

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();


});
function checkInputs() {

	const fullName = validateName(pname)
	const passVal = ValidatePassword(password)
	const checkEmail = ValidateEmail(email)
	const agree = ValidateTerms(terms)
	const checkSubject = ValidateSubject(subject1, subject2, subject3, subject4, subject)
	const gender = ValidateGender(sex1, sex2, sex)
	const checkAge = ValidateAge(age)
	const checkState = ValidateState(state)

	//-----------------getting data from form ----------------------//
	if (fullName && passVal && checkEmail && agree && checkSubject && gender && checkAge && checkState) {
		let subjetDetail1 = ''
		if (subject1.checked) subjetDetail1 = 'Java'
		let subjetDetail2 = ''
		if (subject2.checked) subjetDetail2 = 'HTML'
		let subjetDetail3 = ''
		if (subject3.checked) subjetDetail3 = 'CSS'
		let subjetDetail4 = ''
		if (subject4.checked) subjetDetail4 = 'JavaScript'
		const arr = []
		if (subjetDetail1 !== '') {
			arr.push(subjetDetail1)
		}
		if (subjetDetail2 !== '') {
			arr.push(subjetDetail2)
		}
		if (subjetDetail3 !== '') {
			arr.push(subjetDetail3)
		}
		if (subjetDetail4 !== '') {
			arr.push(subjetDetail4)
		}
		const subjects = arr.join(',')
		if (sex1.checked) { sexDetail = 'Male' }
		else { sexDetail = 'Female' }
		let stateDetail = ''
		if (state.value === 'Karnataka') stateDetail = 'Karnataka'
		if (state.value === 'Tamilnadu') stateDetail = 'Tamilnadu'
		if (state.value === 'Andra') stateDetail = 'Andra'

		alert('response recorded')
		employeeData = []

		const employee = {
			fullname: pname.value.trim(),
			age: age.value.trim(),
			subjects: subjects,
			gender: sexDetail,
			password: password.value.trim(),
			email: email.value.trim(),
			state: stateDetail
		}
		employeeData.push(employee)

		//-----------------adding data to html table ----------------------//

		const table = document.getElementById('table')
		employeeData.forEach(emp => {
			const row = document.createElement('tr')
			Object.values(emp).forEach(text => {
				const cell = document.createElement('td')
				const text1 = document.createTextNode(text)
				cell.appendChild(text1)
				row.appendChild(cell)
			})
			table.appendChild(row)
		})
		//-----------------storing data in Local Storage----------------------//
		const str1 = 'obj'
		let str = str1.concat(i)
		console.log(i);
		const myJSON = JSON.stringify(employee);
		function toLocalStorage() {
			localStorage.setItem(str, myJSON)
			i = i + 1;
			count = count + 1
		}
		toLocalStorage()


		document.getElementById('close').className = 'close2';
		document.getElementById('tab').className = 'popout'


		form.reset()

	}


}
//-----------------validation functions ----------------------//

function validateName(name) {
	if (name.value === '') {
		setErrorFor(name, 'Name cannot be blank'); return false
	} else if (name.value.length < 3) {
		setErrorFor(name, 'Name should be min 3 letters'); return false
	} else {
		setSuccessFor(name); return true
	}
}
function ValidatePassword(password) {
	if (password.value === '') {
		setErrorFor(password, 'Password cannot be blank'); return false
	} else if (!isPassword(password.value)) {
		setErrorFor(password, 'minimum 6 character including letter,number,special character'); return false
	} else {
		setSuccessFor(password); return true
	}
}
function ValidateEmail(email) {
	if (email.value === '') {
		setErrorFor(email, 'Email cannot be blank'); return false
	} else if (!isEmail(email.value)) {
		setErrorFor(email, 'Not a valid email'); return false
	} else {
		setSuccessFor(email); return true
	}
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password) {
	return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)
}
function ValidateTerms(terms) {
	if (terms.checked === false) {
		setErrorFor1(terms, 'You must agree T&C'); return false
	} else {
		setSuccessFor1(terms); return true
	}
}
function ValidateSubject(subject1, subject2, subject3, subject4, subject) {
	if (subject1.checked === false && subject2.checked === false && subject3.checked === false && subject4.checked === false) {
		setErrorFor2(subject[0], 'Please select one subject'); return false
	} else {
		setSuccessFor4(subject[0]); return true
	}
}
function ValidateGender(sex1, sex2, sex) {
	if (sex1.checked === false && sex2.checked === false) {
		setErrorFor2(sex[0], 'please select gender'); return false
	} else {
		setSuccessFor4(sex[0]); return true
	}
}
function ValidateAge(age) {
	if (age.value < 1 || age.value > 150) {
		setErrorFor(age, 'age must be between 1 and 150'); return false
	} else {
		setSuccessFor2(age); return true
	}
}
function ValidateState(state) {
	if (state.value === '--select state--') {
		setErrorFor3(state, 'please select state'); return false
	} else {
		setSuccessFor3(state); return true
	}

}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	const input1 = formControl.querySelector('input');
	formControl.className = 'form1 error';
	input1.className = 'form-control is-invalid';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	const input1 = formControl.querySelector('input');
	formControl.className = 'form1 success';
	input1.className = 'form-control';
}

function setErrorFor1(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	const label = formControl.querySelector('label');
	label.style.color = 'red'
	formControl.className = 'form1 error';
	small.innerText = message;
}
function setSuccessFor1(input) {
	const formControl = input.parentElement;
	const label = formControl.querySelector('label');
	label.style.color = 'black'
	formControl.className = 'form1 success';

}
function setErrorFor2(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form1 error';
	small.innerText = message;
}
function setSuccessFor2(input) {
	const formControl = input.parentElement;
	const input1 = formControl.querySelector('input');
	formControl.className = 'form1 success';
	input1.className = 'form-control ';
}
function setSuccessFor4(input) {
	const formControl = input.parentElement;
	formControl.className = 'form1 success';
}


function setErrorFor3(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form1 error';
	const input1 = formControl.querySelector('select');
	input1.className = 'form-control is-invalid';
	small.innerText = message;
}
function setSuccessFor3(input) {
	const formControl = input.parentElement;
	const input1 = formControl.querySelector('select');
	formControl.className = 'form1 success';
	input1.className = 'form-control';
}

