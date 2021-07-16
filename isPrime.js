function processData(input) {
    let isPrime =true;
 for(let i=2;i*i<=input;i++){
     if(input%i==0){
         isPrime=false;
         break;
     }
 }
    if(isPrime===true){
       console.log("Prime");
    }else{
        console.log("Not Prime");
    }
} 
