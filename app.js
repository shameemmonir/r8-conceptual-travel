const allBtn = document.getElementsByClassName('add-btn');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        // console.log('hafsaMoni');
        count = count + 1;
        // console.log(e.target.parentNode.childNodes[1].innerText);

        const placeName = e.target.parentNode.childNodes[1].innerText;

        // console.log(e.target.parentNode.childNodes[3].childNodes[1].innerText);

        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);


        totalCost('total-cost', parseInt(price));

        const totalCost = document.getElementById('total-cost').innerText;

        // console.log(typeof parseInt(totalCost));
        // const convertedTotalCost = parseInt(totalCost);
        // document.getElementById('total-cost').innerText = convertedTotalCost + parseInt(price);

        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + parseInt(price);
        setInnerText('total-cost', sum);

        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotal);

        const sum2 = convertedGrandTotal + parseInt(price);

        setInnerText('grand-total', sum2);

        setInnerText('total-cost', sum);

        setInnerText('cart-count', count);
    })
}

function totalCost(id, value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(value);
}

function setInnerText (id, value){
    document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    totalCost('total-cost', sum);
}

