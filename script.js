
const countValue = document.querySelector('#counter');

const increment = () =>{
    //get value from UI
    let value = parseInt(countValue.innerText); //data of countValue is taken out in value but we will receive it in string form ,we want value in number form so do parseInt
    //update the value
    value = value+1;
    //set the value onto UI
    countValue.innerText= value
};

const decrement = () =>{
    //get value from UI
    let value = parseInt(countValue.innerText); //data of countValue is taken out in value but we will receive it in string form ,we want value in number form so do parseInt
    //update the value
    value = value-1;
    //set the value onto UI
    countValue.innerText= value //value is put back into countValue by using innerText property
};