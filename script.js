const res = fetch('https://randomuser.me/api/ ')
res.then((info) => {
    let prom = info.json();
    prom.then((data) => {
        let img = document.getElementById('img')
        let h2 = document.getElementById('heading')
        let para = document.getElementById('para')
        let ageBtn = document.getElementById('age')
        let emailBtn = document.getElementById('email')
        let phoneBtn = document.getElementById('phone')
        let getUserBtn = document.getElementById('getUser')
        ageBtn.addEventListener('click', () => {
            para.textContent = data.results[0].registered.age;
        })
        emailBtn.addEventListener('click', () => {
            para.textContent = data.results[0].email;
        })
        phoneBtn.addEventListener('click', () => {
            para.textContent = data.results[0].phone;
        })
        getUserBtn.addEventListener('click', () => {
            location.reload();
        })
        h2.textContent = data.results[0].name.first + " " + data.results[0].name.last;
        img.src = data.results[0].picture.large
        img.alt = 'error'
    })
})

