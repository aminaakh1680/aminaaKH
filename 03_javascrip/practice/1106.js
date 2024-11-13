
let arr1=[]
for(i=1; i<=100; i++){
    arr1.push(i)
}

console.log("-----for문-----")
let sum=0
for(let i=0; i<arr1.length;i++){
    sum+=arr1[i]
}
console.log(sum)

console.log("-----for of 문-----")

let sum1=0
for(let number of arr1){
    sum1+=number
}
console.log(sum1)

console.log("-----for each 문-----")
let sum2=0
arr1.forEach(number=>{
    sum2+=number
})
console.log(sum2)

//-----------*--------------




let fruit1= ["사과","딸기", "파인애플"," 수박","참외","오렌지","자두","망고"];
let fruit2= ["수박","사과", "참외"," 오렌지","파이애플","망고"];

let same=[]
let different=[]

for(let fruit of fruit1){
    if(fruit2.includes(fruit)){
        same.push(fruit)
    }else{
        different.push(fruit)
    }
}
console.log(same)
console.log(different)

console.log(Math.floor(Math.random()*11))