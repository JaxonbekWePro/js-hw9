function age(user_age){
    let user = +prompt('Сколько вам лет?')
    if(user_age <= 18){
        return  'Пропускаем'
    } else if(user_age === NaN || user <0){
        return 'Совсем чтоли'
    } else{
        return 'Иди учись'
    }
}
age()