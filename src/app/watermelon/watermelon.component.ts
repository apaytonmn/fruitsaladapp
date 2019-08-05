import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
    selector: 'app-watermelon',
    templateUrl: './watermelon.component.html',
    styleUrls: ['./watermelon.component.css']
})
export class WatermelonComponent implements OnInit {

    title = 'My NgRx Watermelon Component';

    constructor() {}

    ngOnInit() {

    }

    newWatermelon() {

    }
}
