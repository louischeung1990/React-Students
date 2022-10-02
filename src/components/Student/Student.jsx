import "./Student.css"
import Score from "../Score/Score"

export default function Student(props) {
    return (
        <div className="Student">
           <div>{props.name}</div>
           <br></br>
           <div>{props.bio}</div> 
           <br></br>
            <Score scores={props.scores}/>
           <br></br>
           <br></br>
        </div>
    )
}