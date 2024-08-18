function getValue(id){
    const takeValue = document.getElementById(id).innerText;
    const cngValue = parseInt(takeValue);
    return cngValue;

    // console.log(cngValue);
}

function updatedTotalCost(value){
    const takeValue = getValue('total-cost');
    const sum = takeValue + parseInt(value)

    document.getElementById('total-cost').innerText = sum;
}