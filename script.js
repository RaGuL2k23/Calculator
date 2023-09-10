function calculator () {
    this.method = {
        '+':(a,b)=> +a + +b,
        '-':(a,b)=>  +a - +b,
        '/':(a,b)=>  (b=="0"||b==0)? 'infinity 👌🤖 ':+a/+b,
        '*':(a,b)=> +a*+b,
        '%':(a,b)=> +a%+b,
    } 
    this.operate = (displayContent)=> {
        op = displayContent.replace(/[\w.]/g,"");
        arr=displayContent.split(op);
         n1 = arr[0];
         n2 = arr[1];
       x= (this.method[op](n1,n2));
       if( Number.isInteger(x)) return x;
       else if (typeof(x)=='string') return x;
       else return x.toFixed(2);
    }
}
let c = new calculator();
let displayTracker = 0;
let displayContent=''; // text in display;
let argumentString; // argument passed as string to calculator 
const display = document.querySelector(".display");

function displayer(value){ //display numbers to display
    if(value == "CLR"){
        displayContent ='';
        displayTracker= 0;
        argumentString = display.textContent;
        return display.textContent= '0';
    }
    displayContent += value;
    display.textContent = displayContent;
    argumentString = display.textContent;
   
}

let operate = (str)=> {
    op = displayContent.replace(/[\w.]/g,"");//finds operator
   if(op ){// empty operator  check
    arr=displayContent.split(op);              //checks wheter already a operation exists (i.e 8+4 ) to prevent
    if (arr.length >=2) { displayTracker = 1;}              // something like 48+84* error;
   }

 if ( displayTracker == 1) {
    display.textContent = c.operate(argumentString);
    displayContent= display.textContent+str.replace('=','');
    displayTracker = 0;
 }
 else if(displayTracker == 0 ){ //adds operator symbols at the end of display
    if(str == "=") return '';
    displayContent += str;
    display.textContent = displayContent;
    argumentString = display.textContent;// 
    displayTracker = 1;
   }    
}

function backSpace() {
    console.log(display.textContent);
    stringLength = display.textContent.length
    return display.textContent =  display.textContent.slice(0,stringLength-1);
}

let operators = document.querySelectorAll(".operator");
function hello(str){ console.log(str)}
operators.forEach(item => {
     item.addEventListener("click", ()=> operate(item.value));// onclick execute anonynous function to gain value
   
} );

