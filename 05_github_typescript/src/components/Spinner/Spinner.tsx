import './Spinner.scss';

const Spinner = () => {
  return (
    <div className='spinner'>
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1.5"
              floodColor="rgb(37, 74, 145);"
            />
          </filter>
        </defs>
        <circle
          id="spinner"
          style={{
            fill: 'transparent',
            stroke: 'rgb(199, 199, 199)',
            strokeWidth: '7px',
            strokeLinecap: 'round',
            filter: 'url(#shadow)',
          }}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </div>
  );
};

export default Spinner;
