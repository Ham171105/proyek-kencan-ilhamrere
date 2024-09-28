// Mengambil elemen tombol dan elemen teks untuk menampilkan hasil
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseText = document.getElementById('response');

// Tambahkan event listener untuk tombol "Yes"
yesBtn.addEventListener('click', function() {
    responseText.textContent = "Great! Let's plan for our date.";
    responseText.style.color = "#ff6b6b";
});

// Tambahkan event listener untuk tombol "No"
noBtn.addEventListener('click', function() {
    responseText.textContent = "Aww, maybe next time. 😢";
    responseText.style.color = "#333";
});