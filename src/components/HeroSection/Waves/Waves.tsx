const Waves = () => {
  return (
    <svg
      className="absolute bottom-0 mb-[-0.44rem] h-10 max-h-[7.5rem] min-h-[2.5rem] w-full sm:h-[7.5rem] sm:min-h-[7.5rem]"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(6, 11, 40, 0.7)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(6, 11, 40, 0.5)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(6, 11, 40, 0.3)"
        />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#060B28" />
      </g>
    </svg>
  );
};

export default Waves;
