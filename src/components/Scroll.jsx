const Scroll = (props) => {
    return(
        <div style={{borderBlockStart: '5px solid black'}}>
        {props.children}
        </div>
    );
}
export default Scroll;