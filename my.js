function changePage(src) {
    window.open(src, "_blank");
}

const progressData = {
    column1: [
        { width: '90%', color: 'deeppink' },
        { width: '85%', color: 'deeppink' },
        { width: '100%', color: 'deeppink' },
        { width: '97%', color: 'deeppink' },
        { width: '79%', color: 'deeppink' }
    ],
    column2: [
        { width: '75%', color: 'deeppink' },
        { width: '95%', color: 'deeppink' },
        { width: '89%', color: 'deeppink' },
        { width: '80%', color: 'deeppink' },
        { width: '100%', color: 'deeppink' }
    ]
};

function updateProgress() {
// Update column 1
    const column1Skills = document.querySelectorAll('.skills-column:nth-child(1) .skills-content .progress');
    column1Skills.forEach((progress, index) => {
        const span = progress.querySelector('.bar span');
        if (span) {
            span.style.width = progressData.column1[index].width;
            span.style.background = progressData.column1[index].color;
        }
    });

// Update column 2
    const column2Skills = document.querySelectorAll('.skills-column:nth-child(2) .skills-content .progress');
    column2Skills.forEach((progress, index) => {
        const span = progress.querySelector('.bar span');
        if (span) {
            span.style.width = progressData.column2[index].width;
            span.style.background = progressData.column2[index].color;
        }
    });
}

document.addEventListener('DOMContentLoaded', updateProgress);


let menuIcon =document.querySelector('#menu-icon')
let navbar =document.querySelector('.navbar')
let sections =document.querySelectorAll('section')
let navLinks =document.querySelectorAll('header nava')
 window.onscroll =()=>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id= sec.getAttribute('id')

        if(top >=offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            })
        }
    })
 }
menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}



function showMore() {
    let hiddenParagraph = document.getElementById("hidden-paragraph");
    
    if (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") {
        hiddenParagraph.style.display = "block";
        setTimeout(() => {
            hiddenParagraph.style.opacity = "1";
        }, 100);
    }
}


