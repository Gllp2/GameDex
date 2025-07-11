import { FaPlaystation } from 'react-icons/fa';


export default function CollectionHistory() {
  return (
    <div className="collection-history">
      <h2 className="collection-title">COLLECTION HISTORY</h2>
      <div className="history-content">
        <div className="history-info">
          <p className="first-game-text">This was your<br />first game!</p>
          <p className="bought-date">You bought it in<br />20/11/2003</p>
          <div className="price-comparison">
            <div>
              <p>You<br />bought it<br />for</p>
              <span className="price">11.99$</span>
            </div>
            <div className="divider" />
            <div>
              <p>Today its<br />valued<br />for</p>
              <span className="price">13.20$</span>
            </div>
          </div>
        </div>
        <div className="history-image">
          <div className="game-placeholder" />
          <div className="game-title">
            <strong>GAME №1</strong>
            <FaPlaystation style={{ marginLeft: '8px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
