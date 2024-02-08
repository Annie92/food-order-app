import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  selectedMenu = [{
    menuItems: [
      {
        name: 'Belgium chocolate',
        description: 'made with chocolate',
        price: '$10'
      },
      {
        name: 'Pizza',
        description: 'made with flour',
        price: '$20'
      }
    ],
  }]
  constructor() { }

  ngOnInit(): void {
  }
  onSelectMenu(e: any){
    console.log(e)
  }

}
