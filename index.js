    let screen=parseInt(document.getElementById("bill").value);
    let people=parseInt(document.getElementById("people").value);
    let buttons=document.querySelectorAll("button").innerText;
    let tipamountValue='';
    let tipamount=document.getElementById("tipamount")

    for (item of buttons){
    item.addEventlistener("click",(e)=>{
        
        if(buttons==='5%'){
            tipamountValue+=(screen*(5/100))/people
            tipamount.value=tipamountValue
           }
          else if(buttons==='10%'){
            tipamountValue+= (screen*(10/100))/people
            tipamount.value=tipamountValue
           }
           else if(buttons==='15%'){
            tipamountValue+=(screen*(15/100))/people
            tipamount.value=tipamountValue
           }
          else if(buttons==='25%'){
            tipamountValue+=(screen*(25/100))/people
            tipamount.value=tipamountValue
           }
          else if(buttons==='50%'){
            tipamountValue+= (screen*(50/100))/people
            tipamount.value=tipamountValue
           }
    })
}

