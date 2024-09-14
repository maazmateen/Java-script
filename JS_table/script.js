var button = document.querySelector('#button');
var tbl = document.querySelector('#table');
button.addEventListener("click" , tableFunc)

function tableFunc(){
    var head = document.querySelector('#header').value;
     tbl.innerHTML=null
    for(var i=1;i <= 10 ; i++){
      const table =`${head} * ${i} = ${head* i} `
      tbl.innerHTML += table + "<br/>"
       console.log(table);
    }
}



// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }