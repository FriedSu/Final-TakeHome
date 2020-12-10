const form = document.querySelector('.grid')
form.style.display = 'none'
const image = document.querySelector(".displayed-img")


function formReveal() {
    form.style.display = 'grid'
}

function eye() {
    image.src='images/pic1.jpg'
    image.alt='eye'
}

function rock() {
    image.src='images/pic2.jpg'
    image.alt='rock'
}

function flower() {
    image.src='images/pic3.jpg'
    image.alt='flower'
}

function egypt() {
    image.src='images/pic4.jpg'
    image.alt='egypt'
}

function bug() {
    image.src='images/pic5.jpg'
    image.alt='bug'
}

function submit() {
    const mainImg = image.alt
    const effectInput = document.querySelector("input");

    
    if (effectInput.value == 'blur' ) {
        
        
        if (mainImg == 'eye'){
            image.src='images/pic1B.jpg';
        } else if (mainImg == 'rock'){
            image.src='images/pic2B.jpg';
        } else if (mainImg == 'flower'){
            image.src='images/pic3B.jpg';
        } else if (mainImg == 'egypt'){
            image.src='images/pic4B.jpg';
        } else {
            image.src='images/pic5B.jpg';
        }

    } else {
        alert("'blur' is the only effect available")
    }

    document.querySelector("input").value = ""
}
