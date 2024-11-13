// console.log(window)
// console.log(document)
// // deerh doorh ijilhen 예네들한테 접근 하려면
// console.log($(window))
// console.log($(document))

//click(): 클릭했을 때 
// jQuery에서는 이벤트 이름으로 메서드가 존재함 
//요소.click(function(){}), 요소.hover(function(){},function(){}) 

// $('.p-msg').click(function(){
//     $('.p-msg').css('color','red')
// })

// $('.nums').click(function(){
//     // $('.num').css('color','blue')
//     $(this).css('color','green')
// })

// $('.nums').on('click',function(){
//     $(this).css('color','pink')
// })


//js 코드로 
// const nums= document.querySelectorAll('.num') 
// for (let i=0; i<nums.length, i++) {
//     // console.log(nums[i])
//     nums[i].addEventListener('click', function(){
//         this.style.color="blue"
//     })
// }

//============================================

//hover(): 마우스를 올렸을 때, 마우스를 떼었을 때 정의
$('.div-hover').hover(
    function(){
         $(this).addClass('hover')
    },
    function(){
    $(this).removeClass('hover')
    }
)

$(window).scroll(function(){
    console.log("scrolling....")
})

//keyboard event

// input.addEventListener('keydown',function(event){
//     // console.log(event)
    

//     // 방향키 아래,위,왼쪽 ,오른쪽
//     console.log(event.code)
//     console.log(event.key)
//     // console.log(event.keyCode)
//     if(event.code==="ArrowLeft"){
//         console.log("왼쪽 방향키 눌렸습니다")
//     }else if(event.code==="ArrowRight"){
//         console.log("오른쪽 방향키 눌렸습니다")
//     }else if(event.code==="ArrowUp"){
//         console.log("위쪽 방향키 눌렸습니다")
//     }else if(event.log==="ArrowDown"){
//         console.log("아래쪽 방향키 눌렸습니다")
//     }else{
//         console.log("방향키가 아닌 키보드 눌렸습니다")
//     }
//     })

$('.input-key').keydown(function(e){
    console.log(e.code)
    if(e.code==="ArrowLeft"){
                console.log("왼쪽 방향키 눌렸습니다")
            }else if(e.code==="ArrowRight"){
                console.log("오른쪽 방향키 눌렸습니다")
            }else if(e.code==="ArrowUp"){
                console.log("위쪽 방향키 눌렸습니다")
            }else if(e.log==="ArrowDown"){
                console.log("아래쪽 방향키 눌렸습니다")
            }else{
                console.log("방향키가 아닌 키보드 눌렸습니다")
            }
        
            })
   
$('#todo-form').submit(function(e){

    //기본동작 막기 (새로고침 방지)
    e.preventDefault()

    //input 태그에 작성한 글자 가져오기
    const inputValue=$('input[name="todo"]').val()
    //li 태그를 만듦과 동시에 form 아래의 ul 태그에 
$('.todos').append(`<li>${inputValue}</li>`)
    //input 초기화
    $('input[name="todo"]').val('')
})
