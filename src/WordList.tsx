import wordlist from "./words.txt"
export default async function WordList() {

    const response = await fetch(wordlist);
    const text = await response.text();
    const options = text.split(/\r?\n/);
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}