import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
	bookService: any;
	bookList;
  router;

	static get parameters() {
		return [BookService, Router];
	}

  constructor(bookService, router) {
  	this.bookService = bookService;
    this.router = router;
  }

  ngOnInit() {
  	this.bookService.getAllBooks().subscribe(bookList => {
  		this.bookList = bookList;
  		console.log(this.bookList);
  	});
  }

  deleteBook(id) {
  	this.bookService.deleteBookById(id).subscribe(result => {
  		if(result.success) {
        for(var index = 0; index < this.bookList.length; index++) {
          if(this.bookList[index]._id == result.id) {
            this.bookList.splice(index, 1);
          }
        }       
      } else {
        alert("Book not successfully deleted");
      }
  	});
  }

  editBook(id) {
    console.log("hellO");
    this.router.navigate(["/manage/book/add"], {
      queryParams: {
        bookId: id
      }
    });
  }
}