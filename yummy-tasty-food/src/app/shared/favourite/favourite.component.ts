import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  // isFavorite =  false;
  // counter=0;
  @Input() likeCount: number = 0 ;
  @Input() isFav: boolean = false;
  

  selectFavorite(){
    this.isFav = !this.isFav;
    this.likeCount += this.isFav ? 1 : -1;
  }

}
