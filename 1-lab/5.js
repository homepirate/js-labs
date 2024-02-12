function check_year(year){
    return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? 'yes' : 'no' 
}



console.log(check_year(1984))
console.log(check_year(2003))
console.log(check_year(4))