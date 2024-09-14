
// function 1
let education = document.getElementById("toogle1") as HTMLButtonElement;
let div1 = document.getElementById("div1") as HTMLDivElement;

education.addEventListener("click", function () {
  if (div1.style.display === "none") {
    div1.style.display = "block";
    this.textContent = "Hide Education";
  } else {
    div1.style.display = "none";
    this.textContent = " Show Education";
  }
});

//function 2 skills

let skill = document.getElementById("toogle2") as HTMLButtonElement;
let div2 = document.getElementById("div2") as HTMLDivElement;

skill.addEventListener("click", function () {
  if (div2.style.display === "none") {
    div2.style.display = "block";
    this.textContent = "Hide Skills";
  } else {
    div2.style.display = "none";
    this.textContent = "Show Skills";
  }
});

// function 3 experience

let experience = document.getElementById("toogle3") as HTMLButtonElement;
let div3 = document.getElementById("div3") as HTMLDivElement;

experience.addEventListener("click", function () {
  if (div3.style.display === "none") {
    div3.style.display = "block";
    this.textContent = "Hide Experience";
  } else {
    div3.style.display = "none";
    this.textContent = "Show Experience";
  }
});

// DYNAMIC RESUME

const generate = document.getElementById("generate") as HTMLDivElement;
const displayresume = document.getElementById("displayresume") as HTMLDivElement;
const shareable=document.getElementById('shareablecontainer') as HTMLDivElement;
const shareablelink=document.getElementById('shareablelink') as HTMLAnchorElement;
const downloadpdf=document.getElementById('downloadpdf') as HTMLButtonElement;


generate.addEventListener('click', (event: Event) => {
  event.preventDefault();

  // collect values



  const name1 = (document.getElementById("name") as HTMLInputElement).value;
  const number = (document.getElementById("number") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;

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

    const shareableURL=
    `${window.location.origin}?name1 =${encodeURIComponent(name1)}`;

    // display the shareable link
    shareable.style.display='block';
    shareablelink.href =shareableURL;
    shareablelink.textContent = shareableURL;
});


downloadpdf.addEventListener('click', ()=>{
  window.print();
});

window.addEventListener('DOMContentLoaded', ()=>{
  const urlparas=new URLSearchParams(window.location.search);
  const name1= urlparas.get('name1');


   if(name1){
    const savedresumedata= localStorage.getItem('name1');

    if(savedresumedata){
      const resumeData=JSON.parse(savedresumedata);
      (document.getElementById('name1')as HTMLInputElement).value= resumeData.name1;
      (document.getElementById('number')as HTMLInputElement).value= resumeData.number;
      (document.getElementById('email')as HTMLInputElement).value= resumeData.email;
      (document.getElementById('education')as HTMLInputElement).value= resumeData.education;
      (document.getElementById('skills')as HTMLInputElement).value= resumeData.skills;
      (document.getElementById('experience')as HTMLInputElement).value= resumeData.experience;
    }
   }

});


