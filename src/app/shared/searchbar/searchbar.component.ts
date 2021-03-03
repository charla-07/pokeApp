import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  
  @Output() value = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  activate(event){
    this.value.emit(event.srcElement.value);

    const val = event.srcElement.value;
    console.log(val);
  }


}
