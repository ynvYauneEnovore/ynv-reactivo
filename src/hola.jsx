const string = 'Esto es un texto'
const number = 12527614
const array = ['curso react', 4]
const boolean = true
const funcion = () => 1+1
const objeto = { nombre: 'hola'}
const fecha = new Date()
import './css/style.css'

export const ComponetHola = () => {
  return (
    <>
        <div>{ JSON.stringify(fecha)}</div>
        <div>{ string }</div>
    </>
  )
}
