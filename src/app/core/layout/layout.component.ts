import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit, OnDestroy {

  @ViewChild('sidemenu') sidemenu;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void  {
  }
}
