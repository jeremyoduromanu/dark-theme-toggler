let toggler = document.getElementById('toggler');

toggler.addEventListener('click', toggleDarkTheme);

function toggleDarkTheme(){
    toggler.classList.toggle('active');
    let body = document.getElementsByTagName('body')[0];

    if (toggler.classList.contains('active')){
    body.style.backgroundColor='black';

} else {
        body.style.backgroundColor='white';
    };

    

}

