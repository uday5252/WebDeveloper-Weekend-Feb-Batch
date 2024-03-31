// console.log("Welcome")

// var username = 'Raju'
// let age = 20
// const city = "Bangalore"

// console.log(username)
// console.log(age)
// console.log(city)

// Back ticks 
// console.log(`The name is ${username}, his age is ${age} and he lives in a city ${city}!`)

// var username = "Raju"
// username = "Ramu"

// console.log(username)

// let username = "Raju"
// username = "Ramu"

// console.log(username)

// const username = "Raju"
// username = "Ramu"

// console.log(username)


// Functions

// Function Declaration 

// function display()
// {
//     console.log("Hi")
    // console.log("Hello")
    // console.log("Welcome")
// }

// display()


// Function Expression 

// const display = function()
// {
//     console.log("Hi")
//     console.log("Hello")
//     console.log("Welcome")
// }

// display()

// wish()

// function wish()
// {
//     console.log("Good Evening!")
// }

// Hoisting
// It is a mechanism where all the functions created using function declaration is automatically
// moved to the top of the file.

// wish()

// const wish = function()
// {
//     console.log("Good Evening!")
// }


// function add1()
// {
//     let num1 = 10
//     let num2 = 20

//     console.log(num1 + num2)
// }

// add1()


// function add2()
// {
//     let num1 = 30
//     let num2 = 40

//     console.log(num1 + num2)
// }

// add2()



// 10 20, 30 40, 50 60, 70 80

// default value in a variable is undefined
// NaN(Not a Number) ==> invalid numbers

// function add(num1, num2, num3 = 0)//Parameters
// {
//     console.log(num1 + num2 + num3)
// }

// add(10, 20, 50)
// add(30, 40)
// add(50, 60)//Arguments

// I want a single parameter to store many arguments

// ... ==> rest operator

// function collect(...a)
// {
//     console.log(a)
// }

// collect(10, 20, 30, 40, 50, 60, 70)

// function collect(a, ...b)
// {
//     console.log(a)
//     console.log(b)
// }

// collect(10, 20, 30, 40, 50, 60, 70)

// function collect(...a, b)
// {
//     console.log(a)
//     console.log(b)
// }

// collect(10, 20, 30, 40, 50, 60, 70)

// Javascript Appn ===> Communication with another application(Ecommerce App)
// Will give all the profuct detaild 



// function add1()
// {
//     let num1 = 10
//     let num2 = 20

//     let result = num1 + num2
//     // console.log(result)
//     return result
// }

// const output = add1()

// console.log(output)



// const add = function(num1, num2)
// {
//     return num1 + num2
// }

// const result = add(100, 200)
// console.log(result)

// But in arrow function, return statement is optional

// const add = (num1, num2) => num1 + num2

// const result = add(100, 200)
// console.log(result)

// arrays --> []

// store the names of 10 students 

// Will have position number 

// const names = [ "Raju", "Ramu", "John", "Mary" ]
// console.log(names[2])

// WAP to create an array that stores 5 numbers and also multiply each and every number
// by 10 

// let numbers = [ 1000, 2000, 3000, 4000, 5000]

// numbers[0] * 10
// numbers[1] * 10

// We can use forEach()

// Whenever we want to perform some operation on each and every element present in the array
// then we will use forEach()

// function exp | arrow fn

// let numbers = [ 1000, 2000, 3000, 4000, 5000, 6000, 7000 ]

// numbers.forEach((a, b, c, d)=>
// {
//     console.log(a * 10)
// })

// map() => Input array elements count ===== output array elements count

// let numbers = [ 1000, 2000, 3000, 4000, 5000, 6000, 7000 ]

// const result = numbers.map((a, b, c)=>
// {
//     if(a > 3000)
//     {
//         return a
//     }
// })

// console.log(result)

// filter()

// let numbers = [ 1000, 2000, 3000, 4000, 5000, 6000, 7000 ]

// const result = numbers.filter((a, b, c)=>
// {
//     if(a > 3000)
//     {
//         return a
//     }
// })

// console.log(result)


// reduce()

