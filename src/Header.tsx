import Status from "./Status.tsx";

export default function Header(props) {
    
    return <div>
        <h1>Guess the right word</h1>
        <p> Guess the word in 6 attempts</p>
        <Status gameStatus={props.gameStatus}></Status>
    </div>
}