
//array
var input_variables=[];

//  function to take input values from a button 
function take_input(val)
{
    input_variables.push(val);
    console.log(val);
    document.getElementById('show').innerText+=" "+val;
}


function calculate(num1,num2,op){
    switch(op){
        case '+':
            return Number(Number(num1) + Number(num2));
            break;
        case '-':
            return num1-num2;
            break;

        case '*':
            return num1*num2;
            break;
        
        case '/':
            return num2===0? "invalid": num1/num2;
            break;

        default:
            return "enter valid operator";
            break;
    }
}



function result(){
    num1=input_variables[0];
    op=input_variables[1];
    num2=input_variables[2];
    console.log(calculate(num1,num2,op));
    document.getElementById("output").innerText=calculate(num1,num2,op);
}

function refresh(){
    document.getElementById("output").innerText= "";
    input_variables=[];
    document.getElementById("show").innerText= "";

}

function remove(){
    input_variables.pop();
    let txt = document.getElementById("show").innerText
    document.getElementById("show").innerText= txt.slice(0,-1);

}
