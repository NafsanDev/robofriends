const Hello = (props, family) => {
    return(
    <div className="tc">
        <h1 className="f1">{props.greeting}</h1>
        <p className="f3">{props.family}</p>
    </div>
    )
}

export default Hello;