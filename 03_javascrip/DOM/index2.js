//1. 태그 내부 내용
// inner text
// textContent
// innerHTML
let div1= document.getElementById("div1")
div1.innerText="     여기는 <b>첫번째<b> 태그입니다.&hearts;     /" // 공백이 안 산다. 2칸 이상의 공백 문자 제거
console.log(div1.innerText)
div1.innerHTML="여기는 <b>첫번째<b> 태그입니다.&hearts;" // 코드 작동 된다
div1.textContent="    여기는 <b>첫번째<b> 태그입니다.&hearts;     /" // 공백이 살아있다. 코드 작동 안된다
console.log(div1.textContent)

/* 2. 속성에 접근 */
/*
-요소.속성명
-getAttribute(): 속성 값을 가져오기
-setaAttribute(): 속성값을 설정하기  
*/

let naver= document.getElementById('naver')
console.log(naver)

// naver.setAttribute(속성 이름, 바꿔쥴 속성 값)
naver.setAttribute("href","http://www.google.com")
console.log(naver.href)

console.log(naver.getAttribute("href"))


console.log(document.querySelector('#pooh').src)
document.querySelector('#pooh').alt='푸사진'

//3. CSS 변경 
//style 변경, class 변경
let h1=document.querySelector('h1')
let list=document.querySelectorAll('li')
// console.log(h1)
// console.log(list)

// 배경색을 분홍색, 글자색 횐색, 글씨크기 1.3rem 으로 바꾸기 
for(let el of list){
    // el.style.color="#fff"
    // el.style.backgroundColor="pink"
    // el.style.fontSize='1.3rem'    // 이렇게 style 변경할수 있고, 이 보다 많아지면 아래와 같이
    el.classList.add('friends')
}
h1.classList.add('add-h1')
console.log(h1.classList)
// h1.classList.remove('add-h1')
// h1.classList.toggle('add-h1') // add-h1 이 있으면 없애고, 없으면 더 해달라는 의미 
console.log(h1.classList.contains('add-h1'))
console.log(h1.classList.contains('add-h2'))
console.log(h1.classList)

//4. 부모 자식 형제 노드 찾기
let friends = document.getElementById('friends')
let tigger = document.querySelector('#tigger')

console.log('--자식 노드 접근')
console.log(friends.children)
console.log(friends.children[0])  // 배열 형테로 가지고 온다

console.log('---부모 노드 접근')
console.log(tigger.parentNode) // 배열 형테가 아니라 요소 자체를 가지고 온다 

console.log('---이전 형제 노드 접근')
console.log(tigger.previousElementSibling)  // 배열 형테가 아니라 요소 자체를 가지고 온다 


console.log('---다음 형제 노드 접근')
console.log(tigger.nextElementSibling)  // 배열 형테가 아니라 요소 자체를 가지고 온다

//5. 노드를 생성 , 추가 ,삭제
let container= document.querySelector('.container')

//요소 생성
let p = document.createElement('p') // hashiltand shineer uusgeh husetlei bgaa tag oruulah
p.innerText ='새로 추가된 p' // 글시 삽입하는 거다
p.style.fontWeight = '700'
p.style.background= 'red'
p.id='append-p'

//요소 추가
console.log(p)
container.append(p)  // 선택된 요소의 (container) 의 맨 뒤 자식요소로 추가됨

let p2 = document.createElement('p')
let p3 = document.createElement('p')

p2.innerText="p2 입니다"
p3.innerText="p3입니다"

p2.classList.add('p-2')
p3.classList.add('p-3')

// container.append(p2)
// container.appendChild(p3) 

container.append(p2,p3) //append n olniig ner dor uusgeh bolno,mun zvgeer ug oruulj ch bolno
container.appendChild(p2) // appendChild n zuwhun negiig uusgeh bolomjtou, mun zvgeer ug oruulj boldggv

//prepend(): 선택된 요소의 맨 앞 자식으로 추가 
//friends= document.querySelector('#friends')
// li 태그를 만들고 , '캉가', friends 클래스 추가 


let li= document.createElement('li')
li.textContent='킹가'
li.classList.add('friends')

friends.prepend(li)
console.log(h1)

//before()
let h3=document.createElement('h3')
h3.innerText='h3 태그'
h1.before(h3)
//after()
let h2=document.createElement('h2')
h2.innerText='h2 태그'
h1.after(h2)

//요소 삭제 >remove(), removeChild()
// let firstLi = document.querySelector('li')

// let ul=firstLi.parentElement

// firstLi.remove() //건택된 요소가 삭제 
// //삭제할요교.remove()

ul.removeChild(firstLi)
// //부모요소.removeChild(삭제할 자식 요소 )

const parentDiv=document.querySelector('.container')
const img =document.createElement('img')
const span =document.createElement('span')
const div =document.createElement('div')
span.innerText='이요르'
img.setAttribute('src', "/img/image/png")
img.alt="이요르 사진"

div.append(img, span)
parentDiv.append(div)
