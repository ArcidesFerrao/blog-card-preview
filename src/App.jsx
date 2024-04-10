import './App.css'
import pic from '../assets/images/image-avatar.webp';
import illustration from '../assets/images/illustration-article.svg';


function App() {

  return (
    <>
      <div className="card-container">
        <div className="image">
          <img src={illustration} alt="illustration article" />
        </div>

        <div className="content">
          <div className="category">
            <h3>Learning</h3>
          </div>
          <div className="publishdate">
            <h4>
              Publish 21 Dec 2023
            </h4>
          </div>
          <div className="title">
            <h1>HTML&CSS foundations</h1>
          </div>
          <div className="description">
            <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
          </div>
        </div>

        <div className="author">
          <div className="picture">
            <img src={pic} alt="avatar" width={32}/>
          </div>
          <div className="name">
            <h3>Greg Hooper</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
