import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

// import 'moment/locale/pt-br';

const material = [
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatButtonModule,

  MatSliderModule,
  MatMenuModule,
  MatIconModule,
  MatBadgeModule,
  MatSelectModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatDialogModule

];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
