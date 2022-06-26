//JS.  HW_2
//2я домашка по JS со звездочками:



//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1


a = 2
b = 1

while (b <= 10){
    console.log("2^" + b + " =", Math.pow(a,b))
    b++
}



//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2


const exp = function(b){
    if(typeof b == 'number'){
        if(b >= 1 && b <= 10) {
        console.log("2^" + b + " =", Math.pow(2,b))
        }else{
        console.log('enter the correct number')
        }
    }else {console.log('enter number value')
}
}
exp(5)
exp(11)
exp(-4)
exp('grep')


//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//Пример в консоли:
//:)
//:):)
//:):):) 
//:):):):)
//:):):):):)



let c = ":)"

for (var i = 0; i < 5; i++){
    console.log(c)
    c = c + ":)"
}



c = 1
for (var i = 1; i < 6; i++){
    console.log(':)'.repeat(c))
    c ++
}




//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)



function printSmile(stroka, numberOfRows){
    if(numberOfRows > 0){
        for (var i = 1; i <= numberOfRows; i++){
            с = i
    console.log(stroka.repeat(с))
            с++
        }
    }else{
        console.log("enter the correct number")
    }
}

printSmile("smile", 7)




//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв

//Проверки: 'case', 'Case', 'Check-list'








//4**. Написать функцию, которая проверяет, является ли слово палиндромом
//e.g. function isPalindrom(word)

//Проверки: 'abba', 'Abba'