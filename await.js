let a1 =()=>{
   return new Promise(
    (resolve,reject)=>{

            setTimeout(() => {
               console.log("hyy");
               resolve(); 
            }, 1000);


    }
   );

}

let a2 = async () =>{
  await a1();
  await a1();
  await  a1();
  await a1();

}
a2();