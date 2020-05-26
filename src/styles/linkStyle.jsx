import styled from 'styled-components';
import { Link } from 'react-router-dom';



const LinkStyle = styled(Link)`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
background: linear-gradient();
background-color: white;
transition: 0.3s;
width: 40%;
text-decoration: none;
margin: 20px 10px 20px 10px;
border: 2px;
border-right-color: black;
font-size: 40;


&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.9);
}

.container {
    padding: 2px 16px;
}   
`;

export default LinkStyle