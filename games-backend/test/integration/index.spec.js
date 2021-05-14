const app = require('../../app/index');
const request = require('supertest');

describe("Games List API", () => {

    describe("Route: GET", () => {

        it ("Should return the json list of games, with an ID appended onto each item", async done => {

            //Arrange
            const fallGuys = {
                "id": 1,
                "title": "Fall Guys",
                "platform": "Playstation 4",
                "price": 10,
                "description": "Fall Guys: Ultimate Knockout is a platformer battle royale game developed by Mediatonic.",
                "released": "04/08/20",
                "category": ["Platformer", "Multiplayer"]
            };

            //Act
            const response = await request(app).get("/gamesList").send();

            //Assert
            expect(response).toBeDefined();
            expect(response.status).toEqual(200);
            expect(response.body.length).toEqual(10);
            expect(response.body[0]).toEqual(fallGuys);
            done();

        });
    });

});