import { Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
import { BananaComponent } from './banana/banana.component';
import { AppleComponent } from './apple/apple.component';
import { WatermelonComponent } from './watermelon/watermelon.component';

export const AppRoutes: Routes = [{
  path: '',
  component: LayoutComponent,
    children: [{
      path: 'banana',
      component: BananaComponent
    },{
      path: 'apple',
      component: AppleComponent
    },{
      path: 'watermelon',
      component: WatermelonComponent
    }]
}];