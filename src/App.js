import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import{Button,Alert,Breadcrumb,Card,Form,Container,Row,Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
        <Form>

          <Row>
            <Col md>
              
          <Form.Group>
          
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="example@gmail.com"/>
          <Form.Text className="text-muted">We will never share your email address , trust us!</Form.Text>

          </Form.Group>
        
          
            </Col>
            <Col md>
            <Form.Group>
          
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="****** "/>
            
            
            </Form.Group>
            </Col>
          </Row>
        
          <Button variant="secondary">Login</Button>

        </Form>

        <Card style={{color:"#000"}}>
        
        <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg"/>
        <Card.Body>
        
        <Card.Title>Card Example</Card.Title>
        <Card.Text>This is an examble of react cards</Card.Text>
        
        <Button variant="primary">Read More</Button>


        </Card.Body>

        
        </Card>  
      
      <Breadcrumb>
        
        <Breadcrumb.Item>Test1</Breadcrumb.Item>
        <Breadcrumb.Item active>Test2</Breadcrumb.Item>
        <Breadcrumb.Item>Test3</Breadcrumb.Item>
       
        
        </Breadcrumb> 
      <Alert variant="success">this is a Button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
