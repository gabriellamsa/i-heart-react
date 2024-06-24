import HeartLogo from './heart.svg';
import './App.css';

const message = 'cool cud';
const Header = () => {
  return <div className='App-header'>I ❤️ React</div>;
}

const Heart = (props) => {
  return (
    <div className='heart'>
      <img className='heart-img' src={HeartLogo} alt='heart' />
      <p className='heart-message'>{props.msg}</p>
    </div>
  )
}

function App() {
  return (
  <div>
    <Header />
    <Heart msg={message} />
  </div>
  )
}

export default App;
