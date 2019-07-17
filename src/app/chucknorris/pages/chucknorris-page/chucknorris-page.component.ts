import { ChucknorrisService } from './../../chucknorris.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from '../../interfaces/joke.interface';

@Component({
  selector: 'app-chucknorris-page',
  templateUrl: './chucknorris-page.component.html',
  styleUrls: ['./chucknorris-page.component.css']
})
export class ChucknorrisPageComponent implements OnInit {

  public randomJokes: Joke[] = [];
  public favoriteJokes: Joke[] = [];
  public addingFavorites: boolean = false;

  private interval: any;
  private maxFavJokes: number = 10;

  constructor(private chuckNorrisService: ChucknorrisService) { }

  ngOnInit() {
    this.getStoredFavoriteJokes();
  }

  public getRandomJokes() {
    this.chuckNorrisService.getRandomJokes(10).subscribe((response: any) => {
      this.randomJokes = response.value;
    }, error => {
      console.log('error: ', error);
    });
  }

  public toggleFavorite(joke: Joke) {
    if (!joke.favorite) {
      this.addJokeToFavorites(joke);
    } else {
      this.removeJokeFromFavorites(joke);
    }
  }

  public toggleAddingFavorites() {
    if (!this.addingFavorites) {
      if (this.hasMaxFavorites()) {
        return;
      }
      if (this.favoriteJokes.length <= (this.maxFavJokes - 2)) {
        this.interval = setInterval(() => this.addRandomJokeToFavorites(), 5000);
        this.addingFavorites = true;
      }
      this.addRandomJokeToFavorites();
    } else {
      clearInterval(this.interval);
      this.addingFavorites = false;
    }
  }

  public hasMaxFavorites(): boolean {
    return this.favoriteJokes.length >= this.maxFavJokes;
  }

  private getStoredFavoriteJokes() {
    const storedJokesJSON = localStorage.getItem('FavoriteJokes');
    if (storedJokesJSON) {
      const jokes = JSON.parse(storedJokesJSON);
      if (jokes.length) {
        this.favoriteJokes = jokes;
      }
    }
  }

  private addRandomJokeToFavorites() {
    this.chuckNorrisService.getRandomJokes(1).subscribe((response: any) => {
      const jokes: Joke[] = response.value;
      const joke = jokes[0];
      this.addJokeToFavorites(joke);
    }, error => {
      console.log('error: ', error);
    });
  }

  private addJokeToFavorites(joke: Joke) {
    if (this.hasMaxFavorites()) {
      return;
    }
    joke.favorite = true;
    this.randomJokes = this.randomJokes.filter(j => j !== joke);
    this.favoriteJokes.push(joke);
    this.updateLocalStorage();

    if (this.addingFavorites && this.hasMaxFavorites()) {
      this.toggleAddingFavorites();
    }
  }

  private removeJokeFromFavorites(joke: Joke) {
    this.favoriteJokes = this.favoriteJokes.filter(j => j !== joke);
    joke.favorite = false;
    this.randomJokes.push(joke);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    const favsJson = JSON.stringify(this.favoriteJokes);
    localStorage.setItem('FavoriteJokes', favsJson);
  }
}
