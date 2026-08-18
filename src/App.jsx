import React from 'react'
import FormElements from './Pages/FormElements'
import ButtonElement from './Pages/ButtonElement'
import FeedbackElement from './components/ui/feedback/FeedbackElement'
import TableElement from './components/ui/table/TableElement'
import CardElement from './Pages/CardElement'
import AvatarElements from './Pages/AvatarElements'
import Modal from './components/ui/overlay/Modal'

import NavigationElements from './components/ui/naviagation/NavigationElements'
import Drawer from './components/ui/overlay/Drawer'

const App = () => {



  return (
    <div className='flex flex-col p-10 gap-10'>

      <h1 className='text-center font-bold mt-10 text-2xl'>Reusable Components</h1>
      {/* 1 form reusable inputs */}
      {/* <FormElements /> */}

      {/* 2 buttons  */}
      {/* <ButtonElement/> */}

      {/* 3 feedback */}
      {/* <FeedbackElement/> */}

      {/* 4 tables */}
      {/* <TableElement /> */}

      {/* 5 card */}
      {/* <CardElement/> */}

      {/* 6 avatar */}
      {/* <AvatarElements/> */}

      {/* 6 navigation */}
      <NavigationElements />

      {/* model container */}
      <Modal />

      {/* globel drawer */}
      <Drawer/>
    </div>
  )
}

export default App