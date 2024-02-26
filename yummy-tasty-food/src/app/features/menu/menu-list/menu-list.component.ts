import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, AfterViewInit {
  selectedmenu: any;
  @ViewChild('menucardRef') menucard!: MenuCardComponent;

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    // console.log(this.menucard.childdata)
    this. selectedmenu = this.cartDataService.selectedMenu;
  }
  ngAfterViewInit(){
    console.log(this.menucard.cartNum)
  }

}
