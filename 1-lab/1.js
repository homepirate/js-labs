function get_age_category(age){
    if (age < 0){
         throw new Error("Возраст не может быть отрицательным")
    }
    else if (age >= 0 && age <= 2) {
        return "младенец";
      } else if (age >= 3 && age <= 13) {
        return "ребенок";
      } else if (age >= 14 && age <= 19) {
        return "подросток";
      } else if (age >= 20 && age<= 65) {
        return "взрослый";
      } else {
        return "пожилой";
      }
    }


console.log(get_age_category(1))
console.log(get_age_category(20))
console.log(get_age_category(100))
console.log(get_age_category(-1))