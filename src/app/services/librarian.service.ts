import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {
  private issuedBooksUrl = "http://localhost:2000/libraryManagement/bookIsIssuedBy";
  constructor(private http: HttpClient) { }
  issuedBooks(obj) {
    return this.http.post<any>(this.issuedBooksUrl, obj);
  }
}
