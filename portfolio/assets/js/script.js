const techStack = document.querySelector(".techStack");
fetch("/portfolio/components/component/teckStack.html")
    .then(res => res.text())
    .then(data => {
        techStack.innerHTML = data
    });

const contentText = document.querySelector(".content-text");
fetch("/portfolio/components/component/contentText.html")
.then(res=>res.text())
.then(data=>{
    contentText.innerHTML = data
});