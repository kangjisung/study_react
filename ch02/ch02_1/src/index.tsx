import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const pVirtualDom = React.createElement('p', null, 'hello virtual dom world!')

root.render(pVirtualDom)
