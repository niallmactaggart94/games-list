import {Injectable} from '@angular/core';
import {HttpGetTask} from '../../../shared/http-tasks/http-get.task';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class GamesService {
  url: string;

  constructor(public httpGet: HttpGetTask) {
  }

  async getGamesListData(): Promise<any> {

    this.url = environment.gamesBackendUrl + 'gamesList';
    const options = {
      observe: 'response'
    };

    try {
      const response = await this.httpGet.get(this.url, options);
      return response.body;
    } catch (err) {
      throw err;
    }
  }

}
