class movie {
    constructor (title, gender, year)
    this.title = title
    this.gender = gender
    this. year = year
}
getTitle() {
    return this.title
}


getInfo() {
    return `Esta película se llama ${this.title} es de género ${this.gender} y es del año ${this.year}.`
}

let Films = [];


while(films.length) < 3 {
    let title = prompt ('agrega título de peli');
    let gender = prompt ('género?');
    let year = prompt ('año de estreno');

    films.push(new Movie (title, gender, year));
}


const showNames = () => {
    for(const film of  films) {
        console.log(film.getTitle());
    }
}

showNames();