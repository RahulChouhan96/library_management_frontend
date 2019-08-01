import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private suggestionByTitleUrl = "http://localhost:2000/libraryManagement/suggestionsForTitle";
  private suggestionByAuthorUrl = "http://localhost:2000/libraryManagement/suggestionsForAuthor";
  constructor(private http: HttpClient) { }

  giveTitleSuggestions(obj) {
    return this.http.post<any>(this.suggestionByTitleUrl, obj);
  }

  giveAuthorSuggestions(obj) {
    return this.http.post<any>(this.suggestionByAuthorUrl, obj);
  }

  // search(obj){
  //   return this.http.post<any>();
  // }
}
