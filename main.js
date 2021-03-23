const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'PLEASE ENTER ALL INFORMATION';

        setTimeout(() => msg.remove(), 3000);

     } else {
         const li = document.createElement('li');
         li.appendChild(document.createTextNode(
             `${nameInput.value} : ${emailInput.value}`));

         userList.appendChild(li);

         nameInput.value = '';
         emailInput = '';

         }
}








/*const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
    

});







/*const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</hi>';

const btn = document.querySelector( '.btn');
btn.style.background = 'red';



// Single element selectors
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));



// Multiple element selectors
//console.log(document.querySelectorAll('.item'))
//console.log(document.getElementsByClassName('item'));















/*Class
class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
    return `${this.firstName} ${this.lastName}`;
    }
}




// Instantiate Object
const person1 = new Person('Josh', 'Doe', '4-3-1980');
const person2 = new Person('sandra', 'Fine', '8-10-1989');

console.log(person2.getFullName());
console.log(person1);











/*const x = 10;

const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red' :
        console.log('color is red');
        break;
        case 'blue':
            console.log('color is blue')
            break;
            default:
                console.log('color is NOT BLUE');
                break;
}/*









/*const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'sweep',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'clean',
        isCompleted: true,
    },
    {
        id: 4,
        text: 'wash',
        isCompleted: false,
    },
];/*


const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);





//forEach, map, filter

/*const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

/*for(let todo of todos) {
    console.log(tudo.text);
}/*

//console.log(todos[2].text)

//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);


//for
//for(let i = 0; i < todos.length; i++) {
    //console.log(todos[1].text)};


//while

/*let i = 0;
while( i < 10) {
    console.log(`while loop number:${i}`)
    i++;
}*/

