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
    }

}