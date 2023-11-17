import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../Constant/BuySeeds.css'
import { useNavigate } from 'react-router-dom'
export default function BuySeeds() {
  const navigate = useNavigate();
  const openBuyPage = (event)=>{
    const id = event.currentTarget.id;
    
    navigate('/buy-seeds/seed-details');
  }
  return (
    <div>
      <NavBar/>
      <div id="body3">
        <h1>BEST SEEDS FOR USE</h1>
        <div id='seedItems'>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage1'></div>
                  <span>WHEAT</span>
                </div>
                <button id='buybtn1' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage2'></div>
                  <span>SUNFLOWER</span>
                </div>
                <button id='buybtn2' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage3'></div>
                  <span>PUMPKIN</span>
                </div>
                <button id='buybtn3' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage4'></div>
                  <span>FLAX</span>
                </div>
                <button id='buybtn4' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage5'></div>
                  <span>POPPY</span>
                </div>
                <button id='buybtn5' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage6'></div>
                  <span>SESAME</span>
                </div>
                <button id='buybtn6' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage7'></div>
                  <span>PEAS</span>
                </div>
                <button id='buybtn7' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage8'></div>
                  <span>BROWN RICE</span>
                </div>
                <button id='buybtn8' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage9'></div>
                  <span>GROUNDNUT</span>
                </div>
                <button id='buybtn9' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
            <div>
              <hr />
              <div className="seedNames">
                <div className="imageAndNames">
                  <div id='seedimage10'></div>
                  <span>MAIZE</span>
                </div>
                <button id='buybtn10' onClick={openBuyPage}>BUY</button>
              </div>
              <hr />
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
