import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private suggestionByTitleUrl = "http://localhost:2000/libraryManagement/suggestionsForTitle";
  private suggestionByAuthorUrl = "http://localhost:2000/libraryManagement/suggestionsForAuthor";
  private booksByOneCategoryUrl = "http://localhost:2000/libraryManagement/booksByCategory";
  private allBooksByCategoriesUrl = "http://localhost:2000/libraryManagement/allBooksByCategory";
  private bookIssuedByAMemberUrl = "http://localhost:2000/libraryManagement/bookIssuedByAMember";
  constructor(private http: HttpClient) { }

  giveTitleSuggestions(obj) {
    return this.http.post<any>(this.suggestionByTitleUrl, obj);
  }

  giveAuthorSuggestions(obj) {
    return this.http.post<any>(this.suggestionByAuthorUrl, obj);
  }

  booksByOneCategory(obj) {
    return this.http.post<any>(this.booksByOneCategoryUrl, obj);
  }

  getAllBooksByCategories() {
    return this.http.get<any>(this.allBooksByCategoriesUrl);
  }

  issuedBooksByMember(obj) {
    return this.http.post<any>(this.bookIssuedByAMemberUrl, obj);
  }

  // search(obj){
  //   return this.http.post<any>();
  // }
}
