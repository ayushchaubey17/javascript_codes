let jsonData =' {"fact":"Phoenician cargo ships are thought to have brought the first domesticated cats to Europe in about 900 BC.","length":105}';
// console.log(jsonData.fact);


// fun1
let obj = JSON.parse(jsonData);   // object js
// console.log(obj.fact);
// console.log(obj.length);

// console.log(obj)



// fun2  
let jsonDataAgain = JSON.stringify(obj);

console.log((jsonDataAgain));