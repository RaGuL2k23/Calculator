function calculator () {
    this.method = {
        '+':(a,b)=> +a + +b,
        '-':(a,b)=> a-b,
        '/':(a,b)=> a/b,
        '*':(a,b)=> a*b,
        '%':(a,b)=> a%b,
    } 
    this.operate = (str)=> {
        op = str.replace(/[\d]/g,'');
        arr=str.split(op);
         n1 = arr[0];
         n2 = arr[1];
        return (this.method[op](n1,n2)).toFixed(3);
    }
}