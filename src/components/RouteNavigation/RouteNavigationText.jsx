import React from 'react'
import { RightArrow } from '../../utils/svgIcons'

const RouteNavigationText = ({currentPageName}) => {
  return (
    <p className="text-center text-xs light-text row justify-center font-poppins">
          <span className="px-3">Home</span>
          <RightArrow></RightArrow>
          <span className="px-3">{currentPageName}</span>
        </p>
  )
}

export default RouteNavigationText
