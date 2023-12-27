document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a, #telefon, #email');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetSection = document.getElementById(targetId.substring(1));
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                window.open(this.href, '_blank');
            }
        });
    });

    const telefonLink = document.getElementById('telefon');
    telefonLink.addEventListener('click', function (event) {
        event.preventDefault();
        const telefonNumarasi = '0543 431 56 48';
        kopyalaVeBilgilendir(telefonNumarasi, event.clientX, event.clientY);
    });

    const emailLink = document.getElementById('email');
    emailLink.addEventListener('click', function (event) {
        event.preventDefault();
        const email = 'bborukk@gmail.com';
        kopyalaVeBilgilendir(email, event.clientX, event.clientY);
    });

    function kopyalaVeBilgilendir(deger, x, y) {
        const textarea = document.createElement('textarea');
        textarea.value = deger;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        const uyarı = document.getElementById('uyari');
        uyarı.innerHTML = `<p>${deger} kopyalandı!</p>`;
        uyarı.style.left = `${x}px`;
        uyarı.style.top = `${y}px`;
        uyarı.style.display = 'block';

        setTimeout(() => {
            uyarı.style.display = 'none';
        }, 2000);
    }
});