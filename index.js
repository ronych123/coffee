function scrollToHeight(targetHeight) {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    function scroll() {
        currentPosition = lerp(currentPosition, targetHeight, 0.1); // Adjust the interpolation factor as needed
        window.scrollTo(0, currentPosition);

        if (Math.abs(currentPosition - targetHeight) > 1) {
            window.requestAnimationFrame(scroll);
        }
    }

    window.requestAnimationFrame(scroll);
}
function about () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 711) {
        scrollToHeight(569);
    } else {
        scrollToHeight(549);
    }
}

function menu () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 711) {
        scrollToHeight(1049);
    } else {
        scrollToHeight(1450);
    }
}

function products () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 1140) {
        scrollToHeight(1759);
    } else if(pageWidth <= 1140 && pageWidth > 773){
        scrollToHeight(2090);
    } else if(pageWidth <= 773 && pageWidth > 711){
        scrollToHeight(3055);
    } else {
        scrollToHeight(3455);
    }
}

function review () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 1140) {
        scrollToHeight(2369);
    } else if(pageWidth <= 1140 && pageWidth > 773){
        scrollToHeight(3265);
    } else if(pageWidth <= 773 && pageWidth > 711){
        scrollToHeight(4735);
    } else {
        scrollToHeight(5140);
    }
}

function contact () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 1140) {
        scrollToHeight(2903);
    } else if(pageWidth <= 1140 && pageWidth > 773){
        scrollToHeight(4150);
    } else if(pageWidth <= 773 && pageWidth > 711){
        scrollToHeight(6035);
    } else {
        scrollToHeight(6430);
    }
}

function blogs () {
    let pageWidth = window.innerWidth;
    if(pageWidth > 1140) {
        scrollToHeight(3409);
    } else if(pageWidth <= 1140 && pageWidth > 773){
        scrollToHeight(4910);
    } else if(pageWidth <= 773 && pageWidth > 711){
        scrollToHeight(6815);
    } else {
        scrollToHeight(7215);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let openMenuButton = document.querySelector('.openMenu');
    let closeMenuButton = document.querySelector('.closeMenu');
    let navMenu = document.querySelector('.nav');

    let menuOpen = false;

        openMenuButton.addEventListener('click', function () {
            if (!menuOpen) {
                navMenu.style.right = '0';
                closeMenuButton.style.display = 'flex';
                menuOpen = true;
            } else {
                navMenu.style.right = '-60%';
                closeMenuButton.style.display = 'none';
                menuOpen = false;
            }
        });

        closeMenuButton.addEventListener('click', function () {
            navMenu.style.right = '-60%';
            openMenuButton.style.display = 'flex';
            closeMenuButton.style.display = 'none';
            menuOpen = false;
        });

});
