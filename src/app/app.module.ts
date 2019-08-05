import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule, 
         MatFormFieldModule, 
         MatInputModule,
         MatToolbarModule,
         MatSidenavModule,
         MatListModule,
         MatButtonModule,
         MatIconModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initialState, reducers, effects } from './app.state';
import { RotService } from './rot.service';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { BananaComponent } from './banana/banana.component';
import { AppleComponent } from './apple/apple.component';
import { WatermelonComponent } from './watermelon/watermelon.component';
import { LayoutComponent } from './core/layout/layout.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot(reducers, {initialState}),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({     // Required for ReduxDevTools
      maxAge: 25                         // Track history for 25 actions
    })
  ],
  declarations: [ 
    AppComponent, 
    BananaComponent,
    AppleComponent,
    WatermelonComponent,
    LayoutComponent
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
