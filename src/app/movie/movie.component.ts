import { Component, Input } from "@angular/core";
import { Movie } from "../movie";
@Component({
    selector: "movie-card",
    standalone: true,
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.css"]

})


export class MovieComponent {
    @Input()
    movie!: Movie
}

