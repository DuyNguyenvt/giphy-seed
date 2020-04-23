import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { SnacksService } from 'src/app/modules/snack/services/snacks.service';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  searchGiphies: BehaviorSubject<any> = new BehaviorSubject([]);
  pagination: BehaviorSubject<any> = new BehaviorSubject({
    total_count: 0,
    count: 0,
    offset: 0,
  });
  favoriteGiphies: BehaviorSubject<any> = new BehaviorSubject([]);
  defaultSearchKey: string = 'black pink';

  constructor(private snacksService: SnacksService) {}

  fetchData(params) {
    const api = `https://api.giphy.com/v1/gifs/search?q=${
      params.keyword || this.defaultSearchKey
    }&api_key=m78FKgk6mIvBbw3wR7zXTou9jubyEBme&limit=20&offset=${
      params.offset
    }`;

    let procResult = [];
    fetch(api)
      .then((response) => response.json())
      .then((result) => {
        if (params.keyword) {
          procResult = result.data;
          this.defaultSearchKey = params.keyword;
        } else {
          procResult = [...this.searchGiphies.value, ...result.data];
        }
        this.searchGiphies.next(procResult);
        this.pagination.next(result.pagination);
      });
  }

  getSearchGiphies() {
    return this.searchGiphies.asObservable();
  }

  addFavoriteGiphy(newGiphy) {
    if (
      !_.find(
        this.favoriteGiphies.value,
        (oneGiphy) => oneGiphy.id === newGiphy.id
      )
    ) {
      this.favoriteGiphies.next([...this.favoriteGiphies.value, newGiphy]);
      this.snacksService.openSnackDone('Done', 'Undo', () => {
        this.favoriteGiphies.next(
          this.favoriteGiphies.value.filter((item) => item.id !== newGiphy.id)
        );
      });
    }
  }
}
