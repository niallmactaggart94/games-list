import {createServiceFactory} from '@ngneat/spectator';
import {ActivatedRoute, Router} from '@angular/router';
import {ElementRef} from '@angular/core';
import {Location} from '@angular/common';
import {GamesDetailsComponent} from './games-detail.component';
import {GamesService} from '../shared/data-service/games/games.service';
import {GameDataObjectMother} from '../shared/data-service/games/object-mother';

let autoMock: any;

const createService = createServiceFactory({
  service: GamesDetailsComponent,
  mocks: [GamesService,
    ActivatedRoute,
    Router,
    ElementRef,
    Location]
});


function createSUT(): GamesDetailsComponent {
  autoMock = createService();
  return autoMock.service;
}

describe('Game Detail Component', () => {

  describe('On init', () => {

    it('should call loadGameDetails', async () => {
      // Arrange
      const sut = createSUT();
      sut.loadGameDetails = jest.fn();

      // Act
      await sut.ngOnInit();

      // Assert
      expect(sut.loadGameDetails).toHaveBeenCalled();

    });

  });

  describe('When calling function: getRouteId', () => {

    it('should return the game id, when it exists', async () => {

      // Arrange
      const sut = createSUT();
      const routeMock: any = autoMock.inject(ActivatedRoute);
      routeMock.snapshot = {queryParams: {id: '1'}};

      // Act
      const result = await sut.getGameId();

      // Assert
      expect(result).toEqual('1');
    });

    it('should return the empty string , when the id is undefined or empty', async () => {
      // Arrange
      const sut = createSUT();
      const routeMock: any = autoMock.inject(ActivatedRoute);
      routeMock.snapshot = {queryParams: {id: undefined}};

      // Act
      const result = await sut.getGameId();

      // Assert
      expect(result).toEqual('');
    });

  });

  describe('When calling function: loadCaseData', () => {

    it('should set an error if no ID is passed in', async () => {

      // Arrange
      const sut = createSUT();
      sut.getGameId = jest.fn().mockImplementationOnce(() => '');

      // Act
      await sut.loadGameDetails();

      // Assert
      expect(sut.error).toEqual('No game ID provided');

    });

    it('should get the game data from the service and render it', async () => {

      // Arrange
      const sut = createSUT();
      const serviceMock = autoMock.inject(GamesService);
      const games = GameDataObjectMother.getGameData().body;

      sut.getGameId = jest.fn().mockImplementationOnce(() => '1');
      serviceMock.getGamesListData.and.returnValue(Promise.resolve(games));

      // Act
      await sut.loadGameDetails();

      // Assert
      expect(sut.game.title).toEqual('Kerbal Space Program');

    });



    it ('should display an error if there is an error retrieving the data', async () => {

      // Arrange
      const sut = createSUT();
      const serviceMock = autoMock.inject(GamesService);

      sut.getGameId = jest.fn().mockImplementationOnce(() => '12');
      serviceMock.getGamesListData.and.returnValue(Promise.reject('Failure'));

      // Act
      await sut.loadGameDetails();

      // Assert
      expect(sut.error).toEqual('Something has went wrong, please try again');


    });

  });


});
