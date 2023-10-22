import React from "react";
import "./GetHost.scss";
import tick from "../../../Assets/Imgs/tick.svg";
import wrong from "../../../Assets/Imgs/Close.svg";
export default function GetHost() {
  const quicktest = ["QuicskTschy.com", "QuicskTschy.co", "QuicskTschy.in"];
  const example = ["example.com", "example.co", "example.in"];
  return (
    <>
      <div className="hostContainer">
        <section className="boxlayout">
          <div className="hostTitle">Choosing your Hosting and Domain</div>
          <div className="chooseSiteName">Pick a name for your site.</div>
          <div>
            <div className="inputBox">QuicskTschy.com</div>
            <button className="avilableButton">Check Availability</button>
          </div>
          <div className="availableContainer">
            {quicktest.map((value) => (
              <div className="quickAvailble">
                <div style={{ display: "flex", gap: "15px" ,alignItems:"center"}}>
                  <img src={tick}  className="icon"/> <div className="value">{value}</div>
                </div>
                <div className="available">
                  Available Now
                </div>
                <div className="btnContainer">
                  <button className="BTN">Get in Now</button>
                </div>
              </div>
            ))}
          </div>
          <div className="pointTwo">
            <div className="pointing">2. Get Hosting with free Domain.</div>
            <div className="definePoint">
              Once you find your site’s name, the next step is to get hosting &
              domain. The domain is the name of your site and hosting puts your
              website on the internet.
            </div>
            <>
              <button>Get Hosting & Free Domain</button>
            </>
          </div>
        </section>
        <section className="boxlayout section2">
          <div className="hostTitle">Choosing your Hosting and Domain</div>
          <div className="chooseSiteName">Pick a name for your site.</div>
          <div>
            <div className="inputBox">example.com</div>
            <button className="avilableButton">Check Availability</button>
          </div>

          <div className='notavailableContainer'>
            {example.map((value) => (
              <div className="examples">
                <div style={{ display: "flex", gap: "15px" ,alignItems:"center"}}>
                  <img src={wrong} className="icon" /> <div className="value2">{value}</div>
                </div>
                <div className="notAvailable">
                Not Available
                </div>
              </div>
            ))}
          </div>
            <div className="pointTwo">
            <div className="pointing">2. Get Hosting with free Domain.</div>
            <div className="definePoint">
              Once you find your site’s name, the next step is to get hosting &
              domain. The domain is the name of your site and hosting puts your
              website on the internet.
            </div>
            <>
              <button>Get Hosting & Free Domain</button>
            </>
          </div>
        </section>
      </div>
    </>
  );
}
