// import { Image } from "react-bootstrap";
import { Button } from 'react-bootstrap'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {BsSpotify} from 'react-icons/bs'

const Footer = () => {
    return <div className="d-flex justify-content-between p-3 bg-secondary text-white align-items-center">
        <h1 className="display-3" style={{fontWeight:700}}>The Generics</h1>
        <div className="d-flex gap-5 list-unstyled">
            <Button className='btn btn-secondary'><AiFillYoutube className="display-5"/></Button>
            <Button className='btn btn-secondary'><BsSpotify className="display-5" /></Button>
            <Button className='btn btn-secondary'><AiFillFacebook className="display-5" /></Button>
        </div>
        
    </div>
}

export default Footer;