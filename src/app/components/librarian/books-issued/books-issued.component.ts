import { Component, OnInit } from '@angular/core';
import { LibrarianService } from 'src/app/services/librarian.service';

@Component({
  selector: 'app-books-issued',
  templateUrl: './books-issued.component.html',
  styleUrls: ['./books-issued.component.css']
})
export class BooksIssuedComponent implements OnInit {
  books = [];
  constructor(private librarianSrv: LibrarianService) { }
  obj = {
    librarianId: ""
  };
  ngOnInit() {
    this.getLibrarianId();
  }

  getLibrarianId() {
    this.obj.librarianId = sessionStorage.getItem("librarianId");
  }

  issuedBooks() {
    this.librarianSrv.issuedBooks(this.obj)
      .subscribe(
        res => {
          console.log(res);
          this.books = res.response;
        },
        err => {
          console.log(err);
        }
      )
  }

}
