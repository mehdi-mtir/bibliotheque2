import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //books = new Array<Book>();
  books : Book[];

  constructor() {
    console.log("Une nouvelle instance est créée")
    this.books = [];
  }

  createBook(iban : string, titre : string, date_publication : Date, prix : number){
    return new Book(iban, titre, date_publication, prix);
  }

  getBooks(){
    return this.books;
  }

  getBook(indice : number){
    return this.books[indice];
  }

  addBook(book : Book){
    this.books.push(book);
    console.log(this.books);
  }

  deleteBook(indice : number){
    if(confirm("Êtes vous sûre de vouloir supprimer le livre :" + this.books[indice].titre)){
      this.books.splice(indice, 1);
    }
  }

  editBook(book : Book, indiceBookToEdit : number){
    //Récupérer l'objet modifié afin de mettre à jour le tableau books -> le tableau HTML
    this.books[indiceBookToEdit] = book;
  }


}
