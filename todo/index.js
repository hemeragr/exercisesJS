// . Crea una función que se llame getUniqueId y devuelva el número de milisegundos que hay desde 1970 utilizando la función getTime de Date
// Esta función NO debe ser un Arrow function

function getUniqueId(){

  return new Date().getTime(); //esto te los milisegundos milisegundos que hay

}

getUniqueId(1970);

// . Crea una función que se llame isString con un parámetro y devuelva si dicho parámetro es una cadena de texto
// Esta función NO debe ser un Arrow function tipeof( sirve para saber que tipo es)

function isString(text){
  return typeof text === 'string';
} 

isString('Hola'); //TRUE
isString(3); //FALSE
//debuelve true si es 'texto' y false si pongo numeros dentro de 

// . Crea una función que se llame isEmpty con un parámetro y devuelva true si es una cadena de texto vacía.
// Esta función NO debe ser un Arrow function

function isEmpty(text){

  return text === "";

}

isEmpty(""); //TRUE 
isEmpty("hola"); //FALSE

// . Crea una función que se llame isValidText con un parámetro que te devuelva true si dicho parámetro es un texto Y no está vacío llamando a las dos funciones anteriores

function isValidText(text){
  return isString(text) && !isEmpty(text);
  
}

isValidId('gfd') //TRUE
isValidId('') //FALSE
isValidId(4) //FALSE

// . Crea una función que se llame isNumber con un parámetro y devuelva si dicho parámetro es un número
// Esta función NO debe ser un Arrow function

function isNumber(num){
  return typeof num === 'number';
}

isNumber(3)//TRUE
isNumber('ga')//FALSE

// . Crea una función que se llame isGreatherThan10 con un parámetro y devuelva true si es mayor que 10
// Esta función NO debe ser un Arrow function

function isGreatherThan10 (num) {
  return num > 10;
};

isGreatherThan10(12);//TRUE
isGreatherThan10(2);//FALSE

// . Crea una función que se llame isValidId con un parámetro que te devuelva true si dicho parámetro es un Número Y es mayor de 10 llamando a las dos funciones anteriores
// Esta función NO debe ser un Arrow function

function isValidId(num){
  return isNumber(num) && isGreatherThan10(num);
};

isValidId(186);//TRUE
isValidId(6);//FALSE

// . Crea una función createTask con dós parámetros, un texto y un id único, y te devuelva un objeto con ambos parámetros.
// Esta función NO debe ser un Arrow function

function createTask(text, b){
  return {
    name: text,
    age: id,
  };

}

createTask('caracol', 44);// OBJECT - {name: 'caracol', age: 44 }


// . Cambia la función anterior creando una nueva llamada createTaskWithTextValidation, que devuelva un string diciendo "Argumentos incorrectos" si el parámetro que guarda el texto no es una cadena de texto o está vacío
// Esta función NO debe ser un Arrow function

function createTaskWithTextValidation(text, id){

  if(!isValidText(text)){
    return "Argumentos incorrectos"
    };

    return createTask(text, id);

  }


createTaskWithTextValidation('hola', 22);
createTaskWithTextValidation(44, 'hola');
createTaskWithTextValidation('hola', 'hola');
createTaskWithTextValidation(44, 55);



// . Cambia la función anterior creando una nueva llamada createTaskWithValidation, para que además devuelva el string "Argumentos incorrectos" si el parámetro que guarda el ID no es un número y es menor o igual a 11
// Esta función NO debe ser un Arrow function

function createTaskWithValidation(text, id){

  if(!isValidText(text) || !isValidId(id)){
    return "Argumentos incorrectos";
    };

    return createTask(text, id);

  }

// Crea todas las funciones anteriores como ARROW functions, y llámalas exactamente igual que las originales pero con el sufijo Arrow, por ejemplo getUniqueId sería getUniqueIdArrow

const getUniqueIdArrow = () => {
  return new Date().getTime();
};

const isStringArrow = (text) => {
  return typeof text === 'string';
};

const isEmptyArrow = (text) => {
  return text === "";
};

const isValidTextArrow = (text) => {
  return isStringArrow(text) && !isEmptyArrow(text);
};

const isNumberArrow = (num) => {
  return typeof num === 'number';
}

const isGreatherThan10Arrow = (num) => {
  return num > 10;
};

const isValidIdArrow = (num) => {
  return isNumberArrow(num) && isGreatherThan10(num);
};

const createTaskArrow = (text, id) => {
  return {
    name: text,
    age: id,
  };

}

const createTaskWithTextValidationArrow = (text, id) => {
  if(!isValidTextArrow(text)){
    return "Argumentos incorrectos"
    };
    return createTaskArrow(text, id);
  };


const createTaskWithValidationArrow = (text, id) => {
  if(!isValidTextArrow(text) || !isValidIdArrow(id)){
    return "Argumentos incorrectos";
    };
    return createTaskArrow(text, id);
  };

// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidText


  const randomArray = [1, 2, '3', '4', '', 6, 7, '8'];

for (i = 0; i < randomArray.length; i++) {
  console.log(randomArray[i], isValidText(randomArray[i]));
}; 
  
// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidTextArrow

for (i = 0; i < randomArray.length; i++) {
  console.log(randomArray[i], isValidTextArrow(randomArray[i]));
}; 


// Crea una función que se llame generateRandomTasks con un parámetro, que te cree un array con el número de tasks. 

const tasks = [ 'hola', 23 ]

function generateRandomTasks(add) {
  tasks.push(add);
  return tasks.length;

};