const { CityRepository } =  require('../repo/city-repository')


class CityService {
    constructor() {
        this.CityRepository = new CityRepository();
    }

    createCity = async(data) =>{
        try{
            const city =  await this.CityRepository.createCity(data)
            return city
        }catch(error){
            console.log('Something went wrong at service layer!')
            throw {error};
        }
    }

 
    deleteCity = async(cityId) =>{
        try{
            const city =  await this.CityRepository.deleteCity(cityId)
        }catch(error){
            console.log('Something went wrong at service layer!')
            throw {error};
        }
    }


    updateCity = async(cityId, data) =>{
        try{
            const city =  await this.CityRepository.updateCity(data, cityId)
            return city;
        }catch(error){
            console.log('Something went wrong at service layer!')
            throw {error};
        }
    }


    getCity = async(cityId) =>{
        try{
            const city =  await this.CityRepository.updateCity(cityId)
            return city;
        }catch(error){
            console.log('Something went wrong at service layer!')
            throw {error};
        }
    }


}


module.exports = CityService;