import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../interfaces/joke.interface';

@Component({
    selector: 'app-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

    @Input()
    public jokes: Joke[];

    @Input()
    public title: string;

    @Output()
    public togglingFavorite: EventEmitter<any> = new EventEmitter();

    constructor() { }

    public toggleFavorite(joke: Joke) {
        this.togglingFavorite.emit(joke);
    }
}
