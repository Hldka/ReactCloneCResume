import React from 'react'

const ContactForm = () => {
  return (
    <form method="post" action="form/contactform.php">

    <div className="row">

        <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
                <input
                type="text"
                class="form-control"
                name="InputName"
                id="InputName"
                placeholder="Your Name"
                required=""
                />
            </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
                <input 
                type="email"
                 class="form-control" 
                 id="InputEmail"
                 name="InputEmail" 
                 placeholder="Your Email" 
                 required="" 
                 />
            </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
                <input
                 type="text"
                 class="form-control"
                 name="InputPhone" 
                 id="InputPhone"
                  placeholder="Phone (optional)"/>
            </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
                <input 
                type="text"
                 className="form-control" 
                 id="InputSubject" 
                 name="InputSubject" 
                 placeholder="Subject"/>
            </div>
        </div>

        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
                <textarea name="InputMessage" id="InputMessage" class="form-control" rows="6" placeholder="Message" required></textarea>
            </div>
        </div>

    </div>

    <input 
    type="submit" 
    name="submit" 
    id="submit" 
    value="Send Message"
     class="btn btn-default pull-left"/>

</form>
  )
}

export default ContactForm