window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // 計算透明度變化
    const forestTransitionStart = windowHeight / 2;
    const forestTransitionEnd = windowHeight * 1.5;

    const deforestedForest = document.querySelector('.deforested-forest');
    const fullForest = document.querySelector('.full-forest');

    if (scrollY > forestTransitionStart && scrollY < forestTransitionEnd) {
        const progress = (scrollY - forestTransitionStart) / (forestTransitionEnd - forestTransitionStart);
        fullForest.style.opacity = 1 - progress;
        deforestedForest.style.opacity = progress;
    } else if (scrollY >= forestTransitionEnd) {
        fullForest.style.opacity = 0;
        deforestedForest.style.opacity = 1;
    } else {
        fullForest.style.opacity = 1;
        deforestedForest.style.opacity = 0;
    }
});
