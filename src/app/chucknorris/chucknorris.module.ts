import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChucknorrisPageComponent } from './pages/chucknorris-page/chucknorris-page.component';
import { JokeTileComponent } from './components/joke-tile/joke-tile.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { ChucknorrisService } from './chucknorris.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule, HttpClientModule
    ],
    declarations: [
        ChucknorrisPageComponent, JokeListComponent, JokeTileComponent
    ],
    exports: [ChucknorrisPageComponent],
    providers: [ChucknorrisService]
})
export class ChucknorrisModule { }
