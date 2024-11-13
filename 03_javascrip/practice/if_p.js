// let age = Number( prompt('나이를 입력해주세요'));

// if(age>=20){
//     console.log("성인")
//  }else if(age>=17){
//     console.log('고등학생')
//  }else if(age>=14){
//     console.log('중학생')
// }else if(age>=8){
//     console.log('초등학생')
// }else if(age>=0){
//         console.log('유아')
//  }else{
//     console.log(" 나이를 잘못 입력햇습니다")
//  }



// let now = new Date().getHours();
// (now >=0 && now <12)? console.log("오전") : console.log("오후")



// let num= Number(prompt('숫자를 입력해주세요'))
// for(let i=1 ; i< num; i++){
//     if(i%13==0 && i%2==0)
//         {console.log(i)}

// }


let sum=0
for(i=0; i<100; i++){
    if(i%5==0 || i%2==0){
     sum+=i
    }
}
console.log(sum)