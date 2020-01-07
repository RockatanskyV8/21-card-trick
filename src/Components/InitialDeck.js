import React from "react";
import TweenOne from "rc-tween-one";
import PuffLoader from "./Loader";
import BezierPlugin from "rc-tween-one/lib/plugin/BezierPlugin";
TweenOne.plugins.push(BezierPlugin);

const InitialDeck = ({ imagesArr, setCardPicked }) => {
  const animation = {
    bezier: {
      type: "thru",
      curviness: 1,
      vars: [{ x: 800, y: 0 }]
    },
    duration: 1000,
    ease: "easeOutSine"
  };

  const handleClick = () => {
    setCardPicked(true);
  };

  const render21Cards = () => {
    return (
      <>
        <p className="pintro">Escolha uma carta, qualquer carta</p>
        <button onClick={handleClick} className="button">
          Já escolhi
        </button>
        <div style={{ width: "0" }}>
          {imagesArr.map((image, index) => (
            <TweenOne
              animation={{
                ...animation,
                bezier: {
                  ...animation.bezier,
                  vars: [{ x: (600 / 20) * index, y: 0 }]
                },
                duration: (1500 / 21) * index
              }}
            >
              <img
                className={`image${index}`}
                key={index}
                src={`${image}`}
                alt=""
                style={{
                  position: "absolute",
                  left: "0",
                  top: "50px"
                }}
              />
            </TweenOne>
          ))}
        </div>
      </>
    );
  };
  //Loop through the 21 card images and display them for user to mentally pick a card.
  return (
    <div
      style={{
        position: "relative",
        margin: "0 auto",
        width: "800px",
        textAlign: "center"
      }}
    >
      {imagesArr.length === 21 ? render21Cards() : <PuffLoader />}
    </div>
  );
};
export default InitialDeck;
