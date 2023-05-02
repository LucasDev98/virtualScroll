import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent {
  paises : any = [];
  constructor( private http : HttpClient ) {
    this.http.get('https://restcountries.com/v3.1/lang/spanish').subscribe( paises => {
      this.paises = paises;
      console.log( this.paises )
    })
  }


  moverPais( evento : CdkDragDrop<any> ) {
      moveItemInArray( this.paises, evento.previousIndex, evento.currentIndex )
  }
}
