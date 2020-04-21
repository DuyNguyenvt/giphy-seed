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

  fetchData(params) {
    const api = `http://api.giphy.com/v1/gifs/search?q='black+pink'&api_key=m78FKgk6mIvBbw3wR7zXTou9jubyEBme&limit=20&offset=${params.offset}`;
    fetch(api)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.searchGiphies.next([...this.searchGiphies.value, ...result.data]);
        this.pagination.next(result.pagination);
      });
  }

  getSearchGiphies() {
    return this.searchGiphies.asObservable();
  }
}
