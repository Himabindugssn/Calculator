
var input_variables="";
var num1=a;
var num2=b;
var op;

//  function to take input values from a button 
function take_input(val)
{
    if(val==='+' or val==='-' or val==='*' or val==='/'){
        num1==a?num1=Number(input_variables):num2=Number(input_variables);
        input_variables="";
        op=val;
    }
    else{
        input_variables+=val;
    }
    document.getElementById('show').innerText+=+val;
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
    document.getElementById("output").innerText=calculate(num1,num2,op);
}

function refresh(){
    document.getElementById("output").innerText= "";
    input_variables="";
    document.getElementById("show").innerText= "";

}

function remove(){
    input_variables.slice(0,-1);
    let txt = document.getElementById("show").innerText
    document.getElementById("show").innerText= txt.slice(0,-1);

}
