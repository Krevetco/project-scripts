'use strict';

const numberOfFilms = prompt("Сколько любимых фильмов?");

if (numberOfFilms != null) {
    if (numberOfFilms < 10 && numberOfFilms > 0) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms <= 30 && numberOfFilms >= 10) {
        console.log("Вы классический зритель");
    } else if (numberOfFilms > 30) {
        console.log("Вы киноман");
    } else { console.log("Произошла ошибка"); }
} else { console.log("Произошла ошибка"); }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = +prompt('На сколько оцените его?', '');

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a == null || b == null || a == '' || b == '' || a.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[a] = +b;
    }
}



console.log(personalMovieDB);