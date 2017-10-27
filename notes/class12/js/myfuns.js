let myfun = function(event) {
    let input = window.document.querySelector("input")
    let div = window.document.querySelector("div")
    div.innerHTML += input.value
}

b.addEventListener("click", myfun)