import React from 'react'
import SeccionIngreso from './SeccionIngreso'
import SeccionGasto from './SeccionGasto'
import SeccionGraficas from './SeccionGraficas'
import SeccionMovimientos from './SeccionMovimientos'
import SeccionTotales from './SeccionTotales'

const MiMain = () => {
  return (
    <main className="row mt-2 mb-2">
        <SeccionIngreso></SeccionIngreso>
        <SeccionGasto></SeccionGasto>
        <SeccionGraficas></SeccionGraficas>
        <SeccionMovimientos></SeccionMovimientos>
        <SeccionTotales></SeccionTotales>        
    </main>
  )
}

export default MiMain