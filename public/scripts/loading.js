let spinnerWrapper = document.querySelector('.spinner-wrapper')
setTimeout(() =>{
    hidePreloader();
}, 100)

function hidePreloader() {
    spinnerWrapper.style.display = "none"
}
let counts = setInterval(updated, 40)
let upto = 0;
let width = 0;
function updated() {
    const count = document.querySelector('#counter')
    const hr = document.querySelector('#hr')
    ++upto;
    count.innerHTML = "LOADING" + upto + "%"
    hr.style.width = upto + "%"
    if(upto ===100) {
        clearInterval(counts)
        count.innerHTML = "DONE"
    }
}



// window.addEventListener('load', () =>{
// spinnerWrapper.parentElement.removeChild(spinnerWrapper);
// })