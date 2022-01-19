import './styles.css'

export default function Button(props){
    return(
        <button className={props.styled} id="btn">{props.children}</button>
    )
}
