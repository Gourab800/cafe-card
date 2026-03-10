import './Section4.css'
import { BiSolidLike } from "react-icons/bi";

function Section4(props) {
    return (
        <div>
            <div className='bcard'>
                <img src={props.shake.img} alt="error" />
                <p className='like'> <BiSolidLike /> <span>{props.shake.like}</span></p>
                <div className='btm'>
                    <p className='name'>{props.shake.name}</p>
                    <div className='btn-container'>
                        <p>200Af</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4