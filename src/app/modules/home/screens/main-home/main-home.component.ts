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
  favoriteGiphies$: Observable<any>;
  constructor(private homeService: HomeService) {
    this.giphies$ = this.homeService.searchGiphies;
    this.favoriteGiphies$ = this.homeService.favoriteGiphies;
  }

  ngOnInit(): void {
    this.homeService.fetchData({ offset: 0 });
  }

  loadGiphy(): void {
    this.homeService.fetchData({
      offset: this.homeService.pagination.value.offset + 20,
    });
  }

  showTool(event) {
    event.stopPropagation();
    const theToolEl = event.target.nextElementSibling;
    theToolEl.classList.toggle('active');

    document.querySelectorAll('.gp-card--tool').forEach((element) => {
      if (!element.contains(theToolEl)) {
        element.classList.remove('active');
      }
    });
  }

  addFavorite(newGiphy) {
    this.homeService.addFavoriteGiphy(newGiphy);
  }

  checkIsFavor(theGiphy) {
    let isFavor = undefined;
    this.favoriteGiphies$.subscribe((allItems) => {
      isFavor = !!_.find(allItems, (item) => item.id === theGiphy.id);
    });
    return !isFavor;
  }
}
