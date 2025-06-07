function tampilkanIsi(halaman) {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));

    const targetLink = Array.from(links).find(link => link.textContent.toLowerCase() === halaman.toLowerCase());
    if (targetLink) targetLink.classList.add('active');

    const isiHalaman = document.querySelectorAll('.isi-halaman');
    isiHalaman.forEach(div => div.classList.remove('aktif'));

    document.getElementById(halaman).classList.add('aktif');
}
