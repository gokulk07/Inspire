import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookAPIData } from './model/bookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  bookURL:string = 'https://s3.amazonaws.com/api-fun/books.json';
  constructor(private http: HttpClient) { }

  getBookDetails() {
    return this.http.get<BookAPIData>(this.bookURL);
  }
}
