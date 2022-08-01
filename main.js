var slideIndex = 1;
var rotation = 0;
var click = 0;
document.getElementsByTagName("div")[10].style.marginTop = "-40px"
var id = window.location.href.replace(window.location.origin, "").replace("/", "").replace(".aspx", "")
if (id == "gallery") {
    document.getElementsByTagName("link")[0].href = ""
    window.addEventListener('load', (event) => {
        currentSlide(1);
    });
}
document.title = "Crack Apps - " + id;
document.getElementById(id).className = "active"
showSlides(slideIndex);
window.addEventListener('load', (event) => {
    rotation = 0;

});

//גלריה
//מקדם את התמונה
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//מראה אתץ התמונה הנוכחית
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//סיבוב תמונה
function rotateImg() {
    click += 1;
    rotation += 90;
    if (rotation === 360) {
        rotation = 0;
    }
    document.querySelector("#img").style.transform = `rotate(${rotation}deg)`;
    if (click == 4) {
        changecolorbg()
        document.getElementById("color").style.display = "none";

    }

}

//preview img
function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}

//preview name

function show_user() {

    var user = document.getElementById("username2").value;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    user = "hello " + user;
    ctx.fillStyle = 'white';
    ctx.fillText(user, 10, 30);
}

//change background
function changecolorbg() {
    var color = document.getElementById('color').value;
    var c = document.getElementById("colo").style.backgroundColor = color;
}

//בדיקות מייל
function contains_heb(str) {
    return (/[\u0590-\u05FF]/).test(str);
}

function just_eng_letters() {
    let email = document.getElementById("email").value;
    let flag = 1;
    for (let character of email) {
        if (contains_heb(character) || character == ' ' || character == ',') {
            flag = 0;
        }
    }
    if (!flag)
        alert("כתובת לא תכיל אותיות בעברית וסימנים אסורים אחרים )תו רווח, פסי")
}

function is_shtrusdel_after_third() {
    let email = document.getElementById("email").value;
    let index = 0;
    for (let character of email) {
        if (character == '@') {
            if (index <= 2 || index == email.length - 1) {
                alert("מיקום ה- @ לא יהיה לפני תו שלישי )השם הכי קצר שאנחנו מרשים( ולא תו אחרון")
            }
        }
        index += 1;
    }

}

function not_first_0r_last_dot() {
    let email = document.getElementById("email").value;

    if (email[0] == '.' || email[email.length - 1] == '.') {
        alert("הנקודה לא תהיה התו הראשון וגם לא התו האחרון בכתובת הדוא")
    }

}

function exact2_spaces_dot() {
    let email = document.getElementById("email").value;
    let counter = 0;
    let index = 0
    let flag = 0;
    for (let character of email) {

        if (flag != 0) {
            counter++;
        }
        if (character == '@') {
            flag = 1;
        }
        if (character == '.') {
            if (counter <= 2) {
                alert("יש נקודה אחרי ה- @ במרחק של לפחות 2 תווים")
            }
        }
        index += 1
    }

}

function exact1_dot() {
    let email = document.getElementById("email").value;
    let counter = 0;
    for (let character of email)
        if (character == '.')
            counter += 1
    if (counter == 0)
        alert("מייל לא יכול להכיל יותר נקודה אחד")

}

function exact1_shtrusdel() {
    let email = document.getElementById("email").value;
    let counter = 0;
    for (let character of email)
        if (character == '@')
            counter += 1
    if (counter != 1)
        alert("מייל לא יכול להכיל יותר משטודל אחד")

}

function check_size() {
    var email = document.getElementById("email").value;

    if (email.length < 6) {
        alert("מייל לא יכול להזין פחות מ6 תווים")
    }
}

//בדיקה האם סומן מין מסוים
function fillgender() {
    var gender = document.getElementsByName("gender");
    if (!gender[0].checked && !gender[1].checked) {
        alert("לא סומן שום מגדר")
    }
}

//בדיקה אם נבחר תאריך
function havedate() {
    var date = document.getElementById('date').value;
    if (date == "") {
        alert("לא נבחר תאריך")
    }
}
//בדיקה אם נבחר שם
function havefname() {
    var fname = document.getElementById('fname').value;
    if (fname == "") {
        alert("לא נבחר שם")
    }
}
//בדיקה אם נבחר שם משפחה
function havelname() {
    var lname = document.getElementById('lname').value;
    if (lname == "") {
        alert(" לא נבחר שם משפחה")
    }
}
// בדיקה אם נבחר שם משתמש
function haveuname() {
    var uname = document.getElementById('username2').value;
    if (uname == "") {
        alert("לא נבחר שם משתמש")
    }
}
// בדיקה אם נבחר סיסמא
function havepass() {
    var pass = document.getElementById('password2').value;
    if (pass == "") {
        alert("לא נבחר סיסמא")
    }
}
// show password
function showpass() {
    var x = document.getElementById("password2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function is_valid() {
    check_size();
    exact1_shtrusdel();
    is_shtrusdel_after_third();
    exact2_spaces_dot();
    exact1_dot();
    not_first_0r_last_dot();
    just_eng_letters();
    fillgender();
    havedate();
    show_user();
    havefname();
    havelname();
    haveuname();
    havepass();
}

class center1 extends HTMLElement {
    constructor() {
        super();
        var x = this.style;
        var width = screen.availWidth;
        var t = width / 2;
        console.log(width)
        x.marginLeft = t + "px";

        const myArray = this.textContent.split("/n");
        var b = 10;
        for (var i = 0; i < myArray.length; i++) {
            console.log(myArray[i]);
            if (i == 0) {
                this.textContent = myArray[i];
                document.write("<br>");

            } else {
                this.textContent += myArray[i];
                document.write("<br>");
            }
        }
        //  x.marginLeft = "49%";

    }
}

customElements.define('center-me', center1)