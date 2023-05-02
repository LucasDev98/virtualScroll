import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent {
    @ViewChild( CdkVirtualScrollViewport, {static:false} ) viewport!: CdkVirtualScrollViewport;
    items = Array(500).fill(0);

    irAlInicio() {
      this.viewport.scrollToIndex(  0 )
    }
    irAlMedio() {
      this.viewport.scrollToIndex(  this.items.length / 2)
    }
    irAlfinal() {
      console.log( this.items.length )
      this.viewport.scrollToIndex(  this.items.length )

    }


}
