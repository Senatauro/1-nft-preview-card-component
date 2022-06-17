import nftImage from './images/image-equilibrium.jpg';
import nftPrice from './images/icon-ethereum.svg';
import nftTime from './images/icon-clock.svg';
import nftCreator from "./images/image-avatar.png";

import './App.css';

function App() {
  return (
    <div className='container'>
      <div className="card-container">
        <img className='card-image' src={nftImage} alt="The Equilibrium" />
        <h1 className='card-title'>Equilibrium #3429</h1>
        <p className='card-desc'>Our Equilibrium collection promotes balance and calm.</p>
        <div className='card-info'>
          <div className='card-info-price'>
            <img src={nftPrice} alt="Ether icon" />
            <p>0.041 ETH</p>
          </div>
          <div className='card-info-time'>
            <img src={nftTime} alt="Time icon" />
            <p>3 days left</p>
          </div>
        </div>
        <div className='card-footer'>
          <hr />
          <div className='card-footer-creator'>
            <img src={nftCreator} alt="The NFT creator" />
            <p>Creation of <span>Jules Wyvern</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
