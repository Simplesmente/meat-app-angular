import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

 
  @Output() add = new EventEmitter();
  
  @Input()
  menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }
}
