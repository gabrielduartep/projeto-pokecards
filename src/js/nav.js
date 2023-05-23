const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    const alturaPagina = window.scrollY
    if (alturaPagina < 10) nav.classList.remove('scroll')
    else nav.classList.add('scroll')
})
