let url = "http://localhost:3000/users/"

let btn = document.getElementById("login");
if (btn) {
    btn.addEventListener('click', e => {
        e.preventDefault()
        console.log("aku di klik")
        let email = document.getElementById('email').value;
        let pw = document.getElementById('pw').value;

        fetch(url + 'signin/' + email)
            .then((res) => res.json())
            .then((data) => {
                if (pw != data.password) {
                    let err = document.getElementById('errPass')
                    err.innerHTML = "password salah";
                    return false;
                } else {
                    window.location.href = "/"
                }
            })
    })
}
