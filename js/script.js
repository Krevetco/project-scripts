'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt("Сколько любимых фильмов?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько любимых фильмов?", '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a == null || b == null || a == '' || b == '' || a.length > 50) {
                i--;
            } else {
                personalMovieDB.movies[a] = +b;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count != null) {
            if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
                console.log("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
                console.log("Вы классический зритель");
            } else if (personalMovieDB.count > 30) {
                console.log("Вы киноман");
            } else { console.log("Произошла ошибка"); }
        } else { console.log("Произошла ошибка"); }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const a = prompt(`Ваш любимый жанр фильма под номером ${i+1}`).toLowerCase();
            if (a == null || a == '') {
                i--;
            } else {
                personalMovieDB.genres[i] = a;
            }
        }
        personalMovieDB.genres.sort();
        personalMovieDB.genres.forEach(personalMovieDB.showYourGenres);
    },
    showYourGenres: function(item, i, arr) {
        console.log(`Любимый жанр ${i+1} - это ${item}`);
    },
    recursiveCheckingDB: function(nameOfBigDB) {
        for (let key in nameOfBigDB) {
            if (typeof(nameOfBigDB[key]) === 'object') {
                recursiveCheckingDB(nameOfBigDB[key]);
            } else {
                console.log(`Свойство ${key} имеет значение ${nameOfBigDB[key]}`)
            }
        }
    },
    showMyDB: function() {
        console.log(!personalMovieDB.privat ? personalMovieDB : "It's personal DB");
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles[1]);

const hearths = document.querySelectorAll('.heart');

hearths.forEach(item => {
    console.log(item);
})