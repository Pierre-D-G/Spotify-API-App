import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchStr: string;

  searchMusic() {
    console.log(this.searchStr);
  };
}
