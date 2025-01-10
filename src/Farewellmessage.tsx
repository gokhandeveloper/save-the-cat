export default function (language) {
    
    const options = [
        `Farewell ->, ${language}`,
        `it is gone nooo, ${language}`,
        `Oh no not this one , ${language}`,
        `R.I.P -->, ${language}`
    ];
    const randomIndex = Math.floor(Math.random()*options.length);
    return options[randomIndex];
}