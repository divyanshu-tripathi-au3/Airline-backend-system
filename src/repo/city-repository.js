const { City } = require('../models/index')

class CityRepository {

    createCity = async (name) => {
        try {
            const city = await City.create({ name });
            return city
        } catch (error) {
            console.log('Error While creating city!')
        }
    }


    deleteCity = async (cityId) => {
        try {
            await City.destroy({ where: { id: cityId } });
            
        } catch (error) {
            console.log('Error While deleting!')
        }
    }

}

module.exports = CityRepository;