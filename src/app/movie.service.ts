import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MovieService {

  /**
   * 
   */
  private url = 'http://localhost:3000/movies';

  constructor(private httpClient: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getMovies() {
    return this.httpClient.get<Movie[]>(this.url)
  }
}
