const Service = require('./service')
const assert = require('assert')

;(async () => {
    {
        const service = new Service()
        const planetOne = await service.getPlanet(2)

        console.log(JSON.stringify(planetOne))
        
    }
})()