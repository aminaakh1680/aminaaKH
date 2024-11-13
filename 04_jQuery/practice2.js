let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

      function changeColor() {
        if($("div").hasClass("red")){
            $("div").switchClass("red", "orange")
       } else if($("div").hasClass("orange")){
            $("div").switchClass("orange", "yellow")
       } else if($("div").hasClass("yellow")){
            $("div").switchClass("yellow", "green")
       } else if($("div").hasClass("green")){
            $("div").switchClass("green", "blue")
       } else if($("div").hasClass("blue")){
            $("div").switchClass("blue", "purple")
       }else if($("div").hasClass("purple")){
        $("div").switchClass("purple", "red")
       }
    }
