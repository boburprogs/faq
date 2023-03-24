// const array = [2, 3, 4, 5, 6]

// function kvadrat() {
//     for (let i = 0; i < array.length; i++){
           
//     }
// }

// const numbers = [2, 3, 4, 5, 6]

// const mapFunc = numbers.map((item, i, arr)=>{
//     return item ** 2
// })
// console.log(mapFunc);

// let students = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           { name: 'Wick', id: 115, marks: 75 }
// ]


// students.map((item) => {
//     console.log(item.name.toUpperCase());
// })

const question = document.querySelector(".one-wrapp")
// const question = document.querySelector(".one-wrapp")


// const ans = document.querySelector(".answer")
const ans = document.querySelector(".answer")

let not = null


question.addEventListener("click", () => {
    ans.style.display = "block";
    question.addEventListener("click", () => {
        ans.style.display = "none"
    })
})





































