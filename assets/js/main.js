/*======================== SHOW MENU ============================= */

function showMenu() {
    let theToggle = document.getElementById("nav-toggle");
    let theNav = document.getElementById("nav-menu");

    // Validate that variable exist

    if (theToggle && theNav) {
        theToggle.addEventListener('click', () => {

            // Add The show-menu class to the div

            theNav.classList.toggle('show-menu')
        })
    }
}

showMenu()



/*======================== REMOVE MENU MOBILE ==================================== */

let navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    let navMenu = document.getElementById('nav-menu')

    // when we click on each nav-link , we remove the show menu class

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// remove active class from all nav link items

const changeActiveItem = () => {
    navLink.forEach(item => {
        item.classList.remove('active');
    })
}


// Active Link

navLink.forEach(item => {
    item.addEventListener('click' , () => {
        changeActiveItem();
        item.classList.add('active');
    })
})


/*======================== SHOW SCROLL TOP ============================= */

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');

    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop)



/*======================== DARK LIGHT THEME ============================= */

let themeButton = document.getElementById('theme-button')
let darkTheme = 'dark-theme'
let iconTheme = 'bx-sun'

let selectedTheme = localStorage.getItem('selected-theme')
let selectedIcon = localStorage.getItem('selected-icon')


let getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'


// Validate if the user previously choose topic 

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon)

})




/*======================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ============================= */

function scaleCv() {
    document.body.classList.add('scale-cv')
}



/*========================  REMOVE THE SIZE WHEN THE CV IS DOWNLOAD ============================= */

function removeScale() {
    document.body.classList.remove('scale-cv')
}


/*========================  GENERATE PDF ============================= */

// pdf generated area

let areaCv = document.getElementById('area-cv')
let cv = document.querySelector('#area-cv');
let resumeButton = document.getElementById('resume-button')





// Function to call areaCv and html2pdf options
let opt = {
    margin: 0,
    filename: 'myResume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
}

function generatePDF() {

    html2pdf(areaCv)
    // html2pdf options


}




// when the button is clicked it exutes is the three function

resumeButton.addEventListener('click', () => {

    // 1 - the class .scale-cv is added to the body

    scaleCv()

    // 2 - the pdf is generated

    generatePDF()

    // 3 - the .scale-cv class is removed from the body after 5 seconds to return to normal size

    setTimeout(removeScale, 5000)

})