const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


function changeAboutText(content) {

    var aboutDiv = document.getElementById("about-text");
    
    if (content == "experinece") {
        aboutDiv.innerHTML = "<p>Something just like this… about</p>";
    } else if (content == "education-overview"){
        aboutDiv.innerHTML = "<p>Something just like this… about</p>";
    } else if (content == "education-computerScience"){
        aboutDiv.innerHTML = "<p>Something just like this… about</p>";
    } else if (content == "education-pedagogy"){
        aboutDiv.innerHTML = "<p>Something just like this… about</p>";
    } else if (content == "education-upperSecondary"){
        aboutDiv.innerHTML = "<p>Something just like this… about</p>";
    } else if (content == "languages"){
        aboutDiv.innerHTML = "<p>Something just like this… about</p>";
    } else if (content == "it"){
        aboutDiv.innerHTML = "<p>Something just like this… about</p>";
    } else {
        aboutDiv.innerHTML = "<p>This is the initial text</p>";
    }
}