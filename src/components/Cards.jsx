import React from 'react'
import {Card, Button, ListGroup} from 'react-bootstrap'
export const Cards = (props) => {
    return (
      <div className="card__container py-4 mx-auto">
<Card border="light" >
  <Card.Img variant="top" src={props.img}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <ListGroup >
    <ListGroup.Item style={
        {
            background:'#111111',
        }
    }>Cras justo odio</ListGroup.Item>
    <ListGroup.Item style={
        {
            background:'#111111'
        }
    }>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item style={
        {
            background:'#111111'
        }
    }>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
    <Button variant="outline-light mt-4">Go somewhere</Button>
  </Card.Body>
</Card> 
</div>

)
}
