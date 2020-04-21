import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeService } from 'src/app/modules/home/services/home.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {
  giphies$: Observable<any>;
  constructor(private homeService: HomeService) {
    this.giphies$ = this.homeService.searchGiphies;
  }

  ngOnInit(): void {
    this.homeService.fetchData({ offset: 0 });
  }

  loadGiphy() {
    this.homeService.fetchData({
      offset: this.homeService.pagination.value.offset + 20,
    });
  }
}
