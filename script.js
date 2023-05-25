const types =  4;
const color  = ['rgb(255,242,0)','rgb(255,221,0)','rgb(255,179,0)','rgb(255,132,0)']
const size =  ['20px','15px','10px', '5px']

const startEl =  document.getElementById("start")
let start = ''

for(let  i = 0; i<100;i++){
    let type = Math.floor(Math .random()*types)
    start += `<i class = "fa fa-start blink" style=color:${color[type]};
                                                    font-size:${size[type]}
                                                    top:${Math.floor(Math.random()*95)}%
                                                    animation-delay:${type}s">${i}</i> `
 }

 startEl.innerHTML = start