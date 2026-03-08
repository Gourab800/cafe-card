import React from 'react'
import Navbar from './components/header/Header'
import Section from './components/section/Section'
import Footer from './components/footer/Footer'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'

function App() {
  const coffee = [
    {
      id: 1,
      img: 'https://www.bunsenburnerbakery.com/wp-content/uploads/2022/12/decadently-thick-hot-chocolate-31.jpg',
      name: 'Hot Chocolate'
    },
    {
      id: 2,
      img: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
      name: 'Espresso Coffee'
    },
    {
      id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yovUHhG2rFJES4xSlgu8FGSjb9xOdmYcOg&s',
      name: 'Mocha Coffee'
    },
    {
      id: 4,
      img: 'https://5.imimg.com/data5/GN/RG/GLADMIN-10207619/latte-500x500.png',
      name: 'Lata Coffee'
    }
  ]

  const shake = [
    {
      id: 1,
      img: 'https://thecinnamonjar.com/wp-content/uploads/2023/03/Biscoff-milkshake01790-3.jpg',
      like: '30',
      name: 'Biscoff Milkshakes',

    },
    {
      id: 2,
      img: 'https://i.pinimg.com/736x/e4/b2/d8/e4b2d84d9889c6749f37d1678d9ba132.jpg',
      like: '50',
      name: 'Salted Caramel Milkshakes',

    },
    {
      id: 3,
      img: 'https://png.pngtree.com/thumb_back/fw800/background/20251209/pngtree-a-decadent-chocolate-milkshake-topped-with-whipped-cream-and-shavings-served-image_20781435.webp',
      like: '100',
      name: 'Decadent Chocolate Milkshakes',

    },
    {
      id: 4,
      img: 'https://greenheartlove.com/wp-content/uploads/2024/02/chocolate-milk-shake-8.jpg',
      like: '40',
      name: 'Chocolate Milkshakes',

    }
  ]

  return (
    <div className='container'>
      <Navbar />
      <Section />
      <section className='section-container'>

        {coffee.map((item) => (
          <Section2 key={item.id} value={item} />
        ))}
      </section>
      <Section3 />
      <section className='section-container'>

      {shake.map((i) => (
           <Section4 key={i.id} shake={i} />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default App