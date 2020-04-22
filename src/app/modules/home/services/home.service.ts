import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

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
  defaultSearchKey: string = 'black pink';

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
}
