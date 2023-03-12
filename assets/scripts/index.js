const btnGithub = document.querySelector("#github-button");
const btnLinkedin = document.querySelector("#linkedin-button");
const btnTwitter = document.querySelector("#twitter-button");
const btnEmail = document.querySelector("#email-button");
const btnWebsite = document.querySelector("#web-button");

btnGithub.addEventListener('click', () => {
    window.open('https://github.com/spartalisdigital', '_blank');
});

btnLinkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/matheusgspartalis/', '_blank');
});

btnTwitter.addEventListener('click', () => {
    window.open('https://twitter.com/', '_blank');
});


btnEmail.addEventListener('click', () => {
    window.open('mailto:matheus@onmaq.com');
});

btnWebsite.addEventListener('click', () => {
    window.open('https://onmaq.com', '_blank');
});
