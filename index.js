const ratingEl = document.querySelectorAll("#rating-el")
let selectrating = ""
const buttonEl = document.getElementById("button-el")
let containerEl = document.getElementById("container")
let selectedNoneEl = document.getElementById("none-el")

ratingEl.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        removeActive()
        selectrating = `${(e.target.innertext || e.target.parentNode.innertext)}`
        e.target.classList.add("active")
        e.target.parentNode.classList.add("active")
        buttonEl.addEventListener("click", ()=>
        {
            if (selectrating) {
                containerEl.textContent = "Thanks for giving a feedback"
            }
            else{
                selectedNoneEl.textContent = "Please select one of the above!"
            }
        })
    })
})

function removeActive() {
    ratingEl.forEach((rating) => {
        rating.classList.remove("active")
    })
}



