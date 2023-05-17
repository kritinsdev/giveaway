const cities = [
    {
        "name": "Riga",
        "latlng": [56.9496, 24.1052],
        "value": "riga"
    },
    {
        "name": "Daugavpils",
        "latlng": [55.8833, 26.5333],
        "value": "daugavpils"
    },
    {
        "name": "Liepāja",
        "latlng": [56.5167, 21.0167],
        "value": "liepaja"
    },
    {
        "name": "Jelgava",
        "latlng": [56.6528, 23.7128],
        "value": "jelgava"
    },
    {
        "name": "Jūrmala",
        "latlng": [56.9606, 23.7703],
        "value": "jurmala"
    },
    {
        "name": "Ventspils",
        "latlng": [57.3894, 21.5606],
        "value": "ventspils"
    },
    {
        "name": "Valmiera",
        "latlng": [57.5361, 25.4247],
        "value": "valmiera"
    },
    {
        "name": "Jēkabpils",
        "latlng": [56.5, 25.85],
        "value": "jekabpils"
    },
    {
        "name": "Ogre",
        "latlng": [56.8167, 24.6167],
        "value": "ogre"
    },
    {
        "name": "Cēsis",
        "latlng": [57.3122, 25.275],
        "value": "cesis"
    }
]


const formattedCities = cities.map((city) => ({
    label: city.name,
    latlng: city.latlng,
}));

const useCities = () => {
    const getAll = () => formattedCities

    const getByValue = (value: string) => {
        return cities.find((item) => item.name.toLowerCase() === value.toLowerCase());
    }

    return {
        getAll,
        getByValue
    }
};

export default useCities;
