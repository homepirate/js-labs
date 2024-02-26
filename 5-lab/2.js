class City{
    constructor(name, latitude, longitude){
        this.towm = name
        this.latitude = parseFloat(latitude).toFixed(2)
        this.longitude = parseFloat(longitude).toFixed(2)
    }
}


const array = ['Moscow | 55.7522 | 37.6156',
            'Beijing | 39.913818 | 116.363625'];

for (data of array){
    data_array = data.split(" | ")
    console.log(new City(data_array[0], data_array[1], data_array[2]))
}