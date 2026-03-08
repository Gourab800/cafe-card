import './Section.css';


function Section() {
  return (
    <div className='section'>
      <div className="figure">
        <img src="https://static.toiimg.com/thumb/msid-116977825,width-1280,height-720,resizemode-4/116977825.jpg" alt="" />

        <h3 className='absolute element1'>Freshly Roasted</h3>
        <h2 className='absolute element2'>C O F F E E</h2>
        <button className='absolute element3'>Shop Now</button>
      </div>
      <div className='head'>
        <h2>T O P &nbsp;&nbsp; C A T E G O R I E S</h2>
        <p>Explore The Recent Most Bought Drinks This Week</p>
      </div>
    </div>
  )
}

export default Section