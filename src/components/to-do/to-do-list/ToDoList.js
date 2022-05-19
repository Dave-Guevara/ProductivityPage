import React from 'react'
import { Button } from '../../common/button/Button'
import { ToDo } from '../to-do/ToDo'

export const ToDoList = () => {
  return (
    <>
        <ToDo content={'Comprar Chokocrispis'}></ToDo>

        <Button buttonName={'Guardar'} icon={'Icono'}> </Button>
    </>
  )
}
