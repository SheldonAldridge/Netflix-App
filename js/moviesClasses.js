export class MovieList{

    constructor(id , namesOfMovies, genre, comingSoon, availableDate, duration, thumbnail, preview){

        this.id = id;
        this.name = namesOfMovies;
        this.genre = genre;
        this.comingSoon = comingSoon;
        this.availDate = availableDate;
        this.duration = duration;
        this.thumbnail = thumbnail;
        this.preview = preview;
    }
}