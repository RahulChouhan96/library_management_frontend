import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  // categoryArray: ["Science", "Mathematics", "Literature"];
  titleSuggestions = [];
  authorSuggestions = [];
  booksByTitle: [];
  booksByAuthor: [];
  booksByCategory: [];
  allBooksByAllCategory: [[]];
  searchItForTitle: Boolean = false;
  searchItForAuthor: Boolean = false;
  searchItForCategory: Boolean = false;
  obj = {
    titleKeyword: "",
    authorKeyword: "",
    category: ""
  }
  constructor(private memberSrv: MemberService) { }

  ngOnInit() {
  }

  giveTitleSuggestions() {
    this.titleSuggestions = [];
    let titleObj = { key: this.obj.titleKeyword };
    this.memberSrv.giveTitleSuggestions(titleObj)
      .subscribe(
        res => {
          console.log(res);
          res.response.forEach(index => {
            this.titleSuggestions.push(index.title);
          });
          this.booksByTitle = res.response;
        },
        err => {
          console.log("Error while searching for suggestions", err);
        }
      )
  }

  giveAuthorSuggestions() {
    this.authorSuggestions = [];
    let titleObj = { key: this.obj.authorKeyword };
    this.memberSrv.giveAuthorSuggestions(titleObj)
      .subscribe(
        res => {
          console.log(res);
          res.response.forEach(index => {
            this.authorSuggestions.push(index.author);
          });
          this.booksByAuthor = res.response;
        },
        err => {
          console.log("Error while searching for suggestions", err);
        }
      )
  }


  booksByOneCategory() {
    let obj = {
      category: this.obj.category
    };
    this.memberSrv.booksByOneCategory(obj)
      .subscribe(
        res => {
          console.log(res);
          this.booksByCategory = res.response;
        },
        err => {
          console.log(err);
        }
      )
  }

  search() {
    if (this.obj.titleKeyword)
      this.searchItForTitle = true;

    if (this.obj.authorKeyword)
      this.searchItForAuthor = true;

    if (this.obj.category)
      this.searchItForCategory = true;
    this.booksByOneCategory();
  }

  getAllBooksByCategories() {
    this.memberSrv.getAllBooksByCategories()
      .subscribe(
        res => {
          console.log(res);
          this.allBooksByAllCategory = res.response;
        },
        err => {
          console.log(err);
        }
      )
  }

}
