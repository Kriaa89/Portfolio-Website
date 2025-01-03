console.log("page loaded");


function over(element) {
    element.style.transform = "scale(1.06)"; // scale is css property that allows you to change the size of an element
    element.style.boxShadow = "0 0 30px rgba(251, 191, 36, 0.5)"; // box-shadow is css property that allows you to add shadow to an element
    element.style.transition = "all 0.2s ease"; // transition is css property that allows you to change property values smoothly (over a given duration)
}

function out(element) {
    element.style.transform = "scale(1)";
    element.style.boxShadow = "none";
}


function buttonOver(element) {
    element.style.backgroundColor = "#fbbf24";
    element.style.color = "#1f2937";
    element.style.transform = "transLateY(-2px)";
    element.style.transition = "all 0.2s ease";
}

function buttonOut(element) {
    element.style.backgroundColor = "transparent";
    element.style.color = "white";
    element.style.transform = "transLateY(0)";
}

function buttonIn(element) {
    element.style.transform = "transLateY(-2px)";
    element.style.transition = "all 0.3s ease";
}

function buttonOute(element) {
    element.style.transform = "transLateY(0)";

}

function navOver(id) {
    document.getElementById(id).style.color = "#f59e0b";
    document.getElementById(id).style.transition = "all 0.3s ease"; // transition is css property that allows you to change property values smoothly (over a given duration)
}
function navOut(id) {
    document.getElementById(id).style.color = "#e2e8f0"; // we change the color of the element to #e2e8f0
}
// download the file when the download button is clikced
// explination
function downloadFile() {   // we create a function called downloadFile
    var link = document.createElement('a'); // we declare variable link and we create and we declare a document that he provide access to the document's content and then we create element called a whish is a hyperlink
    // we give it parenthese ('a') to call the elemnt a 
    link.href = './assets/images/Screenshot 2025-01-03 093933.png'; // we declare the link of the file that we want to download
    link.download = 'benslimen-wael-CV.jpg'; // we declare the name of the file that we want to download 
    document.body.appendChild(link); // we append the link to the body of the document 
    link.click(); // we click on the link 
    document.body.removeChild(link);// we remove the link from the boidy of the document
}

function expand(id) {
    document.querySelector(id).style.height = '70%' // we select the element with the id that we pass as a parameter and we change the height of the element to 70%
    document.querySelector(id).style.padding = '1rem' // we change the padding of the element to 1rem
    element.style.transition = "all 0.3s ease"; // we change the transition of the element to 0.3s ease ease is a timing function that allows you to change the speed of the transition
}
// ensures that the code runs only after the entire HTML document has been loaded
document.addEventListener("DOMContentLoaded", () => {

    // determine if objects are within the view
    const observer = new IntersectionObserver(entries => {
        // iterates through each element that is currently being observed by the IntersectionObserver.
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // add the .in-view class if the element is within the view
                entry.target.classList.add('in-view');
                return;
            }
            // add the .in-view class if the element is out of view
            entry.target.classList.remove('in-view');
        });
    });

    // Get all the elements with the .animate class applied
    const allAnimatedElements = document.querySelectorAll('.animate');

    // iterates through each of the selected elements and adds them to the IntersectionObserver's list of targets
    allAnimatedElements.forEach((element) => observer.observe(element));

});

