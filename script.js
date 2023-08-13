let string = '';
let btn =  document.querySelectorAll(".item");
Array.from(btn).forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click',(e)=>{
        // console.log(e.target.innerHTML)
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.getElementById('display').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            document.getElementById('display').value = string;
        }
        else if(e.target.innerHTML == 'CE'){
            // string = string.toString().slice(0,-1);
            document.getElementById('display').value = document.getElementById('display').value.toString().slice(0,-1) ;
        }
        else{
            string = string + e.target.innerHTML;
            document.getElementById('display').value = string;
        }
    })
})