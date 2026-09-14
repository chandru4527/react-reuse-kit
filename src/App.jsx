import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routers from './router/router'
import Modal from './components/ui/overlay/Modal'
import Drawer from './components/ui/overlay/Drawer'

const App = () => {
  return (
    <div>
      <RouterProvider router={routers} />
      <Modal />
      <Drawer />
    </div>
  )
}

export default App