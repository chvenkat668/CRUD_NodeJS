import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string;
  password:string;
  email:string;

	bookService: any;
	router;
  route;
  static get parameters() {
		return [BookService, ActivatedRoute, Router];
	}
  constructor(bookService, route, router) {
		this.bookService = bookService;
    this.route = route;
	  this.router = router;
  }

  ngOnInit() {
  }

  registerUser() {
      let userData = {
        username: this.username,
        password: this.password,
        email: this.email,
      }

      this.bookService.registerUser(userData).subscribe(res => {
        if(res.success) {
          alert(res.message);
        } else {
          alert(res.message);
        }
      });
    }
}
