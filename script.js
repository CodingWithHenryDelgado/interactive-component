var reviewbox = document.getElementById("review-box");
var submit = document.getElementById("submit");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var rating = 1;

function removeActiveClass() {
    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}

one.addEventListener("click", function() {
    removeActiveClass();
    one.classList.add("active");
    rating = 1;
})

two.addEventListener("click", function() {
    removeActiveClass();
    two.classList.add("active");
    rating = 2;
})

three.addEventListener("click", function() {
    removeActiveClass();
    three.classList.add("active");
    rating = 3;
})

four.addEventListener("click", function() {
    removeActiveClass();
    four.classList.add("active");
    rating = 4;
})

five.addEventListener("click", function() {
    removeActiveClass();
    four.classList.add("active");
    rating = 5;
})

submit.addEventListener("click", function() {
    reviewbox.innerHTML = `
        <div class="thanks-div">
            <img class='thankImage' src='./images/thanks.svg' alt='thanks' />
            <h3 class='given-rating'>You selected ${rating} out of 5</h3>
            <h1 class='thankYou'>Thank you!</h1>
            <p class='apperication'>We appericate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!</p>
        </div>
    `
})