"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function 1
let education = document.getElementById("toogle1");
let div1 = document.getElementById("div1");
education.addEventListener("click", function () {
    if (div1.style.display === "none") {
        div1.style.display = "block";
        this.textContent = "Hide Education";
    }
    else {
        div1.style.display = "none";
        this.textContent = " Show Education";
    }
});
//function 2 skills
let skill = document.getElementById("toogle2");
let div2 = document.getElementById("div2");
skill.addEventListener("click", function () {
    if (div2.style.display === "none") {
        div2.style.display = "block";
        this.textContent = "Hide Skills";
    }
    else {
        div2.style.display = "none";
        this.textContent = "Show Skills";
    }
});
// function 3 experience
let experience = document.getElementById("toogle3");
let div3 = document.getElementById("div3");
experience.addEventListener("click", function () {
    if (div3.style.display === "none") {
        div3.style.display = "block";
        this.textContent = "Hide Experience";
    }
    else {
        div3.style.display = "none";
        this.textContent = "Show Experience";
    }
});
// DYNAMIC RESUME
const generate = document.getElementById("generate");
const displayresume = document.getElementById("displayresume");
const shareable = document.getElementById('shareablecontainer');
const shareablelink = document.getElementById('shareablelink');
const downloadpdf = document.getElementById('downloadpdf');
generate.addEventListener('click', (event) => {
    event.preventDefault();
    // collect values
    const name1 = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills")
        .value;
    const experience = document.getElementById("experience").value;
    // Save form data in localStorage with the name1 as the key
    const resumeData = {
        name1,
        number,
        email,
        education,
        experience,
        skills,
    };
    localStorage.setItem(name1, JSON.stringify(resumeData));
    // resume content dynamiclly
    const resumeDynamicly = `
 
<h1>My Resume</h1>
<h3>Personal Information</h3><br>
<p contenteditable="true">${name1}</p>
<p contenteditable="true">${email}</p>
<p contenteditable="true">${number}</p><br>

<h3>Education</h3><br>
<p contenteditable="true">${education}</p><br>

<h3>Skills</h3><br>
<p contenteditable="true">${skills}</p><br>

<h3>Experience</h3><br>
<p contenteditable="true">${experience}</p><br>
`;
    // generted display resume
    displayresume.innerHTML = resumeDynamicly;
    const shareableURL = `${window.location.origin}?name1 =${encodeURIComponent(name1)}`;
    // display the shareable link
    shareable.style.display = 'block';
    shareablelink.href = shareableURL;
    shareablelink.textContent = shareableURL;
});
downloadpdf.addEventListener('click', () => {
    window.print();
});
window.addEventListener('DOMContentLoaded', () => {
    const urlparas = new URLSearchParams(window.location.search);
    const name1 = urlparas.get('name1');
    if (name1) {
        const savedresumedata = localStorage.getItem('name1');
        if (savedresumedata) {
            const resumeData = JSON.parse(savedresumedata);
            document.getElementById('name1').value = resumeData.name1;
            document.getElementById('number').value = resumeData.number;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('skills').value = resumeData.skills;
            document.getElementById('experience').value = resumeData.experience;
        }
    }
});
