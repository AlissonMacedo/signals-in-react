import { useRef } from 'react';

const GoodPerformance = () => {
  const filter = useRef<string | null>(null)
  const divElement = useRef<HTMLDivElement>(null)

  return (
    <div style={{ flexDirection: 'column' }}>
      <h2>Good Performance</h2>
      <input onChange={(event) => {
        filter.current = event.target.value
        if (divElement.current) {
          divElement.current.textContent = `Filter ${filter.current}`
        }
      }} />
      <div ref={divElement} >Filter: {filter.current}</div>
    </div>
  );
};
export default GoodPerformance;
