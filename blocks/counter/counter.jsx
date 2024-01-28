import { useEffect, useState } from "react";

export default function Counter() {
  const countersData = [
    { initialValue: 100, title: "Successful Projects" }, // Initial value for counter 1
    { initialValue: 5, title: "Satisfied Clients" }, // Initial value for counter 2
    { initialValue: 6, title: "Years of Experience" }, // Initial value for counter 3
    { initialValue: 10, title: "Award Winning" }, // Initial value for counter 4
  ];

  const [counters, setCounters] = useState(
    countersData.map((data) => data.initialValue)
  );

  useEffect(() => {
    const handleScroll = () => {
      countersData.map((data, index) => {
        const offset = document.getElementById(
          `counter-div-${index}`
        ).offsetTop;
        const windowHeight = window.innerHeight;
        const scrollValue = window.scrollY;

        if (scrollValue > offset - windowHeight) {
          startCounter(index);
        }
      });
    };

    const startCounter = (index) => {
      let value = 0;
      const counterElement = document.querySelector(`.counter-${index}`);

      const counterInterval = setInterval(() => {
        value++;
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          newCounters[index] = value;
          return newCounters;
        });

        // Adjust the limit based on your requirement
        if (value >= 100) {
          clearInterval(counterInterval);
        }
      }, 30);

      // Remove the scroll event listener once the counter starts
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [countersData]);

  return (
    <section class="wpo-fun-fact-section undefined" id="counter-div">
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <div class="wpo-fun-fact-grids clearfix">
              <div>
                {countersData.map((data, index) => (
                  <div key={index} id={`counter-div-${index}`} className="grid">
                    <div class="info">
                      <h3>
                        <span>
                          <span className={`counter-${index}`}>
                            {counters[index]}
                          </span>
                        </span>
                        +
                      </h3>
                      <p>{data?.title}</p>
                    </div>
                  </div>
                ))}
              </div>

            
            </div>
          </div>
        </div>
      </div>
      <span id="counter" class="d-none">
        56,656
      </span>
    </section>
  );
}
