export default function Status(props) {
    
    function renderGameStatus() {
            return <h4>{props.gameStatus.message}</h4>
    }
    return renderGameStatus();
    
}