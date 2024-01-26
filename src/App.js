// import {BrowserRouter , Routes , Route } from "react-router-dom"
// import Layout from "./Layout"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Service from "./pages/Service"
// export default function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="contact" element={<Contact/>}/>
//         <Route path="service" element={<Service/>}/>
//         <Route path="effect"element={<Effect/>}/>

//      </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// import React from 'react'
// import Counter from "./usestate/Counter"
// import Reducer from './usestate/Reducer'
// export default function App() {
//   return (
//     <div>
//       <Reducer/>
//       <Counter/>
//     </div>
//   )
// }

import React from 'react'
import Effect from './usestate/Effect'
import Reducer from './usestate/Reducer'
import Counter from './usestate/Counter'

export default function App() {
  return (
    <div>
      <Counter/>
      <Reducer/>
      <Effect/>
    </div>
  )
}
