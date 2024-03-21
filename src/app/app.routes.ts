import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'books', component: BooksComponent },
    { path: 'adminpanel', component: AdminpanelComponent },
    { path: '**', redirectTo: '' }
];
