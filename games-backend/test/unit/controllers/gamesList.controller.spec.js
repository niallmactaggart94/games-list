"use strict";

const httpMocks = require("node-mocks-http");
const ctrl = require("../../../app/controllers/gamesList/gamesList.controller");
let req, res;

beforeEach(() => {
    req = httpMocks.createRequest({
        params: {},
        body: {},
        headers: {}
    });

    res = httpMocks.createResponse();

    spyOn(res, "send");

});

afterEach(() => {
    jest.clearAllMocks();
});

describe("Controller: gamesList", function () {

    describe("Function: getData", () => {

        it("Should send the JSON response it gets appended with an ID", () => {

            //Arrange
            const fallGuys = {
                "id": 1,
                "title": "Fall Guys",
                "platform": "Playstation 4",
                "price": 10,
                "description": "Fall Guys: Ultimate Knockout is a platformer battle royale game developed by Mediatonic.",
                "released": "04/08/20",
                "category": ["Platformer", "Multiplayer"]
            }

            //Act
            ctrl.getData(req, res);

            //Assert
            expect(res.send).toHaveBeenCalled();
            expect(res.send.calls.allArgs()[0][0][0]).toEqual(fallGuys)
            expect(res._getStatusCode()).toEqual(200);
        });
    });


});
