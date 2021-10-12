import React from 'react'
import iconBg from '../images/icon-bg.svg'



const IconTitle = ({ title, icon, status }) => {
  return (
    <div>
      <div>
        <img src={iconBg} alt='icon-bg' />
        <img src={icon} alt={title} />
      </div>
      {title}
    </div>
  )
}

export default IconTitle
