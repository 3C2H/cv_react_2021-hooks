import React from 'react';

function Contact() {

  if(props.data){
    var name = props.data.name;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone= props.data.phone;
    var email = props.data.email;
    var message = props.data.contactmessage;
  }

  return (
    <section id="contact">

      <div className="row section-head">

        <div className="two columns header-col">
          <h1><span>Contact</span></h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
          <fieldset>
            <div>
              <label htmlFor="contactName">Votre nom <span className="required">*</span></label>
              <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="contactEmail">Email <span className="required">*</span></label>
              <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="contactSubject">Sujet</label>
              <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="contactMessage">Votre message <span className="required">*</span></label>
              <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
            </div>

            <div>
              <button className="submit">Envoi</button>
              <span id="image-loader">
                <img alt="" src="images/loader.gif" />
              </span>
            </div>

          </fieldset>
          </form>

          <div id="message-warning">Une erreur est survenue, veuillez r??essayer.</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!<br />
          </div>
        </div>


        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">

            <h4>Mes coordonn??es</h4>
            <p className="address">
              {name}<br />
              {street} <br />
              {city}, {zip}<br />
              <span>{phone}</span>
            </p>
          </div>

              {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                    <li>
                      <span>
                      This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                      <a href="#">http://t.co/CGIrdxIlI3</a>
                      </span>
                      <b><a href="#">2 Days Ago</a></b>
                    </li>
                    <li>
                      <span>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      <a href="#">http://t.co/CGIrdxIlI3</a>
                      </span>
                      <b><a href="#">3 Days Ago</a></b>
                    </li>
                </ul>
            </div> */}
        </aside>
      </div>
    </section>
  );
}

export default Contact;
