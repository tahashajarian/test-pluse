import React from 'react'
import IconTitle from './components/icon-title'
import dollarIcon from './images/dollar.svg'
import linkIcon from './images/link.svg'
import refreshIcon from './images/refresh.svg'
const App = () => {
  return (
    <div className="p-1">
      <div className="text-center">
        نوع معامله تو مشخص کن
      </div>
      <div className="flex justify-around">
        <IconTitle title="مشارکت" icon={linkIcon} />
        <IconTitle title="رهن و اجاره" icon={refreshIcon} />
        <IconTitle title="خرید" icon={dollarIcon} />
      </div>
      <form>
        
      </form>
    </div>
  )
}

export default App
