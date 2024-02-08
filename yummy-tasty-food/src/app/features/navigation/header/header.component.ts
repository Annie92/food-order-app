import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartNum: any;
  headerList = ['Yummy Tasty Food','Restaurants','Carts','Menu'];

  constructor(private cartdataService: CartDataService) { }

  ngOnInit(): void {
    this.cartdataService.cartItems.subscribe((cartnum)=>{
      console.log("Cart Items updated");
      this.cartNum = cartnum;
    })
  }

}
