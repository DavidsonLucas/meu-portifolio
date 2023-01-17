      var quadrad = document.querySelector(".quadrado1")
      var buton = document.querySelector(".color") 
      var span = document.querySelector(".span")
   
      function ramdom(number){
       return Math.floor(Math.random()*(number + 1))
      }
   
      buton.onclick = function(){
       var cores =  'rgb(' + ramdom(255) + ',' + ramdom(255)  + ',' + ramdom(255) +')';
       document.body.style.backgroundColor = cores;
       quadrad.style.backgroundColor = cores;
      }


      const contatos = document.getElementById("colore")

      color0fX = 0

      color0fY = 0
    // ao segura o elemento 
      function colorStar (e){
            color0fX = e.pageX - contatos.offsetLeft;
            
            color0fY = e.pageY - contatos.offsetTop;

            // afdicionar eventos 
            addEventListener("mousemove" , colorMov)
            addEventListener("mouseup" ,  colorEnd)
      }

      function colorMov(e){
            contatos.style.left = (e.pageX - color0fX) + "px";
            contatos.style.top = (e.pageY - color0fY) + "px";
      }

      function colorEnd(){
            removeEventListener("mousemove" , colorMov)
            removeEventListener("mouseup" , colorEnd)
      }

      contatos.addEventListener("mousedown" , colorStar)



 

            

            

