
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Countries from './components/Countries'
import NotFound from './components/NotFound'
import CountryPage from './components/CountryPage'
import { useState } from 'react'

function App() {

  const [selectValue, setSelectValue] = useState('en')
  const lang = {
    "en": { about: "About Us", countries: "Countries" },
    "it": { about: "Chi siamo", countries: "Paesi" }
  }

  return (<>
    <nav className='nav-container'>
      <menu className='app-menu'>
        <li>
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='about'>{lang[selectValue].about}</NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='countries'>{lang[selectValue].countries}</NavLink>
        </li>
        <li>
          <select
            value={selectValue}
            onChange={e => setSelectValue(e.target.value)}>
            <option value="en">EN</option>
            <option value="it">IT</option>
          </select>
        </li>
      </menu>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<AboutUs language={selectValue} />} />
      <Route path='countries'>
        <Route index element={<Countries language={selectValue} />} />
        <Route path='/countries/:code' element={<CountryPage language={selectValue} />} />
      </Route>
      <Route path='*' element={<NotFound language={selectValue} />} />

    </Routes>



  </>)
}

export default App
