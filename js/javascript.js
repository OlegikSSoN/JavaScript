// додає
let firstNumber = Number(prompt("First Number:"));

if (firstNumber) {
    const secondNumber = Number(prompt("Second Number:"));
    if (firstNumber && secondNumber && secondNumber > firstNumber) {
        const arr = []
        for (let i = firstNumber; i <= secondNumber; i++) {
            if(i % 2 != 0) {
            arr.push(i);
        }
    }
    console.log(arr)

    let multiplay = 0;
        for (const interator of arr) {
            multiplay = multiplay + interator;
        }

        console.log(multiplay);
    } else {
      alert("Leave from here!!!");
} 
} else {
    alert("Leave from here!!!");
}










//множить
//let firstNumber = Number(prompt("First Number:"));

//if (firstNumber) {
//    const secondNumber = Number(prompt("Second Number:"));
//    if (firstNumber && secondNumber && secondNumber > firstNumber) {
//        const arr = []
//        for (let i = firstNumber; i <= secondNumber; i++) {
//            if(i % 2 != 0) {
//            arr.push(i);
//        }
//    }
//    console.log(arr)

//    let multiplay = 1;
//        for (const interator of arr) {
//            multiplay = multiplay * interator;
//        }

//        console.log(multiplay);
//    } else {
//      alert("Leave from here!!!");
//} 
//} else {
//    alert("Leave from here!!!");
//}






//const arr = [1, 2, 3]
//const arr2 = [1, 2, 3, 4, 5, 6]

//if(arr.lengt !== arr2.length) {

//}
//for (let i = 0; i < arr.lengt; i++) {
//    console.log(arr[i], arr2[i])
//    if(arr[i] !== arr2[i]) {
//    console.log('break')
//    break;
//    }
//}



// масиви
//const testArray = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10]]];

//for (const innerArray of testArray) {
//    for (const iterator of innerArray) {
//        for (const allArray of iterator)
//        console.log(allArray);
//    }
//}








//const testArray = [[1, 2], [3, 4], [5, 6]];
//-
//for (let ix = 0; i < testArray.length; i++) {
//    const element = testArray[i];    
//}
//-
//for (let i = 0; i < element.length; i++) {
//    const element = testArray[i];
//    console.log(element[i])
//}
//-
//console.log(testArray[0][0]);
//console.log(testArray[0][1]);
//console.log(testArray[1][0]);
//console.log(testArray[1][1]);
//console.log(testArray[2][0]);
//console.log(testArray[2][1]);







// достукатись до певного масиву
//const testArray = [1, 2, 3, 4];

//testArray[1] = 'dsfdsf'
//console.log(testArray[0])
//console.log(testArray[1])
//console.log(testArray[2])
//console.log(testArray[3])



//let firstNumber = Number(prompt("First Number:"));

//if (firstNumber) {
//    const secondNumber = Number(prompt("Second Number:"));
//    if (firstNumber && secondNumber && secondNumber > firstNumber) {
//        const arr = []
//        for (let i = firstNumber; i <= secondNumber; i++) {
//            arr.push(1);
//        }
//        for (let i = 0; i < arr.length; i++) {
//            if(arr[i] % 2 != 0);
//            console.log(arr[i]);
//        }
//    } else {
//      alert("Leave from here!!!");
//} 
//} else {
//    alert("Leave from here!!!");
//}


//if (firstNumber) {
//    firstNumber++;
//}
//for (let i = firstNumber; i <= secondNumber; i += 2) {
//    console.log(i)
//}
//for (let i = firstNumber; i <= secondNumber; i++) {
//    if (i % 2 == 0) {
//        console.log(i)
//    }
//}


//const wrapperBlocks = document.createElement('button');
//let btn = document.createElement('button');
//btn.setAttribute('class', 'btn');
//btn.textContent = 'test value';
//wrapperBlocks.appendChild


//вивести кожен елемент
//const arr = ['Oleh1', 'Oleh2', 'Oleh3', 'Oleh4', 'Oleh5', 'Oleh6'];

