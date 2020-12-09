import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book : Book;
  indice : number;

  constructor(
    private route : ActivatedRoute,
    private service : BookService,
    private router : Router
    ) { }

  edit(f : NgForm){
    console.log(f);
    let book = this.service.createBook(f.value.iban, f.value.titre, f.value.date_publication, f.value.prix);
    this.service.editBook(book, this.indice);
    this.router.navigate(['/books', 'list']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.indice = params['indice'];
        this.book = this.service.getBook(this.indice);
      }
    )
  }

}
