function calculator () {
    this.method = {
        '+':(a,b)=> +a + +b,
        '-':(a,b)=>  +a - +b,
        '/':(a,b)=>  (b=="0"||b==0)? 'infinity 👌🤖 ':+a/+b,
        '*':(a,b)=> +a*+b,
        '%':(a,b)=> +a%+b,
    } 
    this.operate = (str)=> {
        op = str.replace(/[\w.]/g,"");
        arr=str.split(op);
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
let str=''; // text in display;
let reqStr; // argument passed as string to calculator 
const display = document.querySelector(".display");

function displayer(val){ //display numbers to display
    if(val == "CLR"){
        str ='';
        displayTracker= 0;
        reqStr = display.textContent;
        return display.textContent= '0';
    }
    str += val;
    display.textContent = str;
    reqStr = display.textContent;
   
}


let operators = document.querySelectorAll(".operator");

operators.forEach(item => {
     item.addEventListener("mousedown",()=> {
        op = str.replace(/[\w.]/g,"");
       if(op ){// empty operator  check
        arr=str.split(op);              //checks wheter already a operation exists (i.e 8+4 ) to prevent
        if (arr.length >=2) { displayTracker = 1;}              // something like 48+84* error;
       }

     if ( displayTracker == 1) {
        display.textContent = c.operate(reqStr);
        str= display.textContent+item.value.replace('=','');
        displayTracker = 0;
     }
     else if(displayTracker == 0 ){ //adds operator symbols at the end of display
        if(item.value == "=") return '';
        str += item.value;
        display.textContent = str;
        reqStr = display.textContent;// 
        displayTracker = 1;
       }
    });
   
} );