fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => {
        const comments = data.slice(0, 10)

        let commit = document.querySelectorAll('.commit')

        commit.forEach((el, num) => {
            
            if (comments[num]) {
    
                el.textContent = comments[num].body;
            }
            
        })
    })

let btn = document.querySelector('.open-modal')
let modal = document.querySelector('.modal-container')
let Open = false

btn.onclick = () => {
    if (!Open) {
        // console.log('lokoihjd');
        modal.style.display = 'flex'
        btn.innerHTML = 'close'
        Open = true
    } else {
        modal.style.display = 'none'
        btn.innerHTML = 'open'
        Open = false
    }
}
