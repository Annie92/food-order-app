import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  cartNum = 0;
  childdata = 'hey'

  @Input() menuItem:any;
  @Output() selectMenu = new EventEmitter();

  constructor(private cartdataService: CartDataService) { }

  ngOnInit(): void {
  }

  addToCart(item: any){
    this.cartNum++;
    this.selectMenu.emit(item);
    this.cartdataService.addToCart(this.cartNum);
  }

}
