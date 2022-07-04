import { Card, Col, Container, Row,Image } from 'react-bootstrap';
// import imageXmen from "../assets/images/x-men.jpeg"

const Trending = () => {
   return(
<Container>
   <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="https://m.media-amazon.com/images/M/MV5BNGEzNWE3MGEtNTM0OC00ZmQ0LTk0MzctZGRmMjI1NzRmNWM4L2ltYWdlXkEyXkFqcGdeQXVyMzMzNjk0NTc@._V1_.jpg" alt="card image"  height="390"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>pertaruhan</Card.Text>
         <Card.Text>action</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="https://m.media-amazon.com/images/M/MV5BZDc1MDkwM2QtNmU2Ni00YmQwLThhMGQtMjMzMDY3NTFjNDAxXkEyXkFqcGdeQXVyNjE4OTY3NTg@._V1_.jpg" alt="card image"  height="390"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>High and Low</Card.Text>
         <Card.Text>action</Card.Text>
         </div>
         
        </Card>
        </Col>
        <Col md={4} className='movieWrapper'>
        <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="https://m.media-amazon.com/images/M/MV5BNTUwODQyNjM0NF5BMl5BanBnXkFtZTcwNDMwMTU1Mw@@._V1_.jpg" alt="card image"  height="390"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>The Expendables</Card.Text>
         <Card.Text>WAR</Card.Text>
         </div>
       
      
       </Card>
       </Col>
   </Row>
</Container>

   )
}
export default Trending
