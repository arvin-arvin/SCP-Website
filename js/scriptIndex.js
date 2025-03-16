const toastLiveExample = document.getElementById('liveToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)


setTimeout(() => {
    toastBootstrap.show()
}, 1500 )

const toastLiveExample2 = document.getElementById('liveToast2')
const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)


setTimeout(() => {
    toastBootstrap2.show()
}, 8250 )

const name = document.getElementById("name");
const password = document.getElementById("password")
const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", () => {
    if (name.value == "User123" &&
    password.value == "passw0rd"){
        window.location.href = "index2.html"
    }
    else {
        alert("Incorrect, please refer to admin's instructions")
    }
})

name.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (name.value == "User123" &&
            password.value == "passw0rd"){
                window.location.href = "index2.html"
            }
            else {
                alert("Incorrect, please refer to admin's instructions")
            }
    }
});

password.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (name.value == "User123" &&
            password.value == "passw0rd"){
                window.location.href = "index2.html"
            }
            else {
                alert("Incorrect, please refer to admin's instructions")
            }
    }
});