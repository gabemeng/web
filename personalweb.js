
var aboutTab = document.getElementById('aboutTab');
var resumeTab = document.getElementById('resumeTab');
var projectTab = document.getElementById('projectsTab');
var contactTab = document.getElementById('contactTab');
var pic = document.getElementById('pic');

function openPage(event) {
  //document.location.href = "about.html";
  var element = document.getElementById(event.target.id);
  element.style.backgroundColor = "LightSeaGreen";
  element.style.color = "white";
  pic.style.marginLeft = "5%";
  pic.style.paddingTop = "8%";
  if (element == aboutTab) {
    aboutPage();
  }
  if (element == resumeTab) {
    resumePage();
  }
  if (element == projectTab) {
    projectPage();
  }
  if (element == contactTab) {
    contactPage();
  }
}
function aboutPage() {
  resumeTab.style.backgroundColor = "whitesmoke";
  resumeTab.style.color = "black";
  projectTab.style.backgroundColor = "whitesmoke";
  projectTab.style.color = "black";
  contactTab.style.backgroundColor = "whitesmoke";
  contactTab.style.color = "black";
}
function resumePage() {
  aboutTab.style.backgroundColor = "whitesmoke";
  aboutTab.style.color = "black";
  projectTab.style.backgroundColor = "whitesmoke";
  projectTab.style.color = "black";
  contactTab.style.backgroundColor = "whitesmoke";
  contactTab.style.color = "black";
}
function projectPage() {
  aboutTab.style.backgroundColor = "whitesmoke";
  aboutTab.style.color = "black";
  resumeTab.style.backgroundColor = "whitesmoke";
  resumeTab.style.color = "black";
  contactTab.style.backgroundColor = "whitesmoke";
  contactTab.style.color = "black";
}
function contactPage() {
  aboutTab.style.backgroundColor = "whitesmoke";
  aboutTab.style.color = "black";
  projectTab.style.backgroundColor = "whitesmoke";
  projectTab.style.color = "black";
  resumeTab.style.backgroundColor = "whitesmoke";
  resumeTab.style.color = "black";
}
