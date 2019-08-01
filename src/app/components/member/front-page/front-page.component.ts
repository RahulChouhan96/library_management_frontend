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
        },
        err => {
          console.log("Error while searching for suggestions", err);
        }
      )
  }

  search() {

  }
}
