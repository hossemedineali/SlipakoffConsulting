import { useEffect, useRef } from 'react';

const Services = () => {
  const services = ['Policies and Procedures', 'Customized Employee Handbook', 'Benefits Review', 'Positive Employee Relations', 'Arbitrations', 'NLRB Actions'];
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      container.addEventListener('mousedown', (event) => {
        isDown = true;
        startX = event.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });

      container.addEventListener('mouseleave', () => {
        isDown = false;
      });

      container.addEventListener('mouseup', () => {
        isDown = false;
      });

      container.addEventListener('mousemove', (event) => {
        if (!isDown) return;
        event.preventDefault();
        const x = event.pageX - container.offsetLeft;
        const walk = (x - startX) * 3;
        container.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);

  return (
    <div className="w-full min-h-full bg-slate-500 flex flex-col pt-10">
      <h1 className="w-fit text-5xl font-bold mx-auto">Our services</h1>
      <div className="relative flex items-center">
        <div ref={scrollContainer} className="w-full h-full overflow-x-scroll scroll  whitespace-nowrap scroll-smooth">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="w-56 h-96 border mx-5 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-100"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
