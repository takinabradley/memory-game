import React, { useEffect, useState } from "react"

export default function Popup({id, callback, allowMute = true, children}) {
  const [showPopup, setShowPopup] = useState(true)

  const popup = (
    <div className="popup-background" onClick={dismissPopup}>
      <div className="popup-content">
        {children}
        
        <form className="popup-form">
          {allowMute ?
            <label>
              Don't show this again:
              <input type="checkbox" name='showPopup' />
            </label> : null}
        
          <button type='button' className='dismiss-popup'>Continue</button>
        </form>
      </div>
    </div>
  )

  function dismissPopup(e) {
    if (e.target.className !== 'dismiss-popup') return
    
    if (allowMute) {
      const showAgain = !e.currentTarget.querySelector('input').checked
      localStorage.setItem(id, JSON.stringify({ showAgain: showAgain }))
    } 
    if(callback) {callback()}
    setShowPopup(false)
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(id))?.showAgain === false) {
      setShowPopup(false)
    } 
  }, [id])

  

  return showPopup ? popup : null
}