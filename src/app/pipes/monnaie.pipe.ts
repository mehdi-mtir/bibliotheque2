import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monnaie'
})
export class MonnaiePipe implements PipeTransform {

  transform(value: number, monnaieAffichage : string): string {
    let affichage = ""
    if(monnaieAffichage == "$"){
      affichage = value + "$";
    }
    else if(monnaieAffichage == "€"){
      affichage = (value * 0.82) + "€";
    }
    else{
      affichage = (value * 0.75) + "£";
    }

    return affichage;
  }

}
