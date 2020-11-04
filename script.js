// строка для ветки main




// Задание 3
const userInput = prompt('Введите что-нибудь')
let reversText = ''

userInput.split('').reverse().map(i => reversText += i)
console.log(reversText)

// Задание 4
const randomNumber = Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10)
let output = randomNumber === '00' ? 100 : parseInt(randomNumber)
console.log(output)

// Задание 5
const arr5 = [3, 45, 'Al', 32, 78, '7']

const arrayInfo = arr =>
    console.log('Длина массива -', arr.length)
    arr5.map(i => console.log(i))

arrayInfo(arr5)


// Задание 6
const arrayOfThree = [3, 3, 3, 3, 3, 3, 3, 3, 3]
const arrayOfFive = [5, 5, '5', 5, 5, 5, 5]

const isArrayElementsEqual = arr =>
    arr.every(i => i === arr[0])

console.log(isArrayElementsEqual(arrayOfThree))
console.log(isArrayElementsEqual(arrayOfFive))

// Задание 7
const arr = [3, 3, 3, 4, 4, 4, 4, 0, 0, '0', '3', '4', null, Object, {}, [], ()=>{}]

const countEvenOddNumbers = arr => {
    let oddNumbers = 0
    let evenNumbers = 0
    let zero = 0
    arr.map(i => {
        if (i === 0) return zero++
        if (typeof i !== 'number') return null
        if (i%2 === 0) return evenNumbers++
        return oddNumbers++
    })
    console.log('Четных чисел - ', evenNumbers)
    console.log('Нечетных чисел - ', oddNumbers)
    console.log('Нулей - ', zero)
}

countEvenOddNumbers(arr)

// Задание 8
const strangeObject = new Map([
    ['head', 4],
    ['hands', 8],
    ['bestMeal', 'corn'],
    ['driversLicense', false],
    ['wheels', true],
    ['age', 107],
    ['superPower', 'sleep a lot']
])

strangeObject.forEach((v,k) => console.log(`Ключ - ${k}, значение - ${v}`))
