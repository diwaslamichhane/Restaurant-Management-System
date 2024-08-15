// PRELOADER 

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
});

// HOME SLIDER SECTION

const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach(function(slide, index){
    slide.style.left = `${index*100}%`
    slide.style.transition = "transform 2s ease";
})

var goNext = document.querySelector(".next_slide").addEventListener("click", function(){
    counter ++;
    if(counter >= slides.length){
        counter=0;
    }
    slideImage();
});

var goPrev = document.querySelector(".prev_slide").addEventListener("click", function(){
    counter --;
    if(counter < 0){
        counter = slides.length -1;
    }
    slideImage();
});

const slideImage = function(){
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}
setInterval(function() {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideImage();
}, 4000);

// View Menu Button Event

document.querySelector('.home_menu').addEventListener('click', function(){
    document.querySelector('#menu').scrollIntoView({
        behavior: 'smooth'
    });
});

// Find Table Button Event 

document.querySelectorAll('.find-table').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//Form Submission 

function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const persons = document.getElementById('persons').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    if (name === '') {
        alert('Name is required.');
        return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    if (persons === '') {
        alert('Please select the number of persons.');
        return false;
    }

    if (date === '') {
        alert('Please select a date.');
        return false;
    }

    if (time === '') {
        alert('Please select a time.');
        return false;
    }

    if (message === '') {
        alert('Please enter a message.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}
