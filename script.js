
var input_variables="";
var num1;
var num2;
var op;
var answer;
//  function to take input values from a button 
function take_input(val)
{
    input_variables+=val;
    document.getElementById('show').innerText=input_variables;
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

function parseNum(val){
    
    ops=["+","-","*","/"];
    for(j=0;j=ops.length();j++){
        p=ops[j];
        if(val.indexOf(p)!=-1){
            i=val.indexOf(p);
            num1= val.substr(0,i-1);
            op=str[i];
            num2=val.substr(i+1,val.length());
            answer=calculate(num1,num2,op);
            break;
        }
    }        
}

function result(){
    parseNum(input_variables);
    document.getElementById("output").innerText= answer;

function refresh(){
    document.getElementById("output").innerText= "";
    input_variables="";
    document.getElementById("show").innerText= "";

}

function remove(){
    input_variables=input_variables.slice(0,-1);
    //let txt = document.getElementById("show").innerText
    document.getElementById("show").innerText= input_variables;

}
