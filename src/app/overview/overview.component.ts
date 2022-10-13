import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book, BooksWithAuthor, BookAPIData } from '../model/bookModel';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  books!: Book[];
  booksWithAuthor!: BooksWithAuthor;
  constructor(public booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBookDetails().subscribe((data: BookAPIData) => {
      console.log(data);
      this.booksWithAuthor = data?.data;
      this.books = data?.data?.books;
    });
  }

}
