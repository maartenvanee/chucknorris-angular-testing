import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-joke-tile',
    templateUrl: './joke-tile.component.html',
    styleUrls: ['./joke-tile.component.css']
})
export class JokeTileComponent {

    @Input()
    public joke: Joke;

    @Output()
    public togglingFavorite: EventEmitter<Joke> = new EventEmitter();

    constructor() { }

    public toggleFavorite() {
        this.togglingFavorite.emit(this.joke);
    }
}
