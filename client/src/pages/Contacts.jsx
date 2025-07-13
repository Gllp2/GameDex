import '../styles/contacts.css';
import Header from '../components/Header'; 
import FloatingLogosBackground from '../components/floating-logos-background';

const Contactos = () => {
    return (
        <>
            <Header />
            <FloatingLogosBackground />
            <div className = "contacts-container">
                <div className='social-info'>
                    <ul>  
                        <li><h2>E-mail:</h2> gamedex@gmail.com</li>
                        <li><h2>Tel:</h2> (+351) 999888777</li> 
                    </ul> 

                    <br></br>
                    <div className="social-section">
                        <ul> <h2>Find us at:</h2> 
                            <li><a href="#discord">Discord</a></li> 
                            <li><a href="#twitter">Twiiter / X </a></li>
                            <li><a href="#Youtube">Youtube </a></li> 
                            <li><a href="#LinkedIn">LinkedIn</a> </li>
                        </ul> 
                    </div>
                </div>      

                <hr></hr>

                <h2>Contacts Us!</h2>
                <br></br>
                <form className="contact-form">
                    <label>Name:</label>
                    <input type="text" placeholder="Your name" is required />
                    <br></br>

                    <label> Email: </label>
                    <input type="email" placeholder="Your email" is required />
                    <br></br>

                    <label> Mensagem: </label>
                    <textarea placeholder="Your message" required />
                    <br></br>

                    <br></br>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}


export default Contactos;