//JS.  HW_2
//2я домашка по JS со звездочками:



//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1


a = 2
b = 1

while (b <= 10){
    console.log("2^" + b + " =", Math.pow(a,b))
    b++
}



for (i = 1; i <= 10; i++){
    console.log(Math.pow(2, i))             
}



for (i = 1; i <= 10; i++){
    console.log(2 ** i)             // **  возводит 2 в степень i
}




//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2


function st (x){
    console.log(Math.pow(2, x))            
}

st(15)





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



b = 1
for (var i = 1; i < 6; i++){
    console.log(':)'.repeat(b))
    b ++
}



for(i=1; i<=5; i++){                        
    a = `:)`
    console.log(a.repeat(i))
}


let result = ''
let smile = ':)'
for(i=1; i<=5; i++){                       
        console.log(result += smile)            
    }

    

//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)



// function printSmile(stroka, numberOfRows){
//     for(i=1; i<=numberOfRows; i++){
//         console.log(stroka.repeat(i))
//     }
// }

// printSmile("hello ", 3)


// let result = ''
// function printSmile(stroka, numberOfRows){
//     for(i=1; i<=numberOfRows; i++){
//         result = result + stroka
//         console.log(result)
//     }
// }

// printSmile(':)', 5)


// let result = ''
// function printSmile(stroka, numberOfRows){
//     for(i=1; i<=numberOfRows; i++){
//         console.log(result += stroka)
//     }
// }

// printSmile(':)', 11)


// function printSmile(stroka, numberOfRows){
//     if(numberOfRows > 0){
//         for (var i = 1; i <= numberOfRows; i++){
//             с = i
//     console.log(stroka.repeat(с))
//             с++
//         }
//     }else{
//         console.log("enter the correct number")
//     }
// }

// printSmile("smile ", 7)




//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв

//Проверки: 'case', 'Case', 'Check-list'




function getWordStructure(word){

    const vowels = 'aeiouy'.split('')                    
    const consonants = 'qwrtpsdfghjklzxcvbnm'.split('')

    let vowelsCount = 0
    let consonantsCount = 0                                 

    for(const char of word.toLowerCase()){       
        if(vowels.includes(char)) vowelsCount++   
        else if (consonants.includes(char)) consonantsCount++
    }
    console.log(`в слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
}

getWordStructure('Check-list')




function getWordStructure2(word){
    console.log(`в слове ${word} содержится ${(word.match(/[aeiouy]/gi)).length} гласных и ${(word.match(/[wrtpsdfghjklzxcvbnm]/gi)).length} согласных`)
}

getWordStructure2('Case')




function getWordStructure3(word){
    console.log(`в слове ${word} содержится 
    ${(word.match(/[aeiouy]/gi)) ? (word.match(/[aeiouy]/gi)).length : 0 } 
    гласных и 
    ${(word.match(/[wrtpsdfghjklzxcvbnm]/gi)) ? (word.match(/[wrtpsdfghjklzxcvbnm]/gi)).length : 0} согласных букв`)
}

getWordStructure3('case')




//4**. Написать функцию, которая проверяет, является ли слово палиндромом
//e.g. function isPalindrom(word)

//Проверки: 'abba', 'Abba'



function isPalindrom(word){
    word = word.toLowerCase()
    for(let i=0, j=word.length-1; i<word.length, j>=0; i++, j--){
        if(word[i] !== word[j]){
            return false
        }
    }
    return true
}

console.log(isPalindrom('Aaddaa'))


function isPalindrom2(word){
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrom2('Aaaa'))


function isPalindrom3(word){
    word = word.toLowerCase()
    for(i=0; i<=word.length/2; i++){        
        if(word[i] !== word[word.length-1-i])   
        return false
    }
    return true
}

console.log(isPalindrom3('aSsa'))