const printTerminalLogo = () => {
    var logo = `
    _____ _             _                               
    / ____| |           | |            /\                
   | (___ | |_ ___   ___| | _____     /  \   _ __  _ __  
    \___ \| __/ _ \ / __| |/ / __|   / /\ \ | '_ \| '_ \ 
    ____) | || (_) | (__|   <\__ \  / ____ \| |_) | |_) |
   |_____/ \__\___/ \___|_|\_\___/ /_/    \_\ .__/| .__/ 
                                            | |   | |    
                                            |_|   |_|    
    `;
    console.log(logo);
}

const printVersion = () => {
    let version = require('./package.json').version
    console.log(`v${version}`);
}

const getColor = (num) => {
    if (num == 0) {
        return '#999'
    }
    if (num > 5) {
        return '#cccc00'
    }
    if (num > 4) {
        return '#567823'
    }
    if (num > 3) {
        return '#638a28'
    }
    if (num > 2) {
        return '#719e2e'
    }
    if (num > 1) {
        return '#8ec639'
    }
    if (num > 0.35) {
        return '#a4d161'
    }
    if (num > 0) {
        return '#d2e8b0'
    }
    if (num < -5) {
        return '#990073'
    }
    if (num < -4) {
        return '#990000'
    }
    if (num < -3) {
        return '#e60000'
    }
    if (num < -1) {
        return '#ff1a1a'
    }
    if (num < -0.35) {
        return '#ff4d4d'
    }
    if (num < -0) {
        return '#ff9999'
    }
}

module.exports = {
    printTerminalLogo: printTerminalLogo,
    printVersion: printVersion,
    getColor: getColor
};