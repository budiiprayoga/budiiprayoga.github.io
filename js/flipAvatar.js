// flip avatar
// Mengambil elemen-elemen yang diperlukan
const avatarBox = document.querySelector('.avatar-box');

function flipOnPageReload() {
    // Menghapus kelas .flipped jika sudah ada
    avatarBox.classList.remove('flipped-on-load');

    // Menambahkan kelas .flipped setelah sedikit penundaan
    setTimeout(() => {
        avatarBox.classList.add('flipped-on-load');
    }, 1000); // 1000ms (1 detik) penundaan sebelum flip
}

// Memanggil fungsi flipOnPageLoad saat halaman dimuat
window.addEventListener('load', flipOnPageReload);

// ----------------------------------------------