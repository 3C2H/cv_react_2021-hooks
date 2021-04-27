import React, { useState } from 'react'

const DisplayContext = React.createContext()


function DisplayContextProvider(props) {
  const [displayStatus, setDisplayStatus] = useState('flex')

  function toggleDisplay() {
    displayStatus === 'none' ? setDisplayStatus('flex') : setDisplayStatus('none')
  }

  return(
    <DisplayContext.Provider
      value={{ displayStatus, toggleDisplay }}
    >
      { props.children }
    </DisplayContext.Provider>
  )

}

export { DisplayContextProvider, DisplayContext }
