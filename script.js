document.addEventListener('DOMContentLoaded', (event) => {
    const openButton = document.getElementById('openButton');
    const coverSection = document.getElementById('coverSection');
    const mainContent = document.getElementById('mainContent');
    const audio = document.getElementById('backgroundMusic');
    const body = document.body;
    openButton.addEventListener('click', (e) => {
        e.preventDefault();
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Musik berhasil diputar!');
            }).catch(error => {
                console.error('Gagal memutar musik setelah interaksi:', error);
            });
        }
        body.classList.remove('no-scroll');
        coverSection.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const Hari = document.getElementById('hari');
const Jam = document.getElementById('jam');
const Menit = document.getElementById('menit');

const targerTanggal = new Date("January 7 2026 00:00:00").getTime();

function timer() {
    const tanggalsaatini = new Date().getTime();
    const jarak = targerTanggal - tanggalsaatini;

    const hari = Math.floor(jarak / 1000 / 60 / 60 / 24);
    const jam = Math.floor(jarak / 1000 / 60 / 60) % 24;
    const menit = Math.floor(jarak / 1000 / 60) % 60;

    Hari.innerHTML = hari;
    Jam.innerHTML = jam;
    Menit.innerHTML = menit;
}

setInterval(timer, 1000);

window.addEventListener("load", function () {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Konfirmasi kehadiran berhasil terkirim!");
            })
    });
});
