'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько любимых фильмов?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько любимых фильмов?", '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a == null || b == null || a == '' || b == '' || a.length > 50) {
            i--;
        } else {
            personalMovieDB.movies[a] = +b;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count != null) {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else { console.log("Произошла ошибка"); }
    } else { console.log("Произошла ошибка"); }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр фильма под номером ${i}`);
    }
}

function showMyDB() {
    console.log(!personalMovieDB.privat ? personalMovieDB : "It's personal DB");
}


start();
// rememberMyFilms();
// detectPersonalLevel();
writeYourGenres();
showMyDB();