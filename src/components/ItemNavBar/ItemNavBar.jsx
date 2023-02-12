import React from 'react'
import { NavLink } from 'react-router-dom'

const ItemNavBar = ({tipo1,tipo2,icono1,icono2}) => {
  return (
    <li className="w-100 m-0 p-0 d-flex justify-content-center">
        <div className="d-flex flex-row w-100">
            <NavLink to={`types/${tipo1}`} className={`${tipo1} w-100 text-decoration-none d-flex justify-content-center`}>
                <span className="text-center">
                    {icono1}
                 </span>
                <span className='text-uppercase'>{tipo1}</span>
            </NavLink>
            <NavLink to={`types/${tipo2}`} className={`${tipo2} w-100 text-decoration-none d-flex justify-content-center`}>
                <span className="text-center">
                    {icono2}
                 </span>
                <span className='text-uppercase'>{tipo2}</span>
            </NavLink>
        </div>
    </li>
  )
}

export default ItemNavBar