import './Info.css'
import { student, video, group2 } from '../../assets/index'

const Info = () => {
  return (
    <section id='info'>
      <div className="wrapper">

        <div className='info-container'>

          <div className='info-div'>
            <img src={student} alt="student" />
            <h3 >
              23,000+
            </h3>
            <p>Student</p>
          </div>

          <div className='info-div'>
            <img src={video} alt="video" />
            <h3>
              26 Hrs
            </h3>
            <p>Video Content</p>
          </div>

        </div>

        <img src={group2} alt="group" className='esq-info' />
      </div>
    </section>
  )
}

export default Info