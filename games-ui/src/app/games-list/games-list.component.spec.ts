import {createServiceFactory} from '@ngneat/spectator';
import {ActivatedRoute, Router} from '@angular/router';
import {ElementRef} from '@angular/core';
import {Location} from '@angular/common';
import {GamesService} from '../shared/data-service/games/games.service';
import {GameDataObjectMother} from '../shared/data-service/games/object-mother';
import {GamesListComponent} from './games-list.component';
import {Game} from '../shared/interfaces/game.interface';

let autoMock: any;

const createService = createServiceFactory({
  service: GamesListComponent,
  mocks: [GamesService,
    ActivatedRoute,
    Router,
    ElementRef,
    Location]
});


function createSUT(): GamesListComponent {
  autoMock = createService();
  return autoMock.service;
}

describe('Game List Component', () => {

  describe('On init', () => {

    it('should call loadGamesListData', async () => {
      // Arrange
      const sut = createSUT();
      sut.loadGamesListData = jest.fn();

      // Act
      await sut.ngOnInit();

      // Assert
      expect(sut.loadGamesListData).toHaveBeenCalled();

    });

  });

  describe('When calling function: loadCaseData', () => {

    it('should get the game data from the service and render it', async () => {

      // Arrange
      const sut = createSUT();
      const serviceMock = autoMock.inject(GamesService);
      const games = GameDataObjectMother.getGameData().body;

      serviceMock.getGamesListData.and.returnValue(Promise.resolve(games));

      // Act
      await sut.loadGamesListData();

      // Assert
      expect(sut.gamesData.length).toEqual(3);

    });



    it ('should display an error if there is an error retrieving the data', async () => {

      // Arrange
      const sut = createSUT();
      const serviceMock = autoMock.inject(GamesService);

      serviceMock.getGamesListData.and.returnValue(Promise.reject('Failure'));

      // Act
      await sut.loadGamesListData();

      // Assert
      expect(sut.error).toEqual('Something has went wrong, please try again');


    });

  });

  describe('When calling function: filter', () => {

    it('Should check if there is a name present in the model, if there is it should filter it down - console selected', () => {

      // Arrange
      const sut = createSUT();
      sut.gamesData = GameDataObjectMother.getGameData().body;
      sut.filterModel.consoles.pc = false;
      sut.filterModel.consoles.xbox = true;
      sut.filterModel.name = 'Kerb';

      // Act
      sut.filter();

      // Assert
      expect(sut.filteredData.length).toEqual(1);
      expect(sut.filteredData[0].title).toEqual('Kerbal Space Program');

    });

    it('Should check if there is a name present in the model, if there is it should filter it down - wrong console selected', () => {

      // Arrange
      const sut = createSUT();
      sut.gamesData = GameDataObjectMother.getGameData().body;
      sut.filterModel.consoles.xbox = false;
      sut.filterModel.consoles.pc = true;

      sut.filterModel.name = 'Kerb';

      // Act
      sut.filter();

      // Assert
      expect(sut.filteredData.length).toEqual(0);

    });

    it('Should filter it based on console (no name selected)', () => {

      // Arrange
      const sut = createSUT();
      sut.gamesData = GameDataObjectMother.getGameData().body;
      sut.filterModel.consoles.xbox = false;
      sut.filterModel.consoles.pc = true;
      sut.filterModel.name = '';


      // Act
      sut.filter();

      // Assert
      expect(sut.filteredData.length).toEqual(2);

    });

    it('Should return only the console with no platform if nothing is selected', () => {

      // Arrange
      const sut = createSUT();
      sut.gamesData = GameDataObjectMother.getGameData().body;
      sut.filterModel.consoles.xbox = false;
      sut.filterModel.consoles.pc = false;
      sut.filterModel.name = '';


      // Act
      sut.filter();

      // Assert
      expect(sut.filteredData.length).toEqual(1);

    });
  });


});
