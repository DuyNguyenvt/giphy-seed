import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/modules/home/services/home.service';

@Component({
  selector: 'app-favorite-giphies',
  templateUrl: './favorite-giphies.component.html',
  styleUrls: ['./favorite-giphies.component.scss'],
})
export class FavoriteGiphiesComponent implements OnInit {
  giphies$: Observable<any>;
  constructor(private homeService: HomeService) {
    this.giphies$ = this.homeService.favoriteGiphies;
  }

  ngOnInit(): void {}
  loadGiphy() {}
  showTool(event) {}
}
