function getAgeType (age) {
    if (typeof age !== 'number') {
        return 'Возраст указан некоректно.'
    }
    
    if (age < 1 || age > 125) {
        return 'Такого возраста не может быть'
    }

    if (age < 18) {
        return 'Несовершеннолетний'
    }

    return 'Взрослый'
}

console.log(getAgeType(19))