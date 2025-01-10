import {useId} from "react";
import clsx from "clsx";

export default function Keyboard(props) {
    const alphabet= "abcdefghijklmnopqrstuvwxyz";
    const guessedLetter:Array<string>=  props.guessedLetters;
    const currentWord = props.currentWord;
    
    function getStyle(letter) {
        if (guessedLetter.includes(letter)) {
            if (currentWord.includes(letter)) {
                return clsx({green: true, red: false});
            }
            else {
                  return clsx({green: false, red: true});
            }
        }
        return '';
    }
    function renderkeyboard() {
        return  alphabet.split("").map(char => {
              let id = useId();
            return <button disabled={props.gameIsOver} className={getStyle(char)} onClick={()=> {props.set(char);}} key={id}>{char.toUpperCase()}</button>
         });
    }

    return <div id="keyboard"> {renderkeyboard()}</div>


}
