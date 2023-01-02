import React from "react";
import { useState, useEffect } from "react";
import { CgChevronDoubleRight } from "react-icons/cg";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  if (loading) {
    return (
      <main>
        <div className="container">
          <h1>Loading ....</h1>
        </div>
      </main>
    );
  }

  const { company, dates, duties, id, order, title } = data[value];

  return (
    <div className="App">
      <div className="container">
        <main>
          <h1 className="title">Experience</h1>
          <div className="tabs-content">
            <article className="btn-containers">
              {data.map((item, index) => (
                <button
                  className={value === index ? "active" : false}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              ))}
            </article>
            <article className="info">
              <h4>{title}</h4>
              <p className="company">{company}</p>
              <p className="dates">{dates}</p>
              <div className="duties">
                {duties.map((duty) => (
                  <div className="duty-content">
                    <CgChevronDoubleRight className="duty-icon" />
                    <p className="duty-text"> {duty}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
