
  

// Slider Foto
let fotoIndex = 0;
let fotoArray = ["foto/hari-guru.jpg", "foto/bersama.jpg", "foto/kelas.jpg"]


function gantiFoto () {
    fotoIndex = (fotoIndex + 1) % fotoArray.length;
    document.getElementById("foto").src = fotoArray[fotoIndex];
}

setInterval(gantiFoto, 2000);

// Utk kolom tugas
document.querySelectorAll('.pertanyaan').forEach(button => {
    button.addEventListener('click', () => {
        const jawab = button.nextElementSibling;
        jawab.style.display = jawab.style.display === 'block' ? 'none' : 'block';
    });
});

// Toggle Konten di Prestasi
function toggleContent(contentId) {
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    if (contentId === 'content1') {
    content1.style.display = 'block';
    content2.style.display = 'none';
    } else if (contentId === 'content2') {
     content1.style.display = 'none';
     content2.style.display = 'block';
           }
      }

      // Opsi utk pengguna ponsel
      document.addEventListener("DOMContentLoaded", () => {
        const hamburgerBtn = document.getElementById("hamburger-btn");
        const navMenu = document.getElementById("nav-menu");
    
        hamburgerBtn.addEventListener("click", () => {
            navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
        });
    });

    
    

        let currentIndex = 0;

        function showSlide(index) {
            const slides = document.querySelector('.slides');
            const totalSlides = slides.children.length;
            if (index >= totalSlides) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }
            const offset = -currentIndex * 100;
            slides.style.transform = `translateX(${offset}%)`;
        }
        
        function nextSlide() {
            showSlide(currentIndex + 1);
        }
        
        function prevSlide() {
            showSlide(currentIndex - 1);
        }
        
        // Initialize the slider
        showSlide(currentIndex);


// Jam 
function updateClock () {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);
updateClock;