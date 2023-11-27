const Service = require("./service");
const assert = require("assert");
const { createSandbox } = require("sinon");
const sinon = createSandbox();
const mocks = {
    alderaan: require("../mocks/alderaan.json"),
    tatooine: require("../mocks/tatooine.json"),
};

const BASE_URL = 'https://swapi.dev/api/planets/';

(async () => {
    const service = new Service();
    const stub = sinon.stub(service, service.makeRequest.name);
    stub.withArgs(BASE_URL + 1).resolves(mocks.tatooine);
    stub.withArgs(BASE_URL + 2).resolves(mocks.alderaan);

    {
        const expect = {
            name: "Tatooine",
            surfaceWater: "1",
            appeardIn: 5,
        };

        const result = await service.getPlanet(1)
        assert.deepStrictEqual(result, expect)
    }
})();
