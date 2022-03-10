const { Op } = require("sequelize");
const { Country, Activity } = require("../../db");
const axios = require("axios");

const getApi = async () => {
  try {
    let countries = (await axios.get("https://restcountries.com/v3/all")).data;
    // let name = countries[0].name;
    countries = await Promise.all(
      countries.map((country) => {
        Country.findOrCreate({
          where: {
            id: country.cca3,
            name: country.name.common,
            flags: country.flags[1],
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : "Not found",
            subregion: country.subregion ? country.subregion : "Not found",
            area: country.area,
            population: country.population,
          },
        });
      })
    );
  } catch (error) {
    return error;
  }
};
//getApi();

const getAllCountries = async () => {
  
  try {
    const countries = await Country.findAll({
      attributes: [
        "id",
        "name",
        "flags",
        "continent",
        "population",
        "capital",
        "subregion",
        "area",
      ],
      include: Activity,
    });
    return countries;
  } catch (error) {
    return error
  }
};

async function getCountryByName(name) {
  try {
    const country = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: ["id", "name", "flags", "continent", "capital", "population"],
      include: Activity,
    });
    return country;
  } catch (error) {
    return error
  }
}

async function getCountries(req, res) {
  try {
  const { name } = req.query;
  let data;
    if (name) {
      data = await getCountryByName(name);
      // data.length > 0
      //   ? res.send({ message: "No se econt..." });
      res.send(data);
    } else {
      data = await getAllCountries();
      data.length > 0
        ? res.send(data)
        : res.status(404).send({ message: "No Existe!" });
    }
  } catch (error) {
    res.send(error);
  }
}

const getCountriesById = async (req, res) => {
  try {
  const { id } = req.params;
    let countryId = await Country.findByPk(id.toUpperCase(), {
      attributes: [
        "id",
        "name",
        "flags",
        "continent",
        "capital",
        "population",
        "subregion",
        "area",
      ],
      include: Activity,
    });
    countryId
      ? res.send(countryId)
      : res.status(404).send({ message: "No Existe!" });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getApi,
  getCountries,
  getCountriesById,
  getAllCountries,
  getCountryByName,
};
