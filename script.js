document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

function startGame() {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    story.innerHTML = "<p>Bem-vindo à sua jornada na programação! Para começar, escolha sua área de interesse:</p>";
    choices.innerHTML = `
        <button onclick="chooseFrontEnd()">Front-End</button>
        <button onclick="chooseBackEnd()">Back-End</button>
    `;
}

function chooseFrontEnd() {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    story.innerHTML = "<p>Você escolheu Front-End! Agora, escolha a tecnologia que deseja aprender:</p>";
    choices.innerHTML = `
        <button onclick="learnReact()">React</button>
        <button onclick="learnVue()">Vue</button>
    `;
}

function chooseBackEnd() {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    story.innerHTML = "<p>Você escolheu Back-End! Agora, escolha a tecnologia que deseja aprender:</p>";
    choices.innerHTML = `
        <button onclick="learnCSharp()">C#</button>
        <button onclick="learnJava()">Java</button>
    `;
}

function learnReact() {
    continueJourney('Front-End com React');
}

function learnVue() {
    continueJourney('Front-End com Vue');
}

function learnCSharp() {
    continueJourney('Back-End com C#');
}

function learnJava() {
    continueJourney('Back-End com Java');
}

function continueJourney(path) {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    story.innerHTML = `<p>Você escolheu ${path}! Agora, escolha como deseja continuar sua jornada:</p>`;
    choices.innerHTML = `
        <button onclick="specialize('${path}')">Especializar</button>
        <button onclick="becomeFullstack('${path}')">Tornar Fullstack</button>
    `;
}

function specialize(path) {
    chooseTechnologies(`Especialista em ${path}`);
}

function becomeFullstack(path) {
    chooseTechnologies(`Fullstack com base em ${path}`);
}

function chooseTechnologies(path) {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    story.innerHTML = `<p>Você escolheu se tornar ${path}. Agora, vamos adicionar tecnologias à sua lista de aprendizado.</p>`;
    choices.innerHTML = `
        <button onclick="addTechnology('${path}')">Adicionar Tecnologia</button>
    `;
}

function addTechnology(path) {
    const technology = prompt("Qual tecnologia você gostaria de aprender?");
    const story = document.getElementById('story');

    if (technology) {
        story.innerHTML += `<p>Você adicionou ${technology} à sua lista de tecnologias!</p>`;
        const more = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
        if (more) {
            addTechnology(path);
        } else {
            story.innerHTML += `<p>Parabéns! Você completou sua jornada como ${path}.</p>`;
        }
    }
}
