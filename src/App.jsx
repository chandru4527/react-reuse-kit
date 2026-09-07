import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routers from './router/router'
import Modal from './components/ui/overlay/Modal'

const App = () => {
  return (
    <div>
      <RouterProvider router={routers}/>
      <Modal/>
    </div>
  )
}

export default App