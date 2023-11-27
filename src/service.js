class Service {
    async makeRequest(url) {
        return (await fetch(url)).json()
    }

    async getPlanet(planetId) {
        const GET_PLANETS_URL = `https://swapi.dev/api/planets/${planetId}/`

        return this.makeRequest(GET_PLANETS_URL)
    }
}

module.exports = Service