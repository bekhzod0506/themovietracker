import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'themovietracker';

  movies!: Movie[];  
  filteredMovies!: Movie[];

  /***
   *
   */
  constructor(private movieService: MovieService) {
    
    this.movieService.getMovies().subscribe(response => {
      this.movies = response;
      this.filteredMovies = this.movies;
    })
  }
  /**
   * 
   * @param text 
   */
  search(text: string) {
    this.filteredMovies = this.movies.filter((movie: Movie) =>
      movie.movieTitle.toLowerCase().includes(text.toLowerCase())
  
    );
    
  }
}
