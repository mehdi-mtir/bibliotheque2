export class Book {
  private _iban: string;
  private _titre: string;
  private _date_publication: Date;
  private _prix: number;


  constructor(iban: string, titre : string, date_publication? : Date, prix? : number){
    this._iban = iban;
    this._titre = titre;
    this._date_publication = date_publication || new Date();
    this._prix = prix || 0;
  }

  public get iban(): string {
    return this._iban;
  }
  public set iban(value: string) {
    this._iban = value;
  }
  public get titre(): string {
    return this._titre;
  }
  public set titre(value: string) {
    this._titre = value;
  }

  public get date_publication(): Date {
    return this._date_publication;
  }
  public set date_publication(value: Date) {
    this._date_publication = value;
  }

  public get prix(): number {
    return this._prix;
  }
  public set prix(value: number) {
    this._prix = value;
  }

}
