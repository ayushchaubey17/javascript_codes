function saveToDb(data) {
    return new Promise(
            (resolve,reject)=>{
                    let a = Math.floor(Math.random()*10)+1;
                    if (a<4) {
                        resolve("it is resolved");
                    }
                    else{
                        reject("it is rejected");
                    }

            }

    );

}


let req = saveToDb("ayush");   // req is a promise

req.then(
    ()=>{
        console.log("resolved data1");

        //now for data 2
       return saveToDb("kumar"); // not going for nesting...
       
    }
).then(  // kumar ka hai
   ()=>{
    console.log("data 2 is saved");

    return saveToDb("chaubey");
   }
).then(   //chaubey ka hai
    ()=>{
        console.log("data 3 is saved");
    }
).catch(
    ()=>{
        console.log("rejected data")
    }
);