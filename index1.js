const content = document.querySelector(".contents");

let title='';
let result='';
for (let i = 2; i<10; i++){
    title = `<li><h3>${i}</h3></li>`;
    for (let j=1;j<10;j++){
        result = `<li><p>${i} x ${j} = ${i*j}</p></li>`;
        //console.log(result);
        title +=result;
       
    };
    title = `<div class="multiplication"><ul>${title}</ul></div>`;
    console.log(title);
    content.innerHTML+=title;

}
