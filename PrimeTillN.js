function processData(input) {
    //Enter your code here
    
    for(let i=2;i<=input;i++){
        if(isPrime(i)==true){
            process.stdout.write(i+" ");
        }
    }
} 
    function isPrime(input) {
    //Enter your code here
  
    for(let i=2;i*i<=input;i++){
        if(input%i==0){
            return false;
        }
    }
        return true;
} 
