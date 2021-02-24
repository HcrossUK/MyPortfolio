export default function Wildcard (props) {
    return(
        <div className="wildcard">
            <h2>{props.title}</h2>
            <h4>{props.desc}</h4>
            <h3>{props.from} - {props.to}</h3>
        </div>
    )
}