import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MovieService {

  /**
   * 
   */
  private url = 'https://my-json-server.typicode.com/bekhzod0506/themovietracker/movies';

  constructor(private httpClient: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getMovies() {
    return this.httpClient.get<Movie[]>(this.url)
  }
}
