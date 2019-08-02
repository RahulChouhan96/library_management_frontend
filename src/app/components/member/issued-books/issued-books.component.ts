import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent implements OnInit {
  books = [];
  obj = {
    memberId: ""
  };
  constructor(private memberSrv: MemberService) { }

  ngOnInit() {
    this.getMemberId();
    this.issuedBooksByMember();
  }

  getMemberId() {
    this.obj.memberId = sessionStorage.getItem("memberId");
  }

  issuedBooksByMember() {
    this.memberSrv.issuedBooksByMember(this.obj)
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
