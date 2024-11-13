const section = document.querySelector("section");
      const icecreams = [
        "내가 아인슈페너?!",
        "엄마는 외계인",
        "민트 초콜릿 칩",
        "뉴욕 치즈케이크",
        "아이스 초당옥수수",
        "초콜릿 무스",
        "체리쥬빌레",
        "뮤! 넌 내거야",
        "오레오 쿠키 앤 크림", ];

        for(i=1; i<=9; i++){

            let img = document.createElement('img')
            let h3 = document.createElement('h3')
            let div = document.createElement('div')
            let article = document.createElement('article')
            img.setAttribute("src",`./img/icecream${i}.png`)
            img.alt = `아이스크림${i}`
            img.classList.add('img-box')
            h3.innerText = `TOP ${i}`
            h3.classList.add('text-center')
            div.innerText = icecreams[i-1]
            div.classList.add('text-center')
            article.classList.add('article-box')
            article.append(img,h3,div)
            section.append(article)
     }
      