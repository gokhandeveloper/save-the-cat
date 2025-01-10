import {useId} from "react";

export default function Word(props) {
    
    let chars:Array<string> = props.word.split("");
    return chars.map(char => {
        let id = useId();
        if(props.guessedLetters.includes(char)) {
            return  <span className="current-letter" key={id}>{char.toUpperCase()}</span>
        } else 
            return <span className="current-letter" key={id}></span>;

    })
    
}