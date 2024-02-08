import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  private itemInCart = new BehaviorSubject<number>(0);
  cartItems = this.itemInCart.asObservable();
  
  constructor() { 
    
  }
  addToCart(item: any) {
    this.itemInCart.next(item);
  }
}
