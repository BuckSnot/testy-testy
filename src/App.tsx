import React, { useState } from 'react';
import './App.css';

function App() {
  const [drawPile, setDrawPile] = useState(108);

  return (
    <div className="container">
      <div className="player-area top-center">
        <div className="section-label">Player 2 Area</div>
        <div className="player-name">Player 2</div>
        <div className="card-area"></div>
      </div>
      <div className="team-meld-area">
        <div className="section-label">Team B Meld Area</div>
        <div className="card-area">
          {/* Team meld cards will be placed here */}
        </div>
      </div>
      <div className="middle-area">
        <div className="section-label">Middle Area</div>
        <div className="draw-pile">Draw ({drawPile})</div>
        <div className="pickup-button">Pickup</div>
        <div className="discard-pile">
          <div className="discard-label">Discard</div>
          <div className="discard-content">
            <button className="add-card-button">+</button>
            <span className="empty-pile-text">Empty Discard Pile</span>
          </div>
        </div>
      </div>
      <div className="team-meld-area">
        <div className="section-label">Team A Meld Area</div>
        <div className="card-area">
          {/* Team meld cards will be placed here */}
        </div>
      </div>
      <div className="player-area bottom">
        <div className="section-label">Player 1 Area</div>
        <div className="player-name">Player 1</div>
        <div className="card-area" id="playerHand">
          {/* Cards will be placed here */}
          <div className="card heart"><span className="number">7</span><span>♥</span></div>
          <div className="card heart"><span className="number">3</span><span>♥</span></div>
          <div className="card heart"><span className="number">3</span><span>♥</span></div>
          <div className="card diamond"><span className="number">8</span><span>♦</span></div>
          <div className="card diamond"><span className="number">5</span><span>♦</span></div>
          <div className="card diamond"><span className="number">A</span><span>♦</span></div>
          <div className="card heart"><span className="number">J</span><span>♥</span></div>
          <div className="card spade"><span className="number">5</span><span>♠</span></div>
          <div className="card heart"><span className="number">4</span><span>♥</span></div>
          <div className="card spade"><span className="number">4</span><span>♠</span></div>
          <div className="card club"><span className="number">4</span><span>♣</span></div>
        </div>
      </div>
      <div className="action-buttons">
        <div className="section-label">Action Buttons</div>
        <button className="lay-down-button">Lay Down</button>
        <button className="discard-button">Discard</button>
      </div>
    </div>
  );
}

export default App;
