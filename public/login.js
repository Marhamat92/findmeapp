const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})


$('.formtext a').click(function() {
    $('.form').animate({ height: "toggle", opacity: "toggle" }, 2000);
});