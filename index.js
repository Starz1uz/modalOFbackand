fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => {
        const comments = data.slice(0, 10);

        let commitElements = document.querySelectorAll('.commit');

        commitElements.forEach((el, index) => {
            if (comments[index]) {
                el.textContent = comments[index].body;
            }
        });
    })

let btn = document.querySelector('.open-modal')
let modal = document.querySelector('.modal-container')
let isOpen = false;

btn.onclick = () => {
    if (!isOpen) {
        // console.log('lokoihjd');
        modal.style.display = 'flex';
        btn.innerHTML = 'close';
        isOpen = true;
    } else {
        modal.style.display = 'none';
        btn.innerHTML = 'open';
        isOpen = false;
    }
};