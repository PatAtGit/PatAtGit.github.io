    const items = document.querySelectorAll('.itemWrapper');

    items.forEach(item =>
    {
        item.addEventListener('mouseover', () =>
        {
            item.childNodes[1].classList.add('imgFadeOut');
        })

        item.addEventListener('mouseout', () =>
        {
            item.childNodes[1].classList.remove('imgFadeOut');

        })
    })