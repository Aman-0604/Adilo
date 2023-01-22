import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/home.css';


export default function Home() {
    return (
        <>
            <div className="intro-section d-flex flex-row justify-content-around align-items-center">
                <div className="content-package">
                    <div className='intro-content'>AI-POWERED VIRTUAL ASSISTANT FOR PROVIDERS.</div>
                    <div className='intro-subcontent'>By leveraging technologies such as Machine Learning and Artificial Intelligence, our solutions help medical providers save over 30-35% of their time on documentation.</div>
                    <Link to="/login"><button type="button" className="btn btn-light">Register</button></Link>
                </div>
                <div className="content-image">
                    <img src="../images/female-doctor.png" alt="doctor" className='female-doctor' />
                </div>
            </div>
            <div className="clinic-section d-flex flex-row justify-content-center align-items-center">
                <div className='clinic-image'>
                    <img src="../images/male-doctor.png" alt="doctor" className='male-doctor' />
                </div>
                <div className="clinic-package">
                    <div className='clinic-content'>WELCOME TO MODERN CLINIC</div>
                    <div className='clinic-subcontent'>Alivio is more than just a tool. Alivio helps improves quality of life by giving the providers the freedom they need to better take care of their patients.</div>
                    <Link to="/contact"><button type="button" className="btn-2">Contact Us</button></Link>
                </div>
            </div>
            <div className="care-section d-flex flex-column justify-content-center align-items-center">
                <div className="care-heading">WHY SHOULD YOU CARE</div>
                <div className="care-package">
                    <div className="card1 card" style={{ width: "18rem" }}>
                        <img src="../images/care-1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "black" }}>DOCUMENTATION</h5>
                            <p className="card-text" style={{ color: "black" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/contact" className="care-btn btn btn-light" style={{ border: "1px solid black" }}>Make an appointment</Link>
                        </div>
                    </div>
                    <div className="card2 card" style={{ width: "18rem" }}>
                        <img src="../images/care-2.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "black" }}>DIAGOSIS COADING</h5>
                            <p className="card-text" style={{ color: "black" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/contact" className="care-btn btn btn-light" style={{ border: "1px solid black" }}>Make an appointment</Link>
                        </div>
                    </div>
                    <div className="card3 card" style={{ width: "18rem" }}>
                        <img src="../images/care-3.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "black" }}>DIAGOSIS SEARCH</h5>
                            <p className="card-text" style={{ color: "black" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/contact" className="care-btn btn btn-light" style={{ border: "1px solid black" }}>Make an appointment</Link>
                        </div>
                    </div>
                </div>
                <Link to="/contact" className="footer-btn btn btn-light">
                    <p className='footer-subcontent'>WE ARE HERE FOR YOU</p>
                    <h1 className='footer-content'>BOOK A DEMO</h1>
                </Link>
                <div className="footer-info d-flex flex-row justify-content-center align-items-start">
                    <div className="footer-info-section-1 d-flex flex-column justify-content-center">
                        <img src="../images/logo-footer.png" alt="logo-footer" className='logo-footer-image' />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam animi corporis dolorum provident in iste consequatur eaque, a quia.
                    </div>
                    <div className="footer-info-section-2 d-flex flex-column justify-content-center align-items-center">
                        <h1>WE ARE AVAILABLE</h1>
                        <p>Monday-Friday: 8:00-10:00</p>
                        <p>Saturday: 8:00-10:00</p>
                        <p>Sunday: 8:00-10:00</p>
                    </div>
                    <div className="footer-info-section-3 d-flex flex-column justify-content-center align-items-center">
                        <h1>EMERGENCY MEDICAL NUMBER</h1>
                        <p>+91-00890023</p>
                        <h1>EMAIL</h1>
                        <p>xyz@gmail.com</p>
                        <h1>TELEPHONE NUMBER</h1>
                        <p>+91-00890023</p>
                    </div>
                </div>
            </div>
        </>
    )
}
