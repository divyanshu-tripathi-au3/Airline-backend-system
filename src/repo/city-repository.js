const { City } = require('../models/index')

class CityRepository {

     createCity = async (name) => {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log('Error While creating city!')
            throw {error};
        }
    }


    deleteCity = async (cityId) => {
        try {
            await City.destroy({ where: { id: cityId } });
            
        } catch (error) {
            console.log('Error While deleting!')
            throw {error};
        }
    }


    getCity = async (cityId) => {
        try {
            let city = await City.findByPk(cityId)  
            if(city) return  city;    
             
        } catch (error) {
            console.log('Error while fetching')
            throw {error};
        }
    }


    updateCity = async(data, cityId) =>{
        try{
            let city = await City.update( { ...data },{ where: {id: cityId}})
            return city;
        }catch (error) {
            console.log('Error while updating')
            throw {error};
        }
    }




}

module.exports = CityRepository;