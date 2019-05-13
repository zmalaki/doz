
      var user;
      var isSecoundTime = true;
      var isSecoundTime2 = true;
      var isStart = false;
      var player = true;
      var player1 = true;
      var text = "";
      var text1 = "";
      var text2 = "";
      var t = document.querySelector(".text");
      var opaci=true;

      function start() {
        isStart = true;
        var t = document.querySelector(".text");
        var pElm0 = document.createElement("p");
        pElm0.innerHTML = "بازیکن را انتخاب کنید";
        t.appendChild(pElm0);
        // text += "بازیکن را انتخاب کنید" + "<br>";
        // document.getElementById("s2").innerHTML = text;
      }

      function changer(i) {
        user = i;
        if (user == "farokh" && isStart) {
          document.getElementById("farokh").style.background = "red";
          document.getElementById("ali").style.background = "gray";
          isSecoundTime2 = true;
          var t = document.querySelector(".text");
          var pElm1 = document.createElement("p");
          pElm1.innerHTML = "farokhبازی";
          t.appendChild(pElm1);

          //   text +=" بازی کن"+user+"<br>";
          // document.getElementById("s2").innerHTML=text;
        } else if (user == "ali" && isStart) {
          document.getElementById("ali").style.background = "red";
          document.getElementById("farokh").style.background = "gray";
          isSecoundTime = true;
          var t = document.querySelector(".text");
          var pElm2 = document.createElement("p");
          pElm2.innerHTML = "aliبازی کن";
          t.appendChild(pElm2);

          // text += " بازی کن" + user + "<br>";
          // document.getElementById("s2").innerHTML = text;
        } else {
          // text += " کلید کنیدstsrt" + "<br>";
          // document.getElementById("s2").innerHTML = text;
          var t = document.querySelector(".text");
          var pElm3 = document.createElement("p");
          pElm3.innerHTML = " کلید کنیدstsrt ";
          t.appendChild(pElm3);
        }
      }

      function myFunction(a) {
        if (document.getElementById(a).innerHTML == "") {
          if (user == "farokh" && isSecoundTime && isStart) {
            document.getElementById(a).innerHTML =
              '<img src="no-stopping (1).png" alt="k" width="70" height="70" />';
            isSecoundTime = false;
          } else if (user == "ali" && isSecoundTime2 && isStart) {
            document.getElementById(a).innerHTML =
              '<img src="traffic-signal (1).png" alt="k" width="70" height="70" />';
            isSecoundTime2 = false;
          } else if ((isStart = false)) {
            var t = document.querySelector(".text");
            var pElm4 = document.createElement("p");
            pElm4.innerHTML = "نوبتتان را بازی کرذدید";
            t.appendChild(pElm4);
            // text += "نوبتتان را بازی کرذدید" + "<br>";
            // document.getElementById("s2").innerHTML = text;
          }
        } else if ((isStart = false)) {
          var t = document.querySelector(".text");
          var pElm5 = document.createElement("p");
          pElm5.innerHTML = "در خانه های خالی کلیک کنید";
          t.appendChild(pElm5);
          // text += "در خانه های خالی کلیک کنید" + "<br>";
          // document.getElementById("s2").innerHTML = text;
        }
        winer();
      }
      function winer() {
        var kh1 = document.getElementById("1").innerHTML;
        var kh2 = document.getElementById("2").innerHTML;
        var kh3 = document.getElementById("3").innerHTML;
        var kh4 = document.getElementById("4").innerHTML;
        var kh5 = document.getElementById("5").innerHTML;
        var kh6 = document.getElementById("6").innerHTML;
        var kh7 = document.getElementById("7").innerHTML;
        var kh8 = document.getElementById("8").innerHTML;
        var kh9 = document.getElementById("9").innerHTML;

        if (user == "farokh") {
          if (
            kh1 === kh2 &&
            kh2 === kh3 &&
            kh1 === kh3 &&
            kh1 != "" &&
            isStart
          ) {
            // text += "فرخ برنده شدید" + "<br>";
            // document.getElementById("s2").innerHTML = text;
            var t = document.querySelector(".text");
            var pElm6 = document.createElement("p");
            pElm6.innerHTML = "فرخ برنده شدید";
            pElm6.style.fontSize = "50px";
            t.appendChild(pElm6);
            animation();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh4 === kh5 &&
            kh4 === kh6 &&
            kh5 === kh6 &&
            kh4 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm7 = document.createElement("p");
            pElm7.innerHTML = "فرخ برنده شدید";
            pElm7.style.fontSize = "50px";
            t.appendChild(pElm7);
            // setTimeout(function() {
            // text += "فرخ برنده شدید" + "<br>";
            // document.getElementById("s2").innerHTML = text;
            // }, 3000);
            animation();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh7 === kh8 &&
            kh9 === kh7 &&
            kh8 === kh9 &&
            kh8 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm8 = document.createElement("p");
            pElm8.innerHTML = "فرخ برنده شدید";
            t.appendChild(pElm8);
            pElm8.style.fontSize = "50px";

            // setTimeout(function() {
            //   text += "فرخ برنده شدید" + "<br>";
            //   document.getElementById("s2").innerHTML = text;
            // }, 3000);
            animation();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh1 === kh5 &&
            kh9 === kh1 &&
            kh5 === kh9 &&
            kh9 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm9 = document.createElement("p");
            pElm9.innerHTML = "فرخ برنده شدید";
            t.appendChild(pElm9);
            pElm9.style.fontSize = "50px";

            // setTimeout(function() {
            //   text += "فرخ برنده شدید" + "<br>";
            //   document.getElementById("s2").innerHTML = text;
            // }, 3000);
            animation();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh7 === kh5 &&
            kh7 === kh3 &&
            kh5 === kh3 &&
            kh7 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm10 = document.createElement("p");
            pElm10.innerHTML = "فرخ برنده شدید";
            pElm10.style.fontSize = "50px";
            t.appendChild(pElm10);
            // setTimeout(function() {
            //   text += "فرخ برنده شدید" + "<br>";
            //   document.getElementById("s2").innerHTML = text;
            // }, 3000);
            animation();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh1 === kh4 &&
            kh7 === kh4 &&
            kh1 === kh7 &&
            kh7 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm11 = document.createElement("p");
            pElm11.innerHTML = "فرخ برنده شدید";
            pElm11.style.fontSize = "50px";
            t.appendChild(pElm11);
            // setTimeout(function() {
            //   text += "فرخ برنده شدید" + "<br>";
            //   document.getElementById("s2").innerHTML = text;
            // }, 3000);
            animation();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh1 === kh5 &&
            kh5 === kh8 &&
            kh1 === kh9 &&
            kh9 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm12 = document.createElement("p");
            pElm12.innerHTML = "فرخ برنده شدید";
            t.appendChild(pElm12);
            // setTimeout(function() {
            //   alert("فرخ برنده شدید");
            // }, 3000);
            animation();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh3 === kh6 &&
            kh9 === kh3 &&
            kh6 === kh9 &&
            kh9 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm12 = document.createElement("p");
            pElm12.innerHTML = "فرخ برنده شدید";
            t.appendChild(pElm12);
            pElm12.style.fontSize = "50px";
            // setTimeout(function() {
            //   alert("فرخ برنده شدید");
            // }, 3000);
            animation();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          }
        }

        if (user == "ali") {
          if (
            kh1 === kh2 &&
            kh2 === kh3 &&
            kh1 === kh3 &&
            kh1 != "" &&
            isStart
          ) {
            animation1();
            var t = document.querySelector(".text");
            var pElm13 = document.createElement("p");
            pElm13.innerHTML = "علی برنده شدید";
            t.appendChild(pElm13);
            pElm13.style.fontSize = "50px";
            // setTimeout(function() {
            //   alert("علی برنده شدید");
            // }, 3000);
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh4 === kh5 &&
            kh4 === kh6 &&
            kh5 === kh6 &&
            kh4 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm14 = document.createElement("p");
            pElm14.innerHTML = "علی برنده شدید";
            t.appendChild(pElm14);
            pElm14.style.fontSize = "50px";
            // setTimeout(function() {
            //   alert("علی برنده شدید");
            // }, 3000);
            animation1();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh7 === kh8 &&
            kh9 === kh7 &&
            kh8 === kh9 &&
            kh8 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm15 = document.createElement("p");
            pElm15.innerHTML = "علی برنده شدید";
            t.appendChild(pElm15);
            pElm15.style.fontSize = "50px";
            // setTimeout(function() {
            //   alert("علی برنده شدید");
            // }, 3000);
            animation1();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh1 === kh5 &&
            kh9 === kh1 &&
            kh5 === kh9 &&
            kh9 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm16 = document.createElement("p");
            pElm16.innerHTML = "علی برنده شدید";
            t.appendChild(pElm16);
            pElm16.style.fontSize = "50px";
            // setTimeout(function() {
            //   alert("علی برنده شدید");
            // }, 3000);
            animation1();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh7 === kh5 &&
            kh7 === kh3 &&
            kh5 === kh3 &&
            kh7 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm17 = document.createElement("p");
            pElm17.innerHTML = "علی برنده شدید";
            t.appendChild(pElm17);
            pElm17.style.fontSize = "50px";
            // setTimeout(function() {
            //   alert("علی برنده شدید");
            // }, 3000);
            animation1();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh1 === kh4 &&
            kh7 === kh4 &&
            kh1 === kh7 &&
            kh7 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm18 = document.createElement("p");
            pElm18.innerHTML = "علی برنده شدید";
            t.appendChild(pElm18);
            pElm18.style.fontSize = "50px";
            // setTimeout(function() {
            //   alert("علی برنده شدید");
            // }, 3000);
            animation1();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh1 === kh5 &&
            kh5 === kh8 &&
            kh1 === kh9 &&
            kh9 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm19 = document.createElement("p");
            pElm19.innerHTML = "علی برنده شدید";
            t.appendChild(pElm19);
            pElm19.style.fontSize = "50px";
            // setTimeout(function() {
            //   alert("علی برنده شدید");
            // }, 3000);
            animation1();
            setTimeout(function() {
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          } else if (
            kh3 === kh6 &&
            kh9 === kh3 &&
            kh6 === kh9 &&
            kh9 != "" &&
            isStart
          ) {
            var t = document.querySelector(".text");
            var pElm20 = document.createElement("p");
            pElm20.innerHTML = "علی برنده شدید";
            t.appendChild(pElm20);
            pElm20.style.fontSize = "50px";
            // setTimeout(function() {
            //   alert("علی برنده شدید");
            // }, 3000);
            animation1();
            setTimeout(function() {
              // var t = document.querySelector(".text");
              // var pEl = document.createElement("p");
              // pEl.innerHTML = "بازی تمام شد";
              // t.appendChild(pEl);
              // pEl.style.fontSize="50px";
              document.getElementById("op1").innerHTML = "بازی تمام شد";
            }, 4000);
          }
        }
        if (
          kh1 != "" &&
          kh2 != "" &&
          kh3 != "" &&
          kh4 != "" &&
          kh5 != "" &&
          kh6 != "" &&
          kh7 != "" &&
          kh8 != "" &&
          kh9 != "" &&
          isStart
        ) {
          var t = document.querySelector(".text");
          var pElm21 = document.createElement("p");
          pElm21.innerHTML = "هیج کدام برنده نشدید ";
          t.appendChild(pElm21);
          // alert("هیچ کدام برنده نشدید");
        }
      }

      function animation() {
        if(opaci=true){
        document.getElementById("farokh").classList.add("btntrans");
        document.getElementById("op").style.opacity = 0.1;}
        
      }
      function animation1() {
        if(opaci=true){
        document.getElementById("ali").classList.add("btntrans");
        document.getElementById("op").style.opacity = 0.1;}
        
      }
      function finish() {
        if(opaci=true){
        document.getElementById("op1").innerHTML = "بازی تمام شد";}
        
      }
      function ne() {
        document.getElementById("1").innerHTML = "";
        document.getElementById("2").innerHTML = "";
        document.getElementById("3").innerHTML = "";
        document.getElementById("4").innerHTML = "";
        document.getElementById("5").innerHTML = "";
        document.getElementById("6").innerHTML = "";
        document.getElementById("7").innerHTML = "";
        document.getElementById("8").innerHTML = "";
        document.getElementById("9").innerHTML = "";
        document.getElementById("s2").innerHTML = "";
        start()
       
        
        opaci=true;
        // var t = document.querySelector(".text");

        // t.innerHTML = "";
        
       
      }
    