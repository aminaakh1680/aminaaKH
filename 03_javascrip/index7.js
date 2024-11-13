//1. Date 객체
let now=new Date()
console.log(now)
console.log(new Date("September 30, 1990 13:00:00"))

// 1970.01.01 00:00:00 초 이후로 몇 초나 지났는디 알고 싶다면 다음(영국 기준):
console.log(new Date(6000000))
console.log(new Date(0))
console.log(new Date(2010,2,2))
console.log(new Date(2010,2,2,18,35,50))

console.log(now.getFullYear(),"년")
console.log(now.getMonth(),"월") // (0 ~ 11 )
console.log(now.getDate(),'일') // (1~)
console.log(now.getHours(),'시') // 0~23 
console.log(now.getMinutes(),'분') // 0~59
console.log(now.getSeconds(),'분') // 0~59
console.log(now.getMilliseconds(),'밀리초') // 0~999
console.log(now.getDay(), '요일') // 0~6 (일~ 토)

//조건문을 사용해서 오늘이 주말인지 평일인지 출력하는걸 작성
let now1= new Date()
if(now1.getDay()===0 || now1.getDay()===6){
console.log("오늘은 주말입니다")    
}else {
    console.log("오늘은 평일입니다")
}

const checkDay= now.getDay()===0 || now.getDay()===6?'주말': "평일"
console.log(checkDay) 

//2. Math 객체
console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2) //루트 2값

console.log(Math.min(50,10,2,3,4,0,-5)) // 최소값
console.log(Math.max(50,10,2,3,4,0,-5)) // 최대값
console.log(Math.random())  // 0<= x <1 
console.log(Math.round(5.3)) // 소수 > 정수로 반올림 buhel bolgoh
console.log(Math.floor(5.3)) // 소수 > 정수로 버림  butarhaig hayg
console.log(Math.ceil(5.3)) // 소수 > 정수로 올림 butarhaig neg negj bolgon buhel bolgoh

//Math.random 응용!
// 0~9 까지의 소수가 아닌 난수
// 0<= x <1
console.log('난수 1:',Math.floor(Math.random()*10))

// 1~10까지의 자연수 난수 
console.log('난수2:',Math.floor(Math.random()*10)+1)

//20~22 
// 0 <= x <3
console.log('난수3:',Math.floor(Math.random()*3)+20)

console.log("-------------method--------")

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
// object의 key값만 가져와서 배열로 반환
let key= Object.keys(areaNum)
// object의 value 만 가져와서 배열로 반환
let value= Object.values(areaNum)
console.log(key)
console.log(value)