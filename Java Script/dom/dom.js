document.write('welcome to DOM session')
// document.write('Welcome to DOM session)
// if id is present it returns element else null
const element = document.getElementById('demo')
console.log(element);
element.innerText = 'tOM'
element.style.background="blue"

// it returns single element
const pElement = document.querySelector('.test')
console.log(pElement);

const tagElement = document.querySelector('h1')
console.log(tagElement);

const idElement = document.querySelector('#demo')
console.log(idElement);

// it returns array of elements if class name is present
const personElements = document.getElementsByClassName('person')
console.log(personElements);
personElements[2].innerText = 'Mumbai'

for(let i=0;i<personElements.length;i++){
if(i===0){
    personElements[i].innerText = 'vijay'
}else if(i===1){
    personElements[i].innerText = 'S'
}
else{
    personElements[i].innerText = 'Chennai'
}
}
console.log('-------------------------------------------');
// it returns array of elements
// getElementsByTagName
const pElements = document.getElementsByTagName('p')
console.log(pElements);
for (let i=0;i<pElement.length;i++)
{
console.log(pElements);
pElements[i].innerHTML.style.color = 'blue'
}

console.log('-----------------------');
//
const personElementsAll = document.querySelectorAll('.person')
console.log(personElementsAll);
for (let i=0;i<personElementsAll.length;i++){
    console.log(personElementsAll);
    personElementsAll[i].style.color = 'red'
    personElementsAll[i].style.borderRadius = '10px'
    
}
const pTags = document.querySelectorAll('p')
console.log(pTags);
for(let i=0;i<pTags.length;i++){
    pTags[i].style.fontFamily = 'monospace'
    pTags[i].style.backgroundColor = 'lightgray'
}



console.log('--------------------------');
// create element
const h2Element = document.createElement('h2')
h2Element.innerText = 'This is h2 element'
console.log(h2Element);
h2Element.style.color = 'green'
document.body.appendChild(h2Element)


console.log('------------------------------------');
const labelElements = document.getElementsByTagName('label')
//adding style based on css file classes
// adding single class
labelElements[0].className = 'labelTag'
//adding multiple classes
labelElements[1].classList = 'labelTag labelBg'

console.log('-------------------------------------');
const userElement = document.getElementById('user')
// innerhtml will parse the tring as html code
userElement.innerHTML = '<h1>my name is ajit</h1>'

const user1Element = document.getElementById('user1')
// innerText will parse te sting as a plain text or
//string itself
user1Element.innerText='<h1>My name is ajit</h1>'

// to hide the element
const hobbiesListElement = document.getElementById('hobbieslist')
hobbiesListElement.style.display = 'none'

// to show the element
// const hobbiesListElement = document.getElementById('hobbieslist')
// hobbiesListElement.style.display = 'block'


