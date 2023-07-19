import './Testimonials.css'
import { rectangle1, rectangle2, rectangle3 } from '../../assets/index'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className="wrapper">
        <div className='title-testimonials'>
          What our students say?
        </div>
        <div className='testimonials-container'>

          <div className='post-testimonials'>
            <img src={rectangle2} alt="" />
            <div className="name-testimonials">
              Peter Adams
            </div>
            <p className="description-testimonials">
              This is a great course. I got to learn a lot.
            </p>
          </div>

          <div className='post-testimonials'>
            <img src={rectangle3} alt="" />
            <div className="name-testimonials">
              Robert Fox
            </div>
            <p className="description-testimonials">
              I got to learn a lot about Music Production with this course. Thanks :)
            </p>
          </div>

          <div className='post-testimonials'>
            <img src={rectangle1} alt="" />
            <div className="name-testimonials">
              Emily Smith
            </div>
            <p className="description-testimonials">
              Awesome! Great job!!
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials