import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './components/member/front-page/front-page.component';
import { IssuedBooksComponent } from './components/member/issued-books/issued-books.component';
import { BooksIssuedComponent } from './components/librarian/books-issued/books-issued.component';

const routes: Routes = [
  {path: "libraryManagement/member/front", component: FrontPageComponent},
  {path: "libraryManagement/member/issuedBooks", component: IssuedBooksComponent},
  {path: "libraryManagement/librarian/booksIssued", component: BooksIssuedComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
