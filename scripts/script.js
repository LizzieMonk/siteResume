var offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider-container__slider-next').addEventListener('click', function(){
    offset = offset +350;
    if (offset>1050) offset=0;
    sliderLine.style.right = offset+'px';
})
document.querySelector('.slider-container__slider-prev').addEventListener('click', function(){
    offset = offset -350;
    if (offset<0) offset=1050;
    sliderLine.style.right = offset+'px';
})