//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//    if (arr[i] == 'Oleh4') {
//        console.log(`Елемент присутній на ${i + 1} позиції`);
//        break;
//    }
//}

//for (const [index, value] of arr.entries()) {  
//    console.log(value, index);
//    if (arr[index] == 'Oleh4') {
//        console.log(`Елемент присутній на ${index + 1} позиції`);
//        break;
//    }  
//}

//for (const element of arr) {
//    console.log(element)
//}

//arr.forEach((element, index) => {
//    console.log(element, index)
//});


//let index = 0;
//while (index < arr.length) {
//    console.log(arr[index]);
//    index++;
//}

//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}


//редактор елементів через яву
//const divElement = document.createElement("div");
//divElement.style.width = '300px';
//divElement.style.height = '300px';
//divElement.style.background = '#000';
//document.body.appendChild(divElement);

//const divElement2 = document.createElement("div");
//divElement2.style.width = '500px';
//divElement2.style.height = '500px';
//divElement2.style.background = '#000';
//divElement.appendChild(divElement2);

//setTimeout(function () {
//    const.parentEle = document.getElementById(perent)
//    console.log('test')
//}, 3000);


//const inputElement = document.getElementById('inputElement');
//inputElement.style.background = '#000';

//const inputElement2 = document.getElementById('inputElement');
//inputElement.style.background = '#000';
//inputElement.appendChild('inputElement2')


//Домашка
//const cardNumber = prompt('Номер картки');
//const name = prompt("Ваше ім'я");
//const age = prompt('Ваш вік');
//const country = prompt('Місце проживання');

//if (cardNumber) {
//    console.log("cardNumber")
//} else {
//    console.log("Невірний формат картки")
//}

//if (name) {
//    console.log("")
//} else {
//    console.log("")
//}

//if (age) {
//    console.log("")
//} else {
//    console.log("")
//}

//if (country) {
//    console.log("")
//} else {
//    console.log("")
//}


//let i = 0, i1 = 1, i2 = 3;
//console.log(i, i1, i2)

//const age = Number(prompt("Вік"));
//const name = prompt("Ім'я");

//if (age < 18) {
//    console.log("Hello Vlad")
//} else {
//    console.log("You is no Vlad")
//}

//if (name == 'Vlad') {
//    console.log("Hello Vlad")
//} else {
//    console.log("You is no Vlad")
//}


//const age = 10;
//const arr = [1, 2, 3];
//console.log(arr)
//arr.push(4);
//console.log(arr)
//arr.shift();
//console.log(arr)
//arr.unshift(5);
//console.log(arr)
//arr.pop();
//console.log(arr)


//alert('Задумане число');
//alert('на 2');
//alert('доадати 7');

//const userRespons = prompt('Ведіть результ');
//const userResponsNumber = Number(prompt('Ведіть число'));

//if(userRespons && userResponsNumber) {
//    const magicNumber = Number(prompt('Ведіть число'));
//    alert((magicNumber - 7) / 2);
//    console.log(typeof magicNumber);
//} else {
//    alert('Не коректне');
//}


//const tmp = 3;
//if(tmp > 1 && tmp < 10) {
//    console.log('true')
//}

//if(tmp > 10 || tmp < 1) {
//    console.log('true')
//}


//let number = 12;
//let testString = 'test string';
//const testObject = {
//    name; 'Test',
//};

//const name = prompt("Name");

//if (name == 'Vlad') {
//    console.log("Hello Vlad")
//} else {
//    console.log("You is no Vlad")
//}

//const age = prompt("Вік");
//const topcolor = prompt("Улюблений колір");
//const haircolor = prompt("Колір волосся");

//const result = `Привіт тобі ${age}, твій улюблений колір ${topcolor}, колір твого волосся ${haircolor}`
//alert(result)

//console.log(document)
//const age = prompt('Введіть вік')
//const name = prompt("Ім'я")
//const surname = prompt('Введіть прізвище')
//console.log("age = ", age)

//alert("Привіт " + name, " " + surname)
//const user = {
//    firstname: name;
//    surname: surname;
//    age: age
//}