import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Delete } from './Delete';
import { StatusContext } from '../context/StatusContext';


export const CardPersonaje = () => {
    const {lista}= useContext(StatusContext);
    return (
        <>

            <Row xs={1} md={4} lg={4}>
                {
                    lista.map((element) => {

                        return (
                            <Col key={element.id}>

                                <Card border="danger" style={{ width: '18rem', textAlign:'center', margin:'5px', backgroundColor: 'black' }}>
                                    <Card.Header style={{backgroundColor:'#F92600' }} ><strong>{element.name}</strong></Card.Header>
                                    <Card.Body>
                                        <Card.Img src={element.image} />
                                        <p style={{color: 'white'}}> Creado: {element.created}</p>
                                        <p style={{color: 'white'}} >Especie: {element.species}</p>
                                        <p style={{color: 'white'}} >Locacion: {element.location.name}</p>
                                        <Delete id={element.id}/>

                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })

                }
            </Row>


        </>
    )
}
