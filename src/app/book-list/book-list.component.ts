import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books : Book[];

  constructor(private service : BookService, private router : Router) { }

  delete(indice : number){
    this.service.deleteBook(indice);
  }

  edit(indice : number){
    //rediriger l'utilisateur vers le formulaire d'edit
    this.router.navigate(['/books', 'edit', indice]);
  }

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }

}
