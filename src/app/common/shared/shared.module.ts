import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DefaultValuePipe } from 'src/app/default-value.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CovidDataService } from 'src/app/covid-data/covid-data.service';

const matModules = [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule,
  MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
  MatRadioModule, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSidenavModule,
  MatCardModule, MatCheckboxModule]

@NgModule({
  declarations: [DefaultValuePipe],
  imports: [
    CommonModule
  ],
  providers:[],
  exports: [matModules, DefaultValuePipe]
})

export class SharedModule { }
