const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn);

let count = 0;

for (const btn of allBtn) {
    // console.log(btn);
    btn.addEventListener('click', function (e) {
        // console.log('HafsaMoni');
        count = count + 1;

        const placeName = e.target.parentNode.childNodes[1].innerText;

        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');

        const p = document.createElement('p')
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);

        selectedContainer.appendChild(li);

        // document.getElementById('cart-count').innerText = count;

        const totalCost = document.getElementById('total-cost').innerText;
        console.log(typeof totalCost);
        
        setInnerText('cart-count', count);
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}