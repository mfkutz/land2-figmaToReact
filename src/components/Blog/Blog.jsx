import './Blog.css'
import { thumbnail, thumbnail1, thumbnail2 } from '../../assets/index'

const Blog = () => {
  return (
    <section id='blog'>
      <div className="wrapper">
        <h2>Latest Post</h2>
        <div className="blog-container">

          <div className='post'>
            <img src={thumbnail} alt="image" className='img-post' />
            <p className='title-post'>DAW</p>
            <div className='description-post'>
              How To Use Drum Machine in Logic Pro X
            </div>
          </div>

          <div className='post'>
            <img src={thumbnail1} alt="image" className='img-post' />
            <p className='title-post'>Mixing</p>
            <div className='description-post'>
              How To Mix Guitars Effectively
            </div>
          </div>
          <div className='post'>
            <img src={thumbnail2} alt="image" className='img-post' />
            <p className='title-post'>Vox</p>
            <div className='description-post'>
              The Real Power of Harmonies in Music Production
            </div>
          </div>

        </div>

        <div className='btn-container'>
          <a href="#" className='btn-blog'>All post</a>
        </div>

      </div>
    </section>
  )
}

export default Blog