const allBtn = document.getElementsByClassName('ply-btn');

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        const name = e.target.parentNode.childNodes[1].innerText;

        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        const category = e.target.parentNode.childNodes[5].childNodes[1].innerText;
        // console.log(name,price,category)

        const selectedContainer = document.getElementById('selected-player-container');

            e.target.setAttribute('disabled',false)


        if(getValue('curt')+ 1 > 6){
            alert('your lemit finish')
            return;
        }


        if(getValue('left') <= 0){
            alert('your lemit finish')
            return;
        }

        if(getValue('budget') <= 0){
            alert('your lemit finish')
            return;
        }






        // update budget

        const budget = getValue('budget');

        document.getElementById('budget').innerText = budget - parseInt(price);


        const curtCount = getValue('curt');
        document.getElementById('curt').innerText = curtCount + 1;

        const leftCount = getValue('left');
        document.getElementById('left').innerText = leftCount - 1;






        const div = document.createElement('div');
        div.classList.add('w-full');
        div.classList.add('flex');
        div.classList.add('justify-evenly');

         const p = document.createElement('p')
         p.innerText = name;
         const p2 = document.createElement('p')
         p2.innerText = price;
         const p3 = document.createElement('p')
         p3.innerText = category;

         div.appendChild(p);
         div.appendChild(p2);
         div.appendChild(p3);

         selectedContainer.appendChild(div);

         updatedTotalCost(price);
         updateGrandtotal();


    })
}
