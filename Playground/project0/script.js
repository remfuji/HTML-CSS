const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const tendina = document.getElementById('tendina-menu');

function updateMenuDisplay() {
    if (window.innerWidth < 768) {
        menu.style.display = 'none';
        hamburger.style.display = 'flex';

    } else {
        menu.style.display = 'flex';
        hamburger.style.display = 'none';
        tendina.style.display = 'none';
    }
}

window.addEventListener('resize', () => {
    updateMenuDisplay();
});
// window.addEventListener('resize', () => {
//     if (window.innerWidth < 768) {
//       menu.style.display = 'none';
//       hamburger.style.display='none';
//     } else {
//         menu.style.display = 'flex';
//         hamburger.style.display = 'none';
//     }
//   });
//   window.addEventListener('resize', () => {
//     if (window.innerWidth > 767) {
//       menu.style.display = 'flex';
//       hamburger.style.display='none';
//     } else {
//         menu.style.display ='none';
//         hamburger.style.display = 'flex';
//     }
//   });


hamburger.addEventListener('click', () => {
    if (tendina.style.display === 'none') {
        tendina.style.display = 'flex';

    } else {
        tendina.style.display = 'none';
    }
});

