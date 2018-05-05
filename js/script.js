var sliderBar = document.getElementById('sliderBar');
var mask = document.getElementById('mask');
var slider = document.getElementById('slider');
var dropTarget = document.getElementById('dropTarget');

var sliderBarLeft;
var dropTargetRight;

//this is required so that the default image drag and drop functionality
//is disabled, if not, the mouseup disconnect of divMove will not occur
//ie. window.mouseUp will not fire during the default drag 
slider.ondragstart = function() {return false;};

slider.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseUp(e)
{
    window.removeEventListener('mousemove', moveSlider, true);
}

function mouseDown(e)
{
    sliderBarLeft = sliderBar.getBoundingClientRect().left;
    dropTargetRight = dropTarget.getBoundingClientRect().right; 
    window.addEventListener('mousemove', moveSlider, true);
}

function moveSlider(e)
{
    var sliderLeft = slider.getBoundingClientRect().left;
    var sliderRight = slider.getBoundingClientRect().right;

    if(sliderLeft >= sliderBarLeft && sliderRight < dropTargetRight)
    {
        slider.style.left = (e.clientX - sliderBarLeft) + 'px';
        mask.style.width = (e.clientX - sliderBarLeft) + 'px';
    }

    if(sliderRight >= dropTargetRight)
    {
        window.location.href = 'https://www.google.com';
    }
}

