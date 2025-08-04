const input = document.getElementById('pollution-rights');
const usdPrice = document.getElementById('usd-price');
const prTokens = document.getElementById('pr-tokens');

input.addEventListener('click', function() {
    document.querySelector('.custom-cursor').style.display = 'none';
});

input.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value.length > 0 && this.value[0] === '0') {
        this.value = this.value.slice(1);
    }
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
    const value = parseInt(this.value);
    if (isNaN(value) || this.value === '') {
        usdPrice.textContent = '';
        prTokens.textContent = '';
    } else {
        usdPrice.textContent = (value * 29).toLocaleString();
        prTokens.textContent = value.toLocaleString();
    }
});
