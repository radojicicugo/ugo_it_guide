import React,{useState} from 'react';
import axios from 'axios';



function Contact(props) {


     const [email, setEmail] = useState('')
     const [name, setName] = useState('')
     const [message, setMessage] = useState('')

    

     const addDataInfo = async (e) => {
          alert('Message sent!')
          let formField = new FormData()
          formField.append('email', email)
          formField.append('name', name)
          formField.append('message', message)
          await axios({
               method: 'post',
               url: 'https://database-for-data.herokuapp.com/podaci/',
               data: formField
          }).then((response) => {
               console.log(response.data);
              
          })

     }


     return (
          <div className='m-3 p-3'>
              <h2>Contact</h2>
               <div className=" p-3 m-3">
                    <div className="set-form position- form-group m-1">
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                         />
                    </div>
                    <div className="set-form form-group m-1" >
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="name"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                         />
                    </div>
                    <div className="set-form position- form-group m-1" >
                         <textarea
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="message"
                              name="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                         />
                    </div>
                    <div>
                         <button type="button" className="btn btn-secondary m-3" onClick={addDataInfo}>Send Message</button>
                    </div>
               </div>
               <div className="footers">
                    <footer className='p-3 m-3 '>
                         <div className='p-3'>
                              Ugo IT GmbH Technical Guide
                              <div className="p-3 ">
                                   <div className="p-3 ">
                                        <div>Ugo IT GmbH</div>
                                        <div>Address: Schaffhauserstrasse 560, Zurich 8052, Switzerland </div>
                                        <div>Phone: +41772394440</div>
                                        <div className="emailF">email: <a style={{ textDecoration: 'none' }} href="mailto:webprogrammerstechnology@gmail.com">webprogrammerstechnology@gmail.com</a></div>
                                   </div>
                                   <div className="blink1 p-3">
                                        <button type="button" class="btn btn-dark"><a className='button11' href="http://www.hugo-it-gmbh.org">Press Button if you...</a></button>
                                   </div>
                              </div>
                              <hr style={{ color: 'white' }}></hr>
                              <div className='foot'>
                                   <p>Copyright © 2023 Ugo IT GmbH LLC. All Rights Reserved. This site is protected by reCaptcha and the Privacy Policy and Terms of Service apply.</p>
                              </div>
                              <div className=''>
                                   <a href='https://www.termsfeed.com/live/5c4c21f7-91cf-4b18-92d5-aa7659f0a191'><button style={{ border: 'white' }} type="button" className="btn btn-light m-2 p-1">Terms</button></a>
                                   <a href='https://www.termsfeed.com/live/b2b41338-c5c8-40b8-8f50-f95b38850964'><button style={{ border: 'white' }} type="button" className="btn btn-light m-2 p-1">Policy</button></a>
                                   <a href='/contact'><button style={{ border: 'white' }} type="button" className="btn btn-light m-2 p-1">Contact</button></a>
                              </div>
                         </div>
                    </footer>
               </div>
          </div>
     );
}

export default Contact;