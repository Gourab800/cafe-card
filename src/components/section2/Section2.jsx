import './Section2.css'

function Section2(props) {

  return (
    <div className='scard'>
    
        <img src={props.value.img} alt="error" />

        <button>{props.value.name}</button>
      
    </div>
  )
}

export default Section2