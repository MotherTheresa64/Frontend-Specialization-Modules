import 'bootstrap/dist/css/bootstrap.min.css';

import type { Person, ProfileProps } from './models/Person.model';
import PersonComponent from './components/PersonComponent';
import Status from './components/Status';
import Header from './components/Header';
import NestedComponent from './components/NestedComponent';
import Button from './components/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const student: Person = {
    name: 'John',
    age: 25,
  };

  const profileData: ProfileProps = {
    person: student,
    message: 'This is a message from the parent component.',
  };

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Card>
        <Card.Body>
          <PersonComponent {...profileData} />
        </Card.Body>
      </Card>

      <Status />

      <Header>Hey there buddy!</Header>

      <NestedComponent>
        <h3>This is a children component</h3>
        <Status />
      </NestedComponent>

      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
