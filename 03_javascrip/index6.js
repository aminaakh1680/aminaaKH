// 문자열에서 사용하는 속성과 메소드 
//length
//toUpperCase , toLowerCase, trim , indexOf, slice
// replace, replaceAll, repeat , split 

let str1= "Strawberry Moon"
let str2= "   Strawberry Moon    "

// 문자열 indexing 
console.log(str1[0]+ str1[11])

//sonny 단어 만들기
console.log(str1[0]+str1[12]+str1[14]+str1[14]+str1[9])

console.log(str1.length)
console.log(str2.length)

/*메소드 사용해 보기*/
//trim , toUpperCase , toLowerCase
//문자열.method()의 형태로 사용

console.log(str1) 
console.log(str2) 
console.log(str2.trim()) 
console.log(str2.trim().length)

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

//indexOf, charAt, slice
let fruit = "applemango"
//indexOf: 내가 찾고 싶은 문자열의 인덱스번호 반환
console.log(fruit.indexOf("e"))
console.log(fruit.indexOf("a"))
console.log(fruit.indexOf("apple"))
console.log(fruit.indexOf("mango"))
//없는 문자열을 찾으려고하면 -1 반환
console.log(fruit.indexOf("z"))

console.log(fruit.charAt("0"))
console.log(fruit.charAt("8"))
console.log(fruit.charAt("10"))

console.log(fruit.slice(5)) //mango
console.log(fruit.slice(3,6)) //lem
console.log(fruit.slice(-1))// o
console.log(fruit.slice(-4))// ango

console.log(fruit)

//replace, replaceAll
let msg1= "Wow~ It is so amazing!!! Wow"
console.log(msg1.replace("Wow", "Hey~~~"))
console.log(msg1.replaceAll("o","OO"))

let date='2024.11.06'
//yyyy-mm-dd
date=date.replaceAll('.','-')
console.log(date)

let hello = "hello"
console.log(typeof hello)
let hello2= hello.split()
console.log(hello2)
hello2= hello.split("")
console.log(hello2)

hello2= hello.split('e') // useg bichheer tuhain usgiig ustgad 2 huwaana
console.log(hello2)

//2024 11 06
date=date.split('-')
console.log(date)

console.log("--------베열------------")

let arr1=[1,2,3,4,5]
let arr2=['quakka', 'rebbit', 'puppy','hamster']

arr1[5]=6
arr1[8]=8 // 끝의 번호를 알고 있다면 바로 입력 가능하나 모른다면 push 쓰기
console.log(arr1)
arr1=[1,2,3,4,5]
arr1.push(6)
arr1.push(7)
arr1.push(8)
console.log(arr1)

console.log(arr1.pop()) // 제거하는 값을 반환 , 실제 배열 변경
arr1.pop()
arr1.pop()
console.log(arr1)

arr2.unshift("cat")
console.log(arr2) 

console.log(arr2.shift())// 제거하는 값을 반환 실제 배열도 변경
console.log(arr2) 

//  배열.includes(요소) 배열에 요소가 있는지 없느지 확인
console.log(arr2.includes('cat'))
console.log(arr2.includes('quakka'))

arr1=[1,2,3,4,5]
console.log(arr1.length)
console.log(arr1.indexOf(4))

//reverse()
arr1.reverse() //기준 배열이 변경됩니다. 순서를 뒤집는다
console.log(arr1)

//join('') , 배열 > 문자열로 병합
console.log(str1)
str1 = arr1.join('')
console.log(str1) // join에 아무것도 안 쓰면 전달이 되지 않으면 배열 아늬 컴마까지 닽이 문자열로 반환됨

//for of, forEach 
let arr3= [1,5,3,4,5]
let alphabets = ['a', 'b', 'c','d','e','f']

// 기본 for문
for(let i=0; i< arr3.length; i++){
    console.log(arr3[i])
} 
for(let el of arr3){
    console.log(el)
}
//forEach( 익명함수)
//forEach(function(a[,b,c])) //b,c 없어도 됨
arr3.forEach(function(num,i,arr){
    console.log("요소",num)
    console.log("배열의 인덱스",i)
    console.log("arr3",arr)
    console.log("---------------")
})

arr3.forEach((el)=>{
console.log(el)
})

arr2= ["quakka", "rabbit", "puppy',hamster"]
//filter,map,find

// 매개변수로 들어가는 함수애 러톤값이 필수
console.log("------filter----")
// return 이후의 조건에 나족하는 됴소를 창아서 새로운 배령로 반환
let six=arr2.filter(function(el){
    return el.length===6

})
console.log(six)
console.log("----find-----")
let six2=arr2.find(function(word){
    return word.length ===6
})
console.log(six2)


console.log("----map----")
    let arr4 =[1,2,3,4,5]
    let multiArr=arr4.map(function(number){
        return number*3
    })




multiArr=arr4.map((number)=> number *3) // 한 줄일 경우 {} 없어도 되고, return 값도 포함되었다
console.log(multiArr)

//오브젝트 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};

for(let area in areaNum){
    console.log(area) // key > 문자열로 반환중
    //값에 접근하려면?
    console.log(areaNum["Jeju"])
}
