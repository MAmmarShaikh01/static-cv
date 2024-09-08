let btn = document.querySelector('button') as HTMLButtonElement;
let skills = document.querySelector('.skills') as HTMLDivElement;

btn.addEventListener('click', () => {
    skills.classList.toggle('disappear');
})