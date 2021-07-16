function processData(input) {
    let n = input
    let st = Math.floor(n/2)+1;
    let sp = 1;
   for(let i=0;i<n;i++){
       for(let j=0;j<st;j++){
       process.stdout.write("*");
   }
      for(let j=0;j<sp;j++){
       process.stdout.write(" ");
   }
    for(let j=0;j<st;j++){
       process.stdout.write("*");
   }
   console.log();
   if(i>=Math.floor(n/2)){
       st+=1;
       sp-=2;
   }else{
       st--;
       sp+=2;
   }
}

}

