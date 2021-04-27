import React, { useState } from 'react'

const DisplayContext = React.createContext()


function DisplayContextProvider(props) {
  const [displayStatus, setDisplayStatus] = useState('none')

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

// import React, { useState } from 'react'

// const DisplayContext = React.createContext()


// function DisplayContextProvider(props) {
//   const [displayStatus, setDisplayStatus] = useState('off')

//   function toggleDisplay() {
//     displayStatus === 'off' ? setDisplayStatus('on') : setDisplayStatus('off')
//   }

//   return(
//     <DisplayContext.Provider
//       value={{ displayStatus: displayStatus, toggleDisplay: toggleDisplay }}
//     >
//       { props.children }
//     </DisplayContext.Provider>
//   )

// }

// export { DisplayContextProvider, DisplayContext }