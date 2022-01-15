import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const increment = ()=> {
  if(index < people.length - 1){
    setIndex((prevIndex) => {
      return prevIndex + 1
    })
  }
  }
  const decrement = ()=> {
  if(index <= people.length - 1){
    setIndex((prevIndex) => {
      return prevIndex - 1
    })
  }
  }

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>\</span> Reviews
        </h2>
        </div>
        <div className="section-center">
        {people.map((person, personIndex) => {
          const { title, image, id, quote, name } = person;

          let position = 'nextSlide';

          if(index === personIndex){
            position = 'activeSlide';
          }
          
           if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
             position = 'lastSlide'
           }

          return (
            <article key={id} className={position}>
              <img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        </div>
        <button className="prev" onClick={decrement}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={increment}>
          <FiChevronRight />
        </button>
     
    </section>
  );
}

export default App;
