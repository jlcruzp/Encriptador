var botoncodificar= document.querySelector(".cta");
        var botondecodificar= document.querySelector(".cta1");
        var botoncopiar= document.querySelector(".cta2");
        var codigo= document.querySelector(".input-padron");
      
        

        function codificar(){
                var str = codigo.value;
                var vObj = {
                   a:"ai",
                   e:"enter",
                   i:"imes",
                   o:"ober",
                   u:"ufat"
                };
                str = str.replace(/a|e|i|o|u/g, function(matched){
                  return vObj[matched];
                });

                    
               document.getElementById("textToEncode").innerHTML= str;
                        
               document.getElementById("munecote").style.display = "none";
                document.getElementById("nomensaje").style.display = "none";
                document.getElementById("frame").style.display = "none";
                document.getElementById("frame7").style.display = "none";
                
            
            
        }

         

        function decodificar(){
                var str = codigo.value;
                var vObj = {
                   ai:"a",
                   enter:"e",
                   imes:"i",
                   ober:"o",
                   ufat:"u"
                };
                str = str.replace(/ai|enter|imes|ober|ufat/g, function(matched){
                  return vObj[matched];
                });

                
                document.getElementById("textToEncode").innerHTML= str;
                
                document.getElementById("munecote").style.display = "none";
                document.getElementById("nomensaje").style.display = "none";
                document.getElementById("frame").style.display = "none";
                document.getElementById("frame7").style.display = "none";
            
        }

        function limpiar(evento){
            codigo.value="";
            return codigo;
        }

        function copiar(evento){
          var codigoACopiar = document.getElementById('textToEncode');
          
          var seleccion = document.createRange();
          seleccion.selectNodeContents(codigoACopiar);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(seleccion);
          var res = document.execCommand('copy');
          window.getSelection().removeRange(seleccion);
        }

        botoncodificar.onclick= codificar;
        botondecodificar.onclick= decodificar;
        botoncopiar.onclick= copiar;

        codigo.onclick= limpiar;