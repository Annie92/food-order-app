import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

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
        src: 'belgium_chocolate_cake.webp',
        description: 'made with chocolate',
        price: '$10',
        likesCount: 10,
        isFavorite: false
      },
      {
        name: 'Pizza',
        src: 'pizza.jpg',
        description: 'made with flour',
        price: '$20',
        likesCount: 2,
        isFavorite: true
      }
    ],
  }]
  constructor(private cartDataSer: CartDataService) { }

  ngOnInit(): void {
    this.cartDataSer.selectedMenu = this.selectedMenu;
  }
  onSelectMenu(e: any){
    console.log(e)
  }

}