// Array contains 10, 100, 3000 ==> 1 element

// WAP to add all the elements present in an array 

// let numbers = [ 1000, 2000, 3000, 4000, 5000, 6000, 7000 ]

// a = 28000
// b = 

// const result = numbers.reduce(function(accumulator, currentValue)
// {
//     return accumulator + currentValue
// })

// console.log(result)

// let numbers = [ 1000, 2000, 3000, 4000, 5000, 6000, 7000 ]

// const result = numbers.every((a, b, c)=>
// {
//     if(a > 500)
//     {
//         return a
//     }
// })

// console.log(result)

// let numbers = [ 1000, 2000, 3000, 4000, 5000, 6000, 7000 ]

// const result = numbers.some((a, b, c)=>
// {
//     if(a > 30000)
//     {
//         return a
//     }
// })

// console.log(result)

// Objects(will store the data in the form of key: value pairs) --> {}

// Fitness Data 

// const fitnessData = [ "stepsTaken", 20000, "caloriesBurned", 1000, "heartBeat", 60 ]


// const fitnessData = {
//     stepsTaken: 20000,
//     caloriesBurned: 1000,
//     heartBeat: 60
// }

// console.log(fitnessData.stepsTaken)
// console.log(fitnessData.caloriesBurned)
// console.log(fitnessData.heartBeat)



// Array of Objects

// const questions = [
//     {
//         title: "What is 10 + 20?",
//         A: 100,
//         B: 30,
//         C: 40,
//         D: 70
//     },
//     {
//         title: "What is the use of HTML",
//         A: "To develop website",
//         B: "To develop games",
//         C: "To style a website",
//         D: "All the above"
//     }
// ]


const questions = [
    {
        title: "What is the capital of France?",
        A: "Paris",
        B: "London",
        C: "Berlin",
        D: "Rome",
        correctAnswer: "A" // Paris
    },
    {
        title: "Who wrote 'Romeo and Juliet'?",
        A: "William Shakespeare",
        B: "Charles Dickens",
        C: "Jane Austen",
        D: "Mark Twain",
        correctAnswer: "A" // William Shakespeare
    },
    {
        title: "What is the chemical symbol for water?",
        A: "H2O",
        B: "CO2",
        C: "NaCl",
        D: "O2",
        correctAnswer: "A" // H2O
    },
    {
        title: "Which planet is known as the Red Planet?",
        A: "Mars",
        B: "Jupiter",
        C: "Venus",
        D: "Mercury",
        correctAnswer: "A" // Mars
    },
    {
        title: "Who painted the Mona Lisa?",
        A: "Leonardo da Vinci",
        B: "Pablo Picasso",
        C: "Vincent van Gogh",
        D: "Michelangelo",
        correctAnswer: "A" // Leonardo da Vinci
    }
]

// {
//     title: "What is the capital of France?",
//     A: "Paris",
//     B: "London",
//     C: "Berlin",
//     D: "Rome",
//     correctAnswer: "A" // Paris
// }

// target that h1

const myh1 = document.querySelector("h1")//<h1></h1>

const firstButton = document.querySelector("#first")
const secondButton = document.querySelector("#second")
const thirdButton = document.querySelector("#third")
const fourthButton = document.querySelector("#fourth")
const continueButton = document.querySelector("#continue")
const submitButton = document.querySelector("#submit")

function loadQuestions(info)
{
    myh1.textContent = info.title
    firstButton.textContent = info.A
    secondButton.textContent = info.B
    thirdButton.textContent = info.C
    fourthButton.textContent = info.D
}

loadQuestions(questions[0])

let questionIndex = 1


// We need to listen to click event/action on Continue button(addEventListener())
continueButton.addEventListener("click", function()
{
    loadQuestions(questions[questionIndex])
    questionIndex++

    if(questionIndex > 4)
    {
        //Logic to display submit button(remove that hidden)
        continueButton.hidden = true
        submitButton.hidden = false
    }
})

// We need to write the logic where once we reach the last question, instead of continue button
// we need to display submit button

// When question index is 4, then it means we have reached last question






