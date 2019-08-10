import { Component } from '@angular/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  arr = [{id: 1, body: 'some text1'},
         {id: 2, body: 'some text2'},
         {id: 3, body: 'some text3'}]
  page = 1;
  
  move(direction){
    if(direction > 0 && Math.trunc(this.arr.length/(this.page*10)) && this.arr.length%(this.page*10))
      this.page++
    if(direction < 0 && this.page > 1)
      this.page--
  }

  removeItem(id: number){
    this.arr = this.arr.filter( it => it.id !== id)
    let i = 1
    this.arr = this.arr.map( it => { return{...it, id : i++} })
  }
  addItem(input){
    let currentId = this.arr.reduce((currentId, {id}) => currentId < id ? id : currentId, 0)
    this.arr.push({id: currentId + 1, body: input.value})
    input.value = ''
  }
}
