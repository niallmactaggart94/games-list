import {OnInit, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GamesService} from '../shared/data-service/games/games.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.sass']
})
export class GamesDetailsComponent implements OnInit {
  game: any;
  loadingState = true;
  error: any;

  constructor(public service: GamesService,
              public route: ActivatedRoute) {
  }

  async ngOnInit() {
    await this.loadGameDetails();
  }

  async loadGameDetails() {
    const id = Number(this.getGameId());

    if (!id) {
      this.error = 'No game ID provided';
      this.loadingState = false;
      return;
    }

    try {
      const gamesList = await this.service.getGamesListData();
      this.game = _.find(gamesList, (game) => game.id === id);
    } catch (e) {
      this.error = _.get(e, 'message', 'Something has went wrong, please try again');
    } finally {
      this.loadingState = false;
    }
  }

  public getGameId = () => this.route.snapshot.queryParams.id || '';

}
