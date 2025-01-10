import cats from "./Cats.ts"
import Cat from "./Cat.tsx";
import FarewellMessage from "./Farewellmessage.tsx"
import React, {useEffect} from "react";
import Word from "./Word.tsx";
import Confetti from "react-confetti";
import Keyboard from "./Keyboard.tsx";
import {useWindowSize} from "react-use";
export default function Main(props) {
    
    const [currentWord, setCurrentWord] = React.useState("gokhan");

    const [guessedLetters, setGuessedLetters] = React.useState(Array<string>);


    const { width, height } = useWindowSize()
    let wrongGuessCount = 0;
    function setLetter(letter:string) {
        setGuessedLetters(l=> {
            const set = new Set(l);
            set.add(letter);
           return Array.from(set);
        });
      
      
    }
    calculateWrongGuesses();
    
    const gameIsLost = wrongGuessCount>=cats().length;
    const youWin = currentWord.split("").every(letter=>guessedLetters.includes(letter));
    const gameIsOver = gameIsLost || youWin;

    function calculateWrongGuesses() {
        guessedLetters.forEach(letter=> {
            if(!currentWord.includes(letter)) {
                wrongGuessCount++;
            }
        })

    }

    useEffect(()=> {
        let message = ""
        if(wrongGuessCount>0 && wrongGuessCount<cats().length) {
            message= FarewellMessage(cats()[wrongGuessCount-1].name);
            props.setGameStatus({gameLost: gameIsLost, youWin: youWin, message: message});

        }

        if(youWin) {
            props.setGameStatus({gameLost: gameIsLost, youWin: youWin, message: "You win"});
        }
        if(gameIsLost) {
            props.setGameStatus({gameLost: gameIsLost, youWin: youWin, message: "You lost"});
        }

    },[wrongGuessCount])

    useEffect(()=> {
        let message = "Start pressing keyboard to start guessing"
        if(wrongGuessCount==0 && guessedLetters.length==0) {
            props.setGameStatus({gameLost: gameIsLost, youWin: youWin, message: message});
        }
        if(wrongGuessCount==0 && guessedLetters.length>0) {
            props.setGameStatus({gameLost: gameIsLost, youWin: youWin, message: "not bad"});
        }
        if(youWin) {
            props.setGameStatus({gameLost: gameIsLost, youWin: youWin, message: "You win"});
        }
       
    },[guessedLetters.length])

    function renderLanguages() {
       return cats().map((cat, index)=> {

           const isLost =  index < wrongGuessCount;

           const lostClass = isLost ? "lost" : "";
           return (
               <Cat
                   style={lostClass} 
                   cat={cat}
               />
           );

       });
    }

    function setNewGame() {
       setGuessedLetters(()=> []);
    }
  

    return <div id="languages"><ul>{renderLanguages()} </ul>
    <section className="currentWord">
        <Word guessedLetters= {guessedLetters} word={currentWord}></Word>
    </section>

        <section>
            <Keyboard  gameIsOver={gameIsOver} set={setLetter} currentWord={currentWord} guessedLetters={guessedLetters}></Keyboard>
        </section>
        {gameIsOver && <p>  <button onClick={setNewGame}>New game</button></p>}
        <Confetti hidden={!youWin}
                  width={width}
                  height={height}
        />
    
    </div>
}