import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Instagram from "../../img/instagram.png"
import Address from "../../img/address.png"
import { useRef } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefaultf()
        emailjs
        .sendForm(
            'service_09gnpsh',
            'template_oi4m7uo',
            formRef.current,
            'AhMujrWHCzPbF8dhm'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        
    }
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    You Can Contact Me</h1> 
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone}
                        alt="" 
                        className="c-icon" 
                        />
                        +62 823 6110 9383
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        putri.119140068@student.itera.ac.id
                    </div>
                    <div className="c-info-item">
                        <img src={Instagram} alt="" className="c-icon" />
                        @putri_dwisastika
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Jln.Kelengkeng 12, Perumahan Pemda(kos bintang fajar), Way Huwi, Jati Agung, Lampung Selatan
                    </div>
            </div>
        </div>
        <div className="c-right">
                <p className="c-desc">
                    <b>Send me an Email</b> 
                    <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi dolores fugiat neque natus, eaque adipisci quaerat soluta cum dolorum dicta beatae veniam eum! Ipsam nemo necessitatibus itaque nostrum incidunt.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} /> 
                <form>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                </form>                   
            </div>
        </div>
    </div>
  );
}

export default Contact;
