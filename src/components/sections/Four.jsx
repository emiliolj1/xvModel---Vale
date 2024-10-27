import React from 'react'
import { Container, Image, Button } from 'react-bootstrap'
import Carrousel from '../layout/Carrousel'

const Four = () => {
  return (
    <>
      <Container fluid className='fourInv py-4 text-center'>
        <h3 className='pb-3 text-center titulo' style={{fontSize:'2.4rem', fontStyle: 'normal'}}>Mis fotos!</h3>
        <Carrousel/>
        <hr/>
        <div className='text-center py-2'>
          <h2 className='titulo fw-bold' style={{fontSize:'2.6rem', fontStyle: 'normal'}} >Asistencia</h2>
          <p className='asistenciaFont fs-6 my-0'>Quiero contar contigo, ¿vienes?</p>
          <p className='asistenciaFont fs-6 my-0'>Confírmame, por favor.</p>
          <Button href='https://wa.me/543816477971?text=Hola%20Erika,%20confirmo%20mi%20presencia.%20Soy%20[tu nombre]' className='mt-3 mx-auto asisButton fw-bold'>
            Confirmar Presencia!
          </Button>
        </div>
      </Container>
    </>
  )
}

export default Four