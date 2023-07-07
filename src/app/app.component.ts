import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dollars-to-cents';

  dollar = ''
  cent = 0
  quarter = 0
  dime = 0
  nickel = 0
  penny = 0


  showValues(){

    this.cent = Number(this.formatarDollar(this.dollar))
    this.calculate()
  }

  calculate(){

    this.quarter = Math.floor(this.cent / 25);
    this.dime = Math.floor((this.cent % 25) / 10);
    this.nickel = Math.floor(((this.cent % 25) % 10) / 5);
    this.penny = Math.round((((this.cent % 25) % 10) % 5) / 1)
  }

  formatarDollar(dollar: string) {
    const indiceVirgula = dollar.toString().indexOf('.');

    if (indiceVirgula !== -1) {
      const numerosAposVirgula = dollar.toString().slice(indiceVirgula + 1);
      if (numerosAposVirgula.length === 1) {
        return dollar.toString().replace('.', '') + '0';
      } else if (numerosAposVirgula.length === 2) {
        return dollar.toString().replace('.', '');
      }
    }
    return dollar.toString() + '00';
  }

  clearAll(){
    this.dollar = ''
    this.cent = 0
    this.quarter = 0
    this.dime = 0
    this.nickel = 0
    this.penny = 0
  }

}

