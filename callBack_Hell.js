




let kam = (i,suc , fail)=>{
   let a =  Math.floor(Math.random()*10)+1;

   if (a<5) {
   suc(i);
          kam(i+1,suc,fail);
   
   }
   else{
   fail(i);
   }

}
let suc = (i)=>{
    console.log(`kaam hua -->${i}`);
}

let fail = (i)=> {
    console.log(`kaam nii hua -->${i}`)
}


kam(1,suc,fail);
