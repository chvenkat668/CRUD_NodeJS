import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	bookService: any;
	bookList;
  router;
  showError:boolean;
  state;
  uPwd:string;
  static get parameters() {
		return [BookService, Router];
	}

  constructor(bookService, router) {
  	this.bookService = bookService;
    this.router = router;
  }

  ngOnInit() {
  }
  validateUser(uName,pwd){
    this.bookService.authniticateUser(uName,pwd).subscribe(state => {
      this.state = state;
      if(this.state){
       this.router.navigate(['/home']);
      }
      else{
        this.showError=true;
      }

    });
  }
}
