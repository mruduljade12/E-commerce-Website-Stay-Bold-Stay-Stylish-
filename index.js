//login and signup button
const signUpButton = document.getElementById("signUpButton");
const loginButton = document.getElementById("loginButton");

const goToLoginPage = document.getElementById("goToLoginPage");
const goToRegisterPage = document.getElementById("goToRegisterPage");
const rCancel = document.getElementById("rCancel");
const lCancel = document.getElementById("lCancel");

//registeration page
const registerPage = document.getElementById("registerPage");

//login page
const loginPage = document.getElementById("loginPage");


//left scroll of the products
const recentBuyItems = document.getElementById("recentBuyItems");
const newReleases = document.getElementById("newReleases");
const popularItems = document.getElementById("popularItems");

//check box for terms accepted
const isConditionAccepted = document.getElementById("isConditionAccepted");


//left scroll operations
recentBuyItems.addEventListener("wheel", (e) => {
    e.preventDefault();
    recentBuyItems.scrollLeft += e.deltaY;
});

newReleases.addEventListener("wheel", (e) => {
    e.preventDefault();
    newReleases.scrollLeft += e.deltaY;
});

popularItems.addEventListener("wheel", (e) => {
    e.preventDefault();
    popularItems.scrollLeft += e.deltaY;
});


//login and sign up button operations
signUpButton.addEventListener("click", (event) => {
    event.preventDefault();

    registerPage.style.display = "flex";
    loginPage.style.display = "none";
});

loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    registerPage.style.display = "none";
    loginPage.style.display = "flex";
});

goToRegisterPage.addEventListener("click", (event) => {
    event.preventDefault();

    registerPage.style.display = "flex";
    loginPage.style.display = "none";
});

goToLoginPage.addEventListener("click", (event) => {
    event.preventDefault();

    registerPage.style.display = "none";
    loginPage.style.display = "flex";
});

lCancel.addEventListener("click", (event) => {
    event.preventDefault();

    loginPage.style.display = "none";
});

rCancel.addEventListener("click", (event) => {
    event.preventDefault();

    registerPage.style.display = "none";
});


//check terms and conditions are accepted
isConditionAccepted.addEventListener("click", () => {
    if (isConditionAccepted.checked) {
        console.log("checked");
    }
    else {
        console.log("checkbox is not checked");
    }
});