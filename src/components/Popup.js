import React, { useEffect, useState } from "react"

export default function Popup({id, callback, children}) {
  const [showPopup, setShowPopup] = useState(true)

  const popup = (
    <div className="popup-background" onClick={dismissPopup}>
      <div className="popup-content">
        {children}
        
        <form className="popup-form">
          <label>
            Don't show this again:
            <input type="checkbox" name='showPopup' />
          </label>
        
          <button type='button' className='dismiss-intro'>Continue</button>
        </form>
      </div>
    </div>
  )

  function dismissPopup(e) {
    if (e.target.tagName !== 'BUTTON') return
    const showAgain = !e.currentTarget.querySelector('input').checked
    localStorage.setItem(id, JSON.stringify({ showAgain: showAgain }))
    if(callback) {callback()}
    setShowPopup(false)
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(id))?.showAgain === false) {
      setShowPopup(false)
    } else {
      setShowPopup(true)
    }
  }, [id])

  

  return showPopup ? popup : null
}