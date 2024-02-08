import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, AfterViewInit {

  @ViewChild('menucardRef') menucard!: MenuCardComponent;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.menucard.childdata)
  }
  ngAfterViewInit(){
    console.log(this.menucard.cartNum)
  }

}
