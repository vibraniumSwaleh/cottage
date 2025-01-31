import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Row from './ui/Row';

function App() {
  return (
    <>
      <GlobalStyles />
      <Row type='horizontal'>
        <Heading as='h1'>Form</Heading>
        <Heading as='h2'>User</Heading>
      </Row>
      <Button variation='primary' size='medium'>
        Check in
      </Button>
      <Heading as='h3'>Check in Check out</Heading>
      <Button variation='secondary' size='small'>
        Check out!
      </Button>
      <Button variation='danger' size='small'>
        Delete
      </Button>
    </>
  );
}

export default App;
