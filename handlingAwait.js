let fun1 = ()=>{
    return new Promise(
        (resolve,reject)=>{
                let a = Math.floor(Math.random()*10)+1;

                if (a<5) {
                    console.log("rsolve",a);
                    resolve();
                    
                }
                else{
                    console.log("reject",a);
                    reject("rejected bro");
                }


        }
    );


}


let fun2 = async ()=>{
  try{
    await fun1();
    await fun1();
    await fun1();
    await fun1();
    await fun1();
  }
  catch(er)
  {
    console.log(er)
  }
  console.log("i love my india")

}

fun2();