import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];
  get sorted(): Card[]{
    return this.cards.sort((a,b) => b.votes - a.votes);
  }
  onclick(f:HTMLInputElement,l:HTMLInputElement){
    console.log(f.value);
    console.log(l.value);
    const card = new Card(f.value,l.value,0);
    this.cards.push(card);
    console.log(this.cards);
    
    f.value = ''; 
    l.value = ''; 
    // alert(f);
  }
}
