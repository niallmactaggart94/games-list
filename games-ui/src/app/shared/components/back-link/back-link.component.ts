import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-back-link',
  templateUrl: './back-link.component.html',
  styleUrls: ['./back-link.component.sass']
})
export class BackLinkComponent  {

  constructor(private location: Location,
              public route: ActivatedRoute) {
  }

  back(event) {
    event.preventDefault();
    this.location.back();
  }

}
