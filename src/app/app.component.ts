import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: any = {
    value: '',
    mentions: [
      {
        display: 'Dave',
        id: 1,
        type: 'contact'
      },
      {
        display: 'Bob Ross',
        id: 2,
        type: 'contact'
      },
      {
        display: 'Carl',
        id: 3,
        type: 'contact'
      },
      {
        display: 'Sue',
        id: 4,
        type: 'contact'
      },
    ]
  };
  
}
