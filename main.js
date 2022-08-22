var c = 0

function dark() {
    if (c % 2 == 0) {
        document.documentElement.style.setProperty('--background-color', '#696969')
        document.documentElement.style.setProperty('--text-color', '#BEBEBE')
        document.getElementById('dark-mode').src = "/portfolio/Icons/light-mode.png"
        c++
    } else {
        document.documentElement.style.setProperty('--background-color', '#e2e7eb')
        document.documentElement.style.setProperty('--text-color', '#black')
        document.getElementById('dark-mode').src = "/portfolio/Icons/dark-mode.png"
        c++
    }}


let pt_br = document.querySelector('#btn-br')
let en_us = document.querySelector('#btn-en')

pt_br.addEventListener('click', () => {
    document.documentElement.style.setProperty('--btn-pt-br', '#718c99')
    document.documentElement.style.setProperty('--btn-en-us', 'transparent')

    document.querySelector('h1').innerHTML = "Olá, meu nome é <span>Yan</span>."
    document.querySelector('h3').innerHTML = "Sou um Desenvolvedor <span>Front-End</span> Junior."
    document.querySelector('h4').innerHTML = "Bem-vindo ao meu <span>portfólio</span>!"

    document.querySelector('#about').innerHTML = "Sobre mim"
    document.querySelector('.bottom-left-text').innerHTML = "Eu sou formado em engenharia pela UFRGS. Há um tempo comecei a estudar programação e ela realmente me encantou. Posso oferecer códigos limpos, assim como maior interatividade com as animações web."
    document.querySelector('#resume').innerHTML = "Currículo"

    document.querySelector('#projects').innerHTML = "Projetos"
    document.querySelector('#proj-1').innerHTML = "Criado para introduzir a marca Patchwork com Arte. Desenvolvido para ser totalmente reponsivo. Criado utilizando Bootstrap, Javacsript, HTML e CSS."
    document.querySelector('#proj-2').innerHTML = "Parte da Imersão Dados da Escola Alura, criado para introduzir os alunso na análise de dados e data science. Totalmente criado utilizando o Pandas do Python. Todos as etapas do projeto estão comentados no GitHub."
    document.querySelector('#proj-3').innerHTML = "Um dos meus primeiros projetos utilizando Python. Extremamente bom para a prática de orientação ao objeto. Optei pela criação de classes e métodos para cada uma das etapas a fim de clarear o código e praticar."
    document.querySelector('#proj-4').innerHTML = "Tanto a calculadora quanto o cronômetro foram desenvolvidos utilizando Javascript. O design simplista foi feito utilizando HTML e CSS."

    document.querySelector('.resume-button').innerHTML = "Currículo"
})

en_us.addEventListener('click', () => {
    document.documentElement.style.setProperty('--btn-pt-br', 'transparent')
    document.documentElement.style.setProperty('--btn-en-us', '#718c99')

    document.querySelector('h1').innerHTML = "Hi there, my name is <span>Yan</span>."
    document.querySelector('h3').innerHTML = "I'm a <span>Front-End</span> Junior Developer."
    document.querySelector('h4').innerHTML = "Welcome to my <span>portfolio</span>!"

    document.querySelector('#about').innerHTML = "About me"
    document.querySelector('.bottom-left-text').innerHTML = "      I am an engineer graduate from UFRGS. A while ago I started studying programming and it really enchanted me. I can provide clean code, as well as more interactive with web animations."
    document.querySelector('#resume').innerHTML = "Resume"
    
    document.querySelector('#projects').innerHTML = "Projects"
    document.querySelector('#proj-1').innerHTML = "Designed to introduce the brand Patchwork com Arte. Created to be fully responsive and built using Bootstrap, Javascript, HTML and CSS."
    document.querySelector('#proj-2').innerHTML = "Part of the Alura Data Immersion, designed to induce students into data science and data analysis. Fully created using Python Pandas. All the project steps are commented on my GitHub."
    document.querySelector('#proj-3').innerHTML = "One of my first projects using Python. Extremely good project to practice OOP. I chose to create classes and methods for each step to make the code more clear and also to practice. "
    document.querySelector('#proj-4').innerHTML = "Both calculator and cronometer were created usign Javascript. The simplistic design was made using HTML and CSS."

    document.querySelector('.resume-button').innerHTML = "Resume"

})