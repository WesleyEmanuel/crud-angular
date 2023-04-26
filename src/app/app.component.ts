import { Component } from '@angular/core';

interface menuItem {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuItens: menuItem[] = [{ label: 'Employees', icon: '' }];
}
