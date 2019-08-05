import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
    selector: 'app-apple',
    templateUrl: './apple.component.html',
    styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

    title = 'My NgRx Apple Component';

    constructor() {}

    ngOnInit() {

    }

    newApple() {

    }
}
