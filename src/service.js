class Service {
    async makeRequest(url) {
        return (await fetch(url)).json()
    }

    async getPlanet(planetId) {
        const GET_PLANETS_URL = `https://swapi.dev/api/planets/${planetId}`
        const data = await this.makeRequest(GET_PLANETS_URL);
        
        return {
            name: data.name,
            surfaceWater: data.surface_water,
            appeardIn: data.films.length,
        };
    }
}

module.exports = Service