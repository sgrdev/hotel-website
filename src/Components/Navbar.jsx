import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" className='h-20'>
            <Container className='flex justify-around'>
                <Navbar.Brand href="#home" className='text-purple-500 font-bold '>Hotel Lunar</Navbar.Brand>


                <Nav className="gap-16 font-semibold ">
                    <Nav.Link href="#home" className='text-purple-500' onClick={() => { Navigate("/") }}>Home</Nav.Link>
                    <Nav.Link href="#link" className='hover:text-purple-500' >Rooms and Suites</Nav.Link>
                    <Nav.Link href="#link" className='hover:text-purple-500'>Facilities</Nav.Link>
                    <Nav.Link href="#link" className='hover:text-purple-500'>Contacts</Nav.Link>
                    <Nav.Link href="#link" className='hover:text-purple-500'>Offers</Nav.Link>
                    <Nav.Link href="#link" className='hover:text-purple-500'>Events</Nav.Link>

                </Nav>

            </Container>
        </Navbar>
    );
}

export default NavigationBar;