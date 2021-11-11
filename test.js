const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function() {
        personalMovieDB.count = +prompt("How many films you see?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films you see?", "");
        }
    },
    rememberMyFilms: function() {
        let count = 0;
        do {
            count++;
            const a = prompt("Last movies which you see", ""),
                  b = +prompt("Please to grade film from 1 to 10", "");
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                count--;
            }
        } while (count < 2);
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("You see not many films");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("classical kinolover");
        } else {
            alert("you see a lot of films");
        }
    }, 
    showDB: function(hiden) {
        if (!hiden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
           personalMovieDB.genres[i-1] = prompt(`Which moust genres you like under number ${i}?`);
        } 
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB. showDB();
personalMovieDB.writeYourGenres();




//if (0) {
//    console.log('OK!');
//} else {
//    console.log('error');
//}

//const num = 5;
//
//if (num < 49) {
//    console.log("error");
//} else if (num > 100) {
//    console.log("a lot");
//} else {
//    console.log("ok");
//}

//(num === 50) ? console.log('ok') : console.log("error");

//switch (num) {
//    case 49:
//        console.log('not');
//        break;
//    case 500:
//        console.log('not');
//        break;
//    case 50:
//        console.log("ok");
//        break;
//    default: console.log("at not time");
//}

//let num = 50;

//while (num < 55) {
//    console.log(num);
//    num++;
//}

//do {
//    console.log(num);
//    num++;
//} while (num < 55);

//for (let i = 1; i < 10; i++) {
//    if (i === 6) {
//        //break;
//        continue;
//    }
//    console.log(i);
//}

//function declaration
//function showFirstMsg(str, num) {
//    console.log(str + " " + num);
//}
//showFirstMsg("hello world", 45);
//
//function calc (a, b) {
//    return a + b;
//}
//console.log(calc (1, 12));
//
//function ret() {
//    let num = 50;
//    return num;
//}
//const another = ret();
//console.log(another);
//
////function expression
//const funcExpre = function () {
//    console.log("hello");
//};
//funcExpre();
//
//// row function
//const calculator = (a, b) => console.log(a + b);
//calculator(2, 3);

//const str = "test";
//const arr = [1, 2, 4];
//
//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
//console.log(str);
//
//let fruit = "Some fruit";
//
//console.log(fruit.indexOf("fruidt"));
//
//const logg = "hello world";
//console.log(logg.slice(logg.indexOf("world"), logg.length));
//
//console.log(logg.substring(6, 11));
//
//console.log(logg.substr(6, 5));
//
//const num = 12.2;
//
//console.log(Math.round(num));
//
//const test = "12.2px";
//console.log(parseInt(test));
//console.log(parseFloat(test));

//function first() {
//    //do something
//    setTimeout(function() {
//        console.log(1);
//    }, 500);
//}
//
//function second() {
//    console.log(2);
//}
//
//first();
//second();

//function learnJs(lang, callback) {
//    console.log("I learn " + lang);
//    callback();
//}
//
//function done() {
//    console.log("i do it");
//}
//
//learnJs('JS', done);

//const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//        border: 'black',
//        bg: 'red'
//    },
//    makeTest: function() {
//        console.log("test");
//    }
//};
//options.makeTest();

//const {border, bg} = options.colors;
//console.log(border);

//console.log(options.name);

//delete options.name;

//console.log(options);

//let counter = 0;
//for (let key in options) {
//    if (typeof(options[key]) === 'object') {
//        for (let i in options[key]) {
//            console.log(`property ${i}, have equal ${options[key][i]}`);
//            counter++;
//        }
//    } else {
//        console.log(`property ${key}, have equal ${options[key]}`);
//        counter++;
//    }
//}
//console.log(counter);

//console.log(Object.keys(options).length);

//const arr = [1, 2, 3, 4, 5, 6];
//arr[99] = 0;
//console.log(arr.length);
//arr.pop();
//arr.push(10);

//console.log(arr);

//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//for (let value of arr) {
//    console.log(value);
//}

//const str = prompt("", "");
//const products = str.split(", "); // like explode php
//products.sort();
//console.log(products.join('; ')); // like implode php


//arr.forEach(function(item, i, arr) {
//    console.log(`${item}: ${i} inside array ${arr}`);
//});


//et a = 5,
//   b = a;
//
// = b + 5;
//console.log(b);
//console.log(a);

//const obj = {
//    a: 5, 
//    b: 1
//};
//
//const copy = obj; //link object
//
//copy.a = 10;
//
//console.log(copy);
//console.log(obj);

//function copy(mainObj) {
//    let objCopy = {};
//
//    let key;
//    for(key in mainObj) {
//        objCopy[key] = mainObj[key];
//    }
//    
//    return objCopy;
//}

//const numbers = {
//    a: 2,
//    b: 3,
//    c: {
//        x: 7,
//        y: 4
//    }
//};

//const newNumbers = copy(numbers);
//
//newNumbers.a = 10;
//
//console.log(newNumbers);
//console.log(numbers);

//const add = {
//    d: 17,
//    i: 20
//};
//
//const clone = Object.assign({}, add);
//
//clone.d = 20;
//
//console.log(add);
//console.log(clone);

//const oldArr = ['a', 'b', 'c'];
//const newArr = oldArr.slice();
//
//newArr[1] = 'sdnvksdvkln';
//console.log(newArr);
//console.log(oldArr);

//let str = "sum";
//let strObj = new String(str);
//
//console.log(typeof(str));
//console.log(typeof(strObj));

//console.dir([1, 2, 3]);

//const soldier = {
//    health: 400,
//    armor: 100,
//    sayHello: function() {
//        console.log("hello");
//    }
//};

//const john = Object.create();

//Object.setPrototypeOf(john, soldier);



