// for 문
/* for(변수 선언과 초기화; 조건식 ( 어디까지 감소, 증가할건지); 증감){
반복하고 싶은 실행코드 작성}
*/
//증감식 : i++, i=i+1, i+=1
for(let i=0;i<10;i++){
    console.log("안녕", i)
}
for(let i=0; i<10; i=i+2){
    console.log(`안녕 ${i}`)
}

//1~5 까지 출력하는 방법
for(let i=1; i<=5; i++){
console.log(i)
}

for(let i=1; i< 6; i++){
    console.log(i)
}

for(let i=0; i<5 ; i++){
    console.log(i+1)
}
//5부터 1까지 출력하는 
for(let i=5; i> 0; i--){
    console.log(i)
}
let fruits = ['apple','banana', 'orange', 'mango']

for(let i=0; i< fruits.length; i++){
    console.log(fruits [i])//0,1,2,3
}
//quiz!
//1~ n 까지 더하기
let n=11
let sum=0
for(let i=1; i<= n; i++){
    sum = sum + i
}
    console.log(sum)

let arr = [99,98,85,77,100,50]

let sum1=0
for(let i=0; i<arr.length; i++){
    sum2+=arr[i]
}
for(let sum2 of arr3){
    console.log(el)
}

//1인 이상 20 이하의 수 중에서 짝수만 더한 값 출력하기 

let sum3=0
for(let i=1; i<=20; i++){
if(i%2===0){
    sum3+=i
}
}
console.log(sum3)
let sum4=0
for(let i=0; i<=20; i=i+2){
sum4+=i
}
console.log(sum4)

let sum5=0 
//홀수의 합을 구해 보기

for(let i=0; i<10; i++){
    // if(i%2==1) sum5=sum5+i // sum5+=i gej towchilj bolno
    if(i%2===0)continue; // 다음반복으로 넘어가도록
sum5=sum5+i
}
console.log(sum5) // 0~10까지의 홀수 합 25 

// for(let i=0; i<5 ; i++){
//     console.log('--------------------------------')
//     console.log(i)
//     for(let j=0; j<5; j++){
//     console.log('j:',j)
//     }
// }

// for(let i=2; i<10; i++){
//     console.log(i+'단')
//     for(let j=1; j<10 ; j++){
//     console.log(i,'X',j,'=',i*j)
//     }
// }

//  while문
let n1=1
while(n1 <=5){
    console.log(n1)
    n1++
}
let n2=9
while(n2 >=5){
    console.log(n2)
    n2--
}

//while 문을 이용하여 10부터 1까지 홀수만 출력

let n3=1
while(n3 >=1){
    if(n3%2===1)
        console.log(n3)
    n3--
}

let a=0
while(true){
    console.log(a)
    a++
if(a>10){
    break// 조건을 기재하여 무한 뤂을 빠져나가게 해야 한다
}
}

let a2=0
while(confirm("계속 진행하시겠습니까?")){
    //확인 > true , 최소 >false
    a2 ++
    alert(`${a2}번째 alert 창`)
}