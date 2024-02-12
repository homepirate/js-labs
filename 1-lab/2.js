function rounding(num, accuracy){
    if (typeof num !== 'number' || typeof accuracy !== 'number') {
        throw new Error("Ошибка: num и accuracy должны быть числами");
    }

    if (accuracy > 15){
        accuracy = 15
    }
    // accuracy = (accuracy > 15) ? 15 : accuracy;
    var new_num = parseFloat(num.toFixed(accuracy))
    console.log(new_num)
}

rounding(3.1415926535897932384626433832795, 2)
rounding(3.1415926535897932384626433832795, 17)
rounding(10.5000000, 3)
rounding('ffff', 1)