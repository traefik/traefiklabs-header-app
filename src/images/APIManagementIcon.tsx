const APIManagementIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="86.637%" id="repxne4nqb">
          <stop stopColor="#E5E8EA" offset="0%" />
          <stop stopColor="#B3BAC0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="21.348%" x2="50%" y2="86.706%" id="l6tprhkzta">
          <stop stopColor="#818C96" stopOpacity="0" offset="0%" />
          <stop stopColor="#818C96" offset="100%" />
        </linearGradient>
        <filter x="-29.2%" y="-19.5%" width="158.3%" height="154.7%" filterUnits="objectBoundingBox" id="bn5ajwcj0c">
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
        <circle
          stroke="url(#l6tprhkzta)"
          fill="url(#repxne4nqb)"
          fillRule="nonzero"
          opacity=".5"
          cx="24"
          cy="24"
          r="23.5"
        />
        <circle stroke="url(#l6tprhkzta)" fill="url(#repxne4nqb)" fillRule="nonzero" cx="24" cy="24" r="18.5" />
        <g filter="url(#bn5ajwcj0c)" transform="translate(12 11)" fill="#03192D" fillRule="nonzero">
          <path d="m23.233 15.993-1.61-.92a10.219 10.219 0 0 0 0-4.573l1.636-.945a1.43 1.43 0 0 0 .51-1.941l-1.43-2.555a1.38 1.38 0 0 0-1.916-.511l-1.635.945a9.682 9.682 0 0 0-3.96-2.3V1.432a1.405 1.405 0 0 0-1.43-1.43h-2.836c-.79 0-1.43.64-1.43 1.43v1.84a10.219 10.219 0 0 0-3.96 2.299l-1.61-.945a1.43 1.43 0 0 0-1.814.485L.215 7.665a1.38 1.38 0 0 0 .511 1.941l1.61.92a9.887 9.887 0 0 0 0 4.573L.7 16.044a1.43 1.43 0 0 0-.511 1.942l1.558 2.452a1.38 1.38 0 0 0 1.916.511l1.635-.92a10.219 10.219 0 0 0 3.96 2.3v1.84c0 .78.625 1.416 1.405 1.43H13.5c.79 0 1.43-.64 1.43-1.43v-1.84a9.989 9.989 0 0 0 3.96-2.3l1.61.946a1.43 1.43 0 0 0 1.941-.537l1.405-2.554a1.405 1.405 0 0 0-.613-1.89zm-11.266 1.048a4.266 4.266 0 1 1 4.266-4.267 4.241 4.241 0 0 1-4.266 4.267z" />
        </g>
      </g>
    </svg>
  )
}

export default APIManagementIcon
