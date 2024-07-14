import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { getPeople } from '../services/apis';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function People() {

  const [peopleList, setPeopleList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    showPeople()
  }, [])

  const showPeople = () => {
    getPeople().then(
      res => {
        console.log(res)
        if (res.data.people) {
          setPeopleList(res.data.people);
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  const changePath = (path, person=false) => {
    if(person)
      navigate(path+person)
  }

  return (
    <div className='container'>
      <h1>
        People You Many Know
      </h1>

      {peopleList &&
        <Container>
          <Row>
            {peopleList.map((person, ind) => {
              return (

                <Col>

                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{person.first_name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{person.username}</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="/message/{person.id}" onClick={e => changePath('/message',person.id)}>Message</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      }
    </div>
  );
}

export default People;