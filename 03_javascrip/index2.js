/*
자료형의 종류 
-string(문자열) , number(숫자) , boolean , null , undefined
-object(객체) , array( 배열)
*/
// 1. string
let myName = "allie"
let email = 'allie@naver.com'
console.log(myName)
console.log(email)

// 문자열, 변수를 동시에 써 보기
// console blxoor boldg busd toxioldold boldoggvi
console.log('내 이름은', myName)

let aaaa='내 이름은 ' + myName+'이고, 이메일은'+email+'입니다.'
let bbbb= `내 이름은  ${myName}이고, 이메일은 ${email}입니다`
console.log(aaaa)
console.log(bbbb)

// 2. number
 let number=123
 let opacity=0.7
 console.log(number)
 console.log(opacity)

 console.log('apple'-3) //NaN(Not a Number)

//  3. boolean
// true,false 둘 중의 하나의 값 (소문자)
let checked = true 
let isShow = false

console.log(checked)
console.log(isShow)

// 4. undefined 
// 값이 없는 상태 실수같은
let undef;
let obj={
    abc:123
}
console.log(undef)
console.log(obj.abc)
console.log(obj.efg)

// 5. null 빈 값 
// 의도적인 빈 값
let empty= null;
console.log(empty)

// 6. array
let fruits = ["orange","apple",'banana','mango']
let fruits2 = new Array("orange","apple",'banana','mango')

console.log(fruits[3])
console.log(fruits2[1])

let data = [1,true, null, 'string' , 100]
console.log(data[4])

//  2차원 배열

let korean=[['가', '갸', '거','겨'],
            ['나','냐','너','녀'],
            ['다', '댜','더','뎌']
        ]
        console.log(korean[2][0])

 const letters = [
            ["사", "스", "자", "크"],
            ["진", "안", "리", "이"],
            ["가", "수", "림", "나"],
            ["아", "으", "차", "운"],
        ];
 const nums = [
            [
                [1, 2, 3],
                [4, 5, 6],
            ],
            [
                [7, 8, 9],
                [10, 11, 12],
            ],
        ];

console.log(letters[3][0],letters[1][3],letters[0][1],letters[0][3],letters[2][2])

console.log(nums[1][0][1])

// 7.object type
// {} husnegt ashiglana, 
// 키:값 의 쌍으로 이루어져 있다
let cat ={
    name: '나비',
    age: 1,
    gender: 'F',
    isCute:true
}
console.log(cat.isCute)
cat.like =['tune','쥐']
console.log(cat)

// 접근하는 방법 2번째 : 대괄호 접근법!- 키 일므이 문자열이어야 함
console.log(cat['name'])
cat['parent']="초롱이"
console.log(cat)

// 자료형 확인 ! type of

console.log('"'+typeof 3 +'"',"isn't",'"'+typeof"hi"+'"',"data type.")
console.log('typeof 를 array 이나 null에 사용하변,','"'+typeof[1,2,3] +'"','결과를 얻을 수 있습니다')

console.log('----------------------------------------')
let und;
console.log(typeof "문자")
console.log(typeof 100)
console.log(typeof true)
console.log(typeof {})
console.log(typeof [true])
console.log(typeof null)
console.log(typeof und)
console.log(typeof Nan)
console.log(typeof function(){}
)

console.log(`${typeof 123} isn't ${typeof""} data type.`)
// " \ " " backslash 적으면 안에 있는 ' 를 문자열로 인식

//형변환
console.log('-----------------')
//1. ?? >> string
let str1=true
let str2=123
let str3=null
console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))
console.log(str1.toString())

//2. number
let n1=true
let n1_1=false
let n2='123'
let n3='123.5'
console.log(typeof Number(n1))
console.log(typeof Number(n1_1))
console.log(typeof Number(n2))
console.log(typeof Number(n3))
console.log(parseInt(n2))
console.log(parseInt(n3))
console.log(parseInt(3.14))

// let english=prompt('영어 점수를 입력해주새요')
// let math=prompt('수학접수를 입력하세요')

// english= Number(english)
// math= Number(math)

// let average=(english+math)/2
// console.log(average)

//변수
// 1. var - 재할당, 재선언 가능
var name = '홍길동'
name = 'gildong' //재할당 가능
var name= "성춘향" // 재선언 가능 
// 재선이 가능한 것이 장점같은 수는 있으나 
// 협업과 유지보수에 힘들다. 

//2. let -재할당 가능, 재선언 불가
let c; //선언과 초기화를 동시애 하지 않아도 됨 
console.log('------let--------')
console.log(c)
c = 5 
c = 10
c = 15
console.log(c)
// let=123 , 재선언 불가은 

//3. const- 재할당, 재선언 불가 , 값 초기화 미리 해야 합
//const b // 선언과 동시에 초기화되어야 한다 
const b = 3
//const b = 5 - 재선언 불가//
// b=5 - 재할당 불가 //

let q1 = 3
q1= q1-2
console.log(q1) 

let q2=10
q2 = q2+10
q2= q2-5
console.log(q2)
console.log('------------연산자--------')
/*

*연산자 
*대입연산자 = 
*비교연산자 == === != !== > >= < <=
*산술연산자 + - * / % **
*논리연산자 ! && ||

*/

//비교 연산자 
//결과 값은 true, false 다
console.log(1==1)  // 값이 같은지
console.log(1==2)  // 값이 같은지
console.log(1!=1)  // 값이 같지 않나요?
console.log(1!=2)  // 값이 같지 않나요? 
console.log(1=='1')  // 값이 같나요? 
console.log(1==='1')  // 값과 타입이 같나요?
console.log(1!=='1') // 값과 타입이 같지 않나요? 
console.log( '크기 비교')
console.log(2>1 )
console.log(2>=1)
console.log(2<1 )
console.log(2<=1)

// 산술연산자 
console.log(' 산술연산자')
console.log (1+2 )
console.log (1-2 )
console.log (1*2 )
console.log (1/2 )
console.log(8%5) // huwaahad uldeh uldegdel olohod
console.log( 2**5) // zereg 

//논리 연산자 
console.log(true)
console.log(false)
console.log(!true)
console.log(!false)
console.log(!!false)// false
console.log(true && true) // true
console.log(true && false) // false
console.log(false && false) // false
console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false) // false

console.log(!(2>1)) // false
console.log(2 > 1 && -2 <1) // true
console.log( (2>1 && 0>-2)|| 5<2 )// true

// ==연산자 이용
console.log('---------연산자 이용-------')
console.log('0'==false)
console.log('0'==0)
console.log(''==0)
console.log(''==false)
console.log(""=="0")
console.log(false==undefined)
console.log(false==null)
console.log('===')
console.log('0'===false)
console.log('0'===0)
console.log(''===0)
console.log(''===false)
console.log(""==="0")
console.log(false===undefined)
console.log(false===null)