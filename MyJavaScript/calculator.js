var lbl = document.getElementById("lblResult");
        function Sum(){
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            var Sum = num1 + num2;
            lbl.innerHTML=Sum;
        }
        function Minus(){
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            var Minus = num1 - num2;
            lbl.innerHTML=Minus;
        }
        function Multiply(){
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            var Multiply = num1 * num2;
            lbl.innerHTML=Multiply;
        }
        function Division(){
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            var Division = num1 / num2;
            lbl.innerHTML=Division;
        }