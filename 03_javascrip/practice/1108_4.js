let btn = document.querySelector('button')
      let h2 = document.querySelector('h2')
      let boddy = document.body
      
      
      btn.addEventListener('click', function(){
        let color1 = Math.floor(Math.random()*256)
        let color2 = Math.floor(Math.random()*256)
        let color3 = Math.floor(Math.random()*256)
        boddy.style.backgroundColor = `rgb(${color1},${color2},${color3})`
        h2.innerText = `rgb(${color1},${color2},${color3})`
      })