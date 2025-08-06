


// Fungsi utama ketika form disubmit
document.getElementById('discountForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai input
    const price = parseFloat(document.getElementById('price').value);
    const discount = parseFloat(document.getElementById('discount').value);
    
    // Validasi input
    if (validateInput(price, discount)) {
        // Hitung total harga
        const totalPrice = calculateTotal(price, discount);
        
        // Tampilkan hasil
        displayResult(price, discount, totalPrice);
    }
});

// Fungsi validasi input
function validateInput(price, discount) {
    let isValid = true;
    
    // Reset pesan error
    document.getElementById('priceError').textContent = '';
    document.getElementById('discountError').textContent = '';
    
    // Validasi harga
    if (isNaN(price) || price <= 0) {
        document.getElementById('priceError').textContent = 'Harga harus lebih besar dari 0';
        isValid = false;
    }
    
    // Validasi diskon
    if (isNaN(discount) || discount < 0 || discount > 100) {
        document.getElementById('discountError').textContent = 'Diskon harus antara 0-100%';
        isValid = false;
    }
    
    return isValid;
}

// Fungsi menghitung total harga setelah diskon
function calculateTotal(price, discount) {
    const discountAmount = price * (discount / 100);
    const totalPrice = price - discountAmount;
    return totalPrice;
}

// Fungsi menampilkan hasil
function displayResult(originalPrice, discount, totalPrice) {
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = `
        <h3>Detail Pembelian</h3>
        <p>Harga Asli: Rp ${formatCurrency(originalPrice)}</p>
        <p>Diskon: ${discount}% (Rp ${formatCurrency(originalPrice * (discount / 100))})</p>
        <hr>
        <p style="font-weight: bold; font-size: 1.2em;">
            Total Harga Setelah Diskon: Rp ${formatCurrency(totalPrice)}
        </p>
    `;
    
    resultDiv.style.display = 'block';
}

// Fungsi helper untuk format mata uang
function formatCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
