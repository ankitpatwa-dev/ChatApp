import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';


function Home() {

  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default Home;