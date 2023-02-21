import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Gif from '../style/photos/video/gifexplain.gif'


const ModalTuto = (props) => {

    return (
            <>
            <Modal show={props.show} onHide={()=>props.handleClose()}>
                <Modal.Header closeButton > 
                <Modal.Title>Welcome to our website!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Here you can search Investors and contacts of a specific industry,
                            besides, you can consult aspects of that specific Investor as primary investor type,
                            Preferred Invested amount and so on...<br />
                            <br/>
                            if You want to check the Contacts click the arrow at the start of the row

                            <img src={Gif} alt="..loading" style={{maxWidth:"90%"}} />
                            <br/>
                            <br/>
                            if you prefer to jump right at the table just click on the filters button.if you prefer to jump right at the table just click on the filters button.
                            </Modal.Body>
                <Modal.Footer>
                <Button className='modalButton' onClick={()=>props.handleClose()}>
                    Got it!
                </Button>
                </Modal.Footer>
            </Modal>
            </>
  );
}

export default ModalTuto;