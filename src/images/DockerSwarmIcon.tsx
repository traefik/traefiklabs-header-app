const DockerSwarmIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="5.269%" y1="0%" x2="91.089%" y2="93.726%" id="h4xut0y6pb">
          <stop stopColor="#E5E8EA" offset="0%" />
          <stop stopColor="#B3BAC0" offset="100%" />
        </linearGradient>
        <linearGradient x1="5.595%" y1="0%" x2="100%" y2="100%" id="x02h46ijea">
          <stop stopColor="#818C96" stopOpacity="0" offset="0%" />
          <stop stopColor="#818C96" offset="100%" />
        </linearGradient>
        <filter x="-16.3%" y="-12.2%" width="132.6%" height="134.1%" filterUnits="objectBoundingBox" id="bw21nq5y0c">
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix
            values="0 0 0 0 0.00784313725 0 0 0 0 0.0784313725 0 0 0 0 0.141176471 0 0 0 0.6 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h48v48H0z" />
        <rect
          stroke="url(#x02h46ijea)"
          fill="url(#h4xut0y6pb)"
          fillRule="nonzero"
          x="24.5"
          y="14.5"
          width="11"
          height="11"
          rx="1"
        />
        <rect
          stroke="url(#x02h46ijea)"
          fill="url(#h4xut0y6pb)"
          fillRule="nonzero"
          x="11.5"
          y="14.5"
          width="11"
          height="11"
          rx="1"
        />
        <rect
          stroke="url(#x02h46ijea)"
          fill="url(#h4xut0y6pb)"
          fillRule="nonzero"
          x="24.5"
          y="1.5"
          width="11"
          height="11"
          rx="1"
        />
        <g filter="url(#bw21nq5y0c)" transform="translate(3 7)" fill="#03192D" fillRule="nonzero">
          <path d="M35.775 5.689a6.176 6.176 0 0 0-1.84-.28c-3.498 0-6.334 2.823-6.334 6.307 0 .498.405.902.905.902h4.524c.96 0 1.881.38 2.56 1.056a3.594 3.594 0 0 1 0 5.097 3.63 3.63 0 0 1-2.56 1.057H12.22c-3.82.053-7.59.863-11.09 2.384a1.667 1.667 0 0 0-1.012 1.024c-.17.458-.154.965.045 1.411.396.835.84 1.646 1.328 2.43 1.826 6.49 5.373 13.29 15.416 13.29a24.507 24.507 0 0 0 6.213-.793 14.883 14.883 0 0 1-1.787-3.28c-4.38.955-9.537.731-12.735-2.787a16.363 16.363 0 0 1-3.212-6.055c3.449.32 6.737 1.6 9.488 3.694 4.884 3.929 8.453 2.433 8.616 3.063a10.916 10.916 0 0 0 3.774 5.689 7.26 7.26 0 0 0 3.62 1.1.81.81 0 0 0 .713-.34.801.801 0 0 0 .08-.783l-2.066-4.8c-.127-.296.016.11.432 1.218.013-.02 5.435-3.203 5.435-3.203A22.387 22.387 0 0 0 43 17.113V.891a.9.9 0 0 0-.275-.636A.909.909 0 0 0 42.08 0c-3.259.001-5.985 2.462-6.304 5.689zM16.51 27.245a1.77 1.77 0 0 1 0-1.776 1.74 1.74 0 0 1 1.538-.869c.95.019 1.71.8 1.71 1.757a1.75 1.75 0 0 1-1.71 1.757 1.74 1.74 0 0 1-1.538-.869z" />
        </g>
      </g>
    </svg>
  )
}

export default DockerSwarmIcon
