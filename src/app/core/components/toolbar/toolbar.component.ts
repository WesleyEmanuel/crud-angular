import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() toogleSideMenu = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSideMenu(): void {
    this.toogleSideMenu.emit();
  }
}
