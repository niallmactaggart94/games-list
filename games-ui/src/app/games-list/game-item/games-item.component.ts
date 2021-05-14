import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['../games-list.component.sass']
})
export class GamesItemComponent {

  @Input() GameItem: any;

  constructor(public route: ActivatedRoute) {
  }

}
