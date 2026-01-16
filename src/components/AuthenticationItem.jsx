import Button from 'react-bootstrap/Button';
import Utilizador from '../model/Utilizador';

function AuthenticationItem(handleShowAuthModal) {
    /*let userAux = new Utilizador();
    userAux = user;*/

    return <>
        <li className='d-flex justify-content-between list-group-item'>
            <div>
                <Button className='m-1' variant="primary" 
                    onClick={()=>{handleShowAuthModal()}}>
                    logIn
                </Button>
            </div>
        </li>
    </>;
}

export default AuthenticationItem;