import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import logo from "./images/logo.svg";
import "./scss/styles.css";
import mainImg from "./images/hero-mobile.jpg";
import arrow from "./images/icon-arrow.svg";

import useObserver from "./useObserver";

const Index = () => {
  const ta = useRef();
  const tb = useRef();
  const tc = useRef();
  const tpg = useRef();
  const inp = useRef();

  const { current: taa } = useObserver(ta.current, "appear");
  const { current: tbb } = useObserver(tb.current, "appear");
  const { current: tcc } = useObserver(tc.current, "appear");
  const { current: parag } = useObserver(tpg.current, "paraAppear");
  const { current: input } = useObserver(inp.current, "inputAppear");

  return (
    <>
      <div className='container'>
        <div className='one'>
          <nav>
            <img src={logo} alt='' />
          </nav>

          <div className='img'></div>
        </div>

        <div className='two'>
          <div className='texts'>
            <h2 className='a' ref={ta}>
              WE'RE
            </h2>

            <h2 className='b' ref={tb}>
              COMING
            </h2>

            <h2 className='b c' ref={tc}>
              SOON
            </h2>
          </div>

          <p className='para' ref={tpg}>
            Hello fellow shoppers! We're currently building our new fashion
            store. add your e-mail below to stay up-to-date with announcements
            and our launch deals
          </p>

          <div className='input' ref={inp}>
            <input type='text' placeholder='Email address' />

            <div className='submit'>
              <img src={arrow} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ReactDom.render(<Index />, document.getElementById("root"));
