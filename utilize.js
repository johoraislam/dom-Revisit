function updateGrandtotal(status) {
    const takeValue = getValue('total-cost');

    if (status == undefined) {
        
        document.getElementById('grand-total').innerText = takeValue;
    }
    else {
        const cuponCode = document.getElementById('cupon-code').value;

        if(cuponCode == 'hate420'){
            const discount = takeValue * 0.2;
            document.getElementById('grand-total').innerText = takeValue - discount;
        } else{ 
            alert('plese type valid cupon code')
        }
            

    }


    
}


function updatedTotalCost(value) {
    const takeValue = getValue('total-cost');
    const sum = takeValue + parseInt(value)

    document.getElementById('total-cost').innerText = sum;
}



function getValue(id) {
    const takeValue = document.getElementById(id).innerText;
    const cngValue = parseInt(takeValue);
    return cngValue;

    // console.log(cngValue);
}

