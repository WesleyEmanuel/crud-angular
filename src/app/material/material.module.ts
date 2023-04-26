import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

const MODULES = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule {}
