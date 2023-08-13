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
        // else if(e.target.innerHTML = 'DC'){
        //     string = '';
        //     document.getElementById('display').value = string;
        // }
        else{
            string = string + e.target.innerHTML;
            document.getElementById('display').value = string;
        }
    })
})