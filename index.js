const students = [
    {name: "Alice", age: 25, grade: "A"},
    {name: "Bob", age: 27},
    {name: "Charlie", age: 25}
]

// get new array with only the names of students
const names = students.map((student) => student.name)
console.log(names)

// Adding grade property to students array
const studentsWithGrades = students.map((student) => ({...student, grade: "A"}))
console.log(studentsWithGrades)



// Calculating BMI and adding ton each object
const people = [
    {name: "Alice", weight:60, height: 1.65},
    {name: "Bob", weight:70, height: 1.75},
    {name: "Charlie", weight:68, height: 1.8}

]

const peopleWithBMI = people.map((person) => ({...person, bmi:(person.weight / person.height ** 2).toFixed(2)}
))

console.log("People With BMI: ", peopleWithBMI)



const person = {name: "Jhon", age: "30", city: "New York"}
// console.log(Object.values(person))

const dataInUppercase = Object.values(person).map((value) => 
    value.toUpperCase())
console.log(dataInUppercase)


console.log(Object.keys(person))