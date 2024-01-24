import React, { useEffect } from 'react';

const Ques = () => {
  useEffect(() => {
    const consoleText = (words, id) => {
      let visible = true;
      let con = document.getElementById('console');
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      let target = document.getElementById(id);

      const interval1 = window.setInterval(() => {
        if (letterCount === 0 && !waiting) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(() => {
            let usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && !waiting) {
          waiting = true;
          window.setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (!waiting) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);

      const interval2 = window.setInterval(() => {
        if (visible) {
          con.className = 'console-underscore hidden';
          visible = false;
        } else {
          con.className = 'console-underscore';
          visible = true;
        }
      }, 400);
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    };

    consoleText(['Wordpress. ', 'Online store', 'Protfolio'], 'text');
  }, []); 

  return (
    <div className="console-container d-flex">
      <span id="text"></span>
      <div className="console-underscore " id="console">|</div>
    </div>
  );
};

export default Ques;
