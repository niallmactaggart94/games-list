import {OnInit, Component} from '@angular/core';
import {GamesService} from '../shared/data-service/games/games.service';
import {Game} from '../shared/interfaces/game.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.sass']
})
export class GamesListComponent implements OnInit {
  loadingState = true;
  error: string;
  gamesData: Game[];
  filteredData: Game[];
  filterModel = {
    name: '',
    consoles: {
      ps4: true,
      nintendo: true,
      pc: true,
      xbox: true
    }
  };

  consoleMapping = {
    ps4: 'Playstation 4',
    pc: 'PC',
    nintendo: 'Nintendo Switch',
    xbox: 'Xbox One'
  };

  constructor(public service: GamesService) {
  }

  async ngOnInit() {
    await this.loadGamesListData();
  }

  public async loadGamesListData() {
    try {
      this.gamesData = await this.service.getGamesListData();
      this.filteredData = this.gamesData;
    } catch (e) {
      this.error = _.get(e, 'message', 'Something has went wrong, please try again');
    } finally {
      this.loadingState = false;
    }

  }

  public filter() {
    let data = _.cloneDeep(this.gamesData);
    if (this.filterModel.name) {
      data = _.filter(data, (game) => game.title.toLowerCase().includes(this.filterModel.name.toLowerCase()));
    }

    this.filteredData = _.filter(data, (game) => {

      if (!game.platform) {
        return game;
      }

      const console = _.findKey(this.consoleMapping, (platform) => (platform.indexOf(game.platform) !== -1));
      return this.filterModel.consoles[console];
    });

  }

}
