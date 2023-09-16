// flip avatar
// Mengambil elemen yang diperlukan
document.addEventListener("DOMContentLoaded", function() {
    const avatarBox = document.querySelector('.avatar-box');
    let flipTimeout;
    let isHovered = false;

// Fungsi untuk memutar avatar ke gambar kedua
    function flipAvatar() {
        avatarBox.style.transform =  "rotateY(180deg)";
        if (!isHovered) {
            flipTimeout = setTimeout(resetAvatar, 1200); // Kembali ke posisi semula setelah 1.2 detik
        }
    }

    // Fungsi untuk mengembalikan avatar ke posisi semula
    function resetAvatar() {
        avatarBox.style.transform = "rotateY(0deg)";
    }

    // Memanggil fungsi flipAvatar() secara otomatis saat halaman dimuat
    flipAvatar();

    // Event listener untuk memicu efek flip saat avatar dihover
    avatarBox.addEventListener("mouseenter", function () {
        clearTimeout(flipTimeout); // Menghapus timeout saat dihover
        isHovered = true;
        flipAvatar(); // Memutar avatar ke gambar kedua
    });

    avatarBox.addEventListener("mouseleave", function () {
        resetAvatar(); //mengembalikan avatar ke semula
    });
});

// ----------------------------------------------