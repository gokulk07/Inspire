import { Component, Input } from '@angular/core';
import { Book } from '../model/bookModel';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input() books: any;

  onFiterSelected(filter:string) {
    console.log(filter);
    if(filter === 'publishYearAscending')
    this.books = this.books.sort((a:any,b:any) => a.PublishDate - b.PublishDate);
    else if(filter === 'publishYearDescending')
    this.books = this.books.sort((a:any,b:any) => b.PublishDate - a.PublishDate);
    else if(filter === 'bookNameAscending')
    this.books = this.books.sort((a:any,b:any) => a.title.localeCompare(b.title));
    else if(filter === 'bookNameDescending')
    this.books = this.books.sort((a:any,b:any) => b.title.localeCompare(a.title));
  }

}
