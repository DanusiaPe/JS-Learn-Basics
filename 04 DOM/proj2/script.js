const center = document.querySelector(".center");
const allColors = document.querySelectorAll(".color");

const getBGColor = (selectedElement) => window.getComputedStyle(selectedElement).backgroundColor;

// const magicColorChanger = (element) => {
//     return element.addEventListener('mouseenter', () => {
//         center.style.background = getBGColor(element);;
//     });
// }

// for(const n of allColors){
//     magicColorChanger(n);
// }

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;;
    });
}

for(const n of allColors){
    magicColorChanger(n, getBGColor(n));
}