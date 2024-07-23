// 1. Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).
// const age = prompt('Enter your age')
// if(age>0&&age<=2)
//     alert('You are an enfant')
// else if(age>2&&age<12)
//     alert('You are a child')
// else if(age<=12&&age<=18)
//     alert('You are a teenager')
// else if(age>=18&&age<=60)
//     alert('You are a grown')
// else if(age>60)
//     alert('You are a retiree')
// else(
//     alert('incorrect age')
// )


// 2. Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).
// const number = prompt('Enter one number from 0 till 9.')
// if(number==1)
//     alert('!')
// else if(number==2)
//     alert('@')
// else if(number==3)
//     alert('#')
// else if(number==4)
//     alert('$')
// else if(number==5)
//     alert('%')
// else if(number==6)
//     alert('^')
// else if(number==7)
//     alert('&')
// else if(number==8)
//     alert('*')
// else(
//     alert('incorrect number')
// )


// 3. Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.
// ?


// 4. Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.
// let year = prompt('Enter the year');
// if ((year % 400 === 0) || (year % 4 === 0) && year % 100 !== 0){
//     alert('This year is a leap year');
// }
// else{
//     alert('This year is a common year')
// }


// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.
// let amount = prompt ('Enter the amount in dollars')
// let currency = prompt ('Choose 1)EUR 2)AZN 3)UAN')
// if (currency == 1){
//     alert(amount * 0.92)
// }
// else if(currency == 2){
//     alert(amount * 1.70)
// }
// else if (currency == 3){
//     alert(amount * 7.31)
// }
// else('incorrect amount')


// 7. Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%. 
// let number = prompt ('Enter the value')
// if (number<=200) {
//     alert(number)
// }
// else if ((number>200) && (number<=300)) {
//     alert(number- (number * 0.03))
// }
// else if ((number>300) && (number<=500)) {
//     alert(number- ( number * 0.05))
// }
// else if (number>500) {
//     alert(number-(number * 0.07))
// }
// else (
//     alert('incorrect input')
// )


// 8. Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 
// let circumference = prompt ('Enter circumference of a circle')
// let perimeter = prompt ('Enter perimeter of a square')
// if (circumference / 3.14 <= perimeter / 4){
//     alert('The circle can fit inside the square')
// }
// else{
//     alert('The circle can not fit inside the square')
// }


// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов.
// let score = 0
// let answer1 = prompt('Who was the first President of USA? \na)Abraham Lincoln \nb)George Washington \nc)Thomas Jesfferson')
