import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(
    private service : BookService,
    private router : Router) { }

  add(f : NgForm){
    let book = this.service.createBook(f.value.iban, f.value.titre, f.value.date_publication, f.value.prix);
    this.service.addBook(book);
    this.router.navigate(['/books', 'list']);
  }

  ngOnInit(): void {
  }

}
