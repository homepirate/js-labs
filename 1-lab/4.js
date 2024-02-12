
// people_count = 30
// category = "Students"
// day = "Sunday"

people_count = 40
category = "Regular"
day = "Saturday"



table = [
    [8.45, 9.80, 10.46],
    [10.90, 15.60, 16],
    [15, 20, 22.50]
]

days = ["Friday", "Saturday", "Sunday"]
categorys = ["Students","Corporate" ,"Regular"]


day_index = days.indexOf(day)
category_index = categorys.indexOf(category)




if (people_count >= 30 && category == "Students"){
    total_price = people_count * table[category_index][day_index]
    total_price *= 0.85
}

else if (category == "Corporate" && people_count >= 10){
    total_price = (people_count - 10) * table[category_index][day_index]
}

else if (category == "Regular" && people_count >= 10 && people_count <= 20){
    total_price = people_count * table[category_index][day_index]
    total_price *= 0.95
}
else{
    total_price = people_count * table[category_index][day_index]
}


console.log(`Total price: ${total_price.toFixed(2)}`)