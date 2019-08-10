import { Component, Input, Output, EventEmitter } from '@angular/core';

interface item_interface {
  id: number
  body: string
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent {

  constructor() { }

  @Input() item: item_interface

  @Output() removeItem = new EventEmitter<number>()

  remove(){
    this.removeItem.emit(this.item.id);
  }


}
