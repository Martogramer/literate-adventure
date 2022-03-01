const {Country, Activity} = require('../../db')

const getActivitiesByName = (req, res) =>{
    Activity.findAll({
        attributes: ["name", "difficulty", "duration", "seasson"],
        include: [{ model: Country, attributes: ["name"] }],
    })
    .then((activities)=>{
        res.status(200).send(activities)
    })
    .catch((error)=>{res.status(404).send(error)})
}

const postActivity=async(req, res)=>{
    const{name, difficulty, duration, seasson, countries} = req.body
    try{
        const newActivity=await Activity.create({
            name,
            difficulty,
            duration,
            seasson,
        })
        countries.forEach(async(country)=>{
            const countryActivity=await Country.findone({
                where: {
                    name: country,
                },
            })
            await newActivity.addCountry(countryActivity)
        })
        res.status(200).send({ message: "Se agrego correctamente" })
    }catch(error){res.status(404).send(error)}
};

module.exports = {
    getActivitiesByName,
    postActivity
}