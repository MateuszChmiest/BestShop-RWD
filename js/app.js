// Calc form
const form = document.querySelector('.calc__form');
const formProducts = form.querySelector('#products');
const formOrders = form.querySelector('#orders');
const formPackageSelect = form.querySelector('.calc__select');
const formCheckboxAccounting = form.querySelector('#accounting');
const formCheckboxTerminal = form.querySelector('#terminal');

// Calc summary
const summary = document.querySelector('.calc__summary');
const summaryProducts = summary.querySelector('[data-id = "products"]');
const summaryOrders = summary.querySelector('[data-id = "orders"]');
const summaryPackage = summary.querySelector('[data-id = "package"]');
const summaryAccounting = summary.querySelector('[data-id = "accounting"]');
const summaryTerminal = summary.querySelector('[data-id = "terminal"]');
const summaryTotalPrice = summary.querySelector('#total-price');

let productprice = 0;
let monthprice = 0;
let packageprice = 0;
let accountingprice = 0;
let terminalprice = 0;
let sum = 0;

formPackageSelect.addEventListener('click', function (e) {
   formPackageSelect.classList.toggle('open');
});

formPackageSelect.addEventListener('click', function (event) {
    formPackageSelect.firstElementChild.innerText = event.target.innerText;
    summaryPackage.classList.add('open');
    summaryPackage.children[1].innerText = event.target.innerText;
    if (event.target.innerText === "Basic") {
        packageprice = 0;
        summaryPackage.children[2].innerText = '$' + packageprice;
    }

    if (event.target.innerText === "Professional") {
        packageprice = 25;
        summaryPackage.children[2].innerText = '$' + packageprice;
    }

    if (event.target.innerText === "Premium") {
        packageprice = 60;
        summaryPackage.children[2].innerText = '$' + packageprice;
    }

    summaryTotalPrice.classList.add('open');
    totalSum();
});

formProducts.addEventListener('change', function (event) {
    summaryProducts.classList.add('open');
    summaryProducts.children[1].innerText = this.value + '* 0.50$';
    productprice = this.value * 0.50;
    summaryProducts.children[2].innerText = '$' + productprice;

    totalSum();
});

formOrders.addEventListener('change', function (event) {
    summaryOrders.classList.add('open');
    summaryOrders.children[1].innerText = this.value + '* 0.50$';
    monthprice = this.value * 0.50;
    summaryOrders.children[2].innerText = '$' + monthprice;

    totalSum();
});

formCheckboxAccounting.addEventListener('change', function (event) {
    summaryAccounting.classList.toggle('open');
    if (summaryAccounting.classList[1] === "open") {
        accountingprice = 15;
    } else {
        accountingprice = 0;
    }
    summaryAccounting.children[1].innerText = accountingprice + '$';

    totalSum();
});

formCheckboxTerminal.addEventListener('change', function (event) {
    summaryTerminal.classList.toggle('open');
    if (summaryTerminal.classList[1] === 'open') {
        terminalprice = 10;
    } else {
        terminalprice = 0;
    }
    summaryTerminal.children[1].innerText = terminalprice + '$';

    totalSum();
});

function totalSum() {
    sum = productprice + monthprice + packageprice + terminalprice + accountingprice;
    summaryTotalPrice.children[1].innerText = '$' + sum;
}
