const button_open = document.getElementById("modal")
const button_reset = document.getElementById("reset")
const button_submit = document.getElementById("submit")
const modal = document.querySelector("dialog")

button_open.onclick = function () {
    modal.showModal()
}

button_reset.onclick = function(){
    modal.close()
}

button_submit.onclick = function(){
    modal.close()
}