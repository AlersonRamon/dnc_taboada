 var res = window.document.getElementById('div_response')
 function show(){
     var num = document.getElementById('num').value
     var end = document.getElementById('upto').value
     console.log(end, num)

     if(num == '' || end == ''){
        window.alert('[ERRO] Verifique os dados inseridos')
     }else{
        num = Number(num)
        end = Number(end)
        res.innerHTML = `A Tabuada do ${num} é: <br>`
        for(let i=0; i<=end; i++){
        let response = i * num
        res.innerHTML += `${i} x ${num} = ${response} <br>`
        }
     }
}