import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadrComponent } from './headr/headr.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MainePageComponent } from './maine-page/maine-page.component';
import { MatTableModule } from '@angular/material/table';
import { AddAppComponent } from './add-app/add-app.component';
import { MatMenuModule } from '@angular/material/menu';
import { NewJobComponent } from './new-job/new-job.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { RouterModule, Routes } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
const routes: Routes = [
  { path: '', component: MainePageComponent },
  { path: 'AddJOb', component: NewJobComponent },
  { path: 'Add', component: AddAppComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeadrComponent,
    MainePageComponent,
    AddAppComponent,
    NewJobComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUploaderModule,
    RouterModule.forRoot(routes),
    MatSortModule,
    MatToolbarModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeadrComponent],
})
export class AppModule {}
