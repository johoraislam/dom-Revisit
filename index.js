const allBtn = document.getElementsByClassName('ply-btn');

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        const name = e.target.parentNode.childNodes[1].innerText;

        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        const category = e.target.parentNode.childNodes[5].childNodes[1].innerText;
        // console.log(name,price,category)

        const selectedContainer = document.getElementById('selected-player-container');

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

         updatedTotalCost(price)


    })
}
