export default function Cat(props) {
    return <li className={props.style} style={{backgroundColor:props.cat.backgroundColour,
        color: props.cat.colour}}>{props.cat.name}</li>
}