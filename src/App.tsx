import Header from "./Header.tsx";
import Main from "./Main.tsx";
import React from "react";

export default function App() {
    
    const [gameStatus, setStatus] = React.useState({gameLost: false, youWin: false})

    function setGameStatus(object) {
            setStatus(stat =>
                ( {...stat ,gameLost:object.gameLost,
                    youWin:object.youWin,
                    message: object.message
                }));
    }
    
    return <> 
        <Header gameStatus={gameStatus}></Header> 
        <Main setGameStatus={setGameStatus}></Main>
    </>
}