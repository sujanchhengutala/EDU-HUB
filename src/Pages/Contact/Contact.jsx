import styled from "styled-components"

const Contact = () => {
  return (
    <Wrapper>
 <div className="container">
        <h2 className="section_common_heading">Contact us</h2>
        <p className="section_common_sebheading">
          Get in touch, we are always in here to help you.
        </p>
      </div>

      <div className="container grid grid-two--cols">
        <div className="contact-content">
          <form action="https://formspree.io/f/xyyqbjej" method="POST">
            <div className="grid grid-two--cols mb-3">
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="enter your name"
                />
              </div>

              <div>
                <label htmlFor="email">enter your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  required
                  placeholder="abc@sujan.com"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject">subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="your main title"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="enter your message"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn btn-submit">send message</button>
            </div>
          </form>
        </div>

        <div className="contact-map">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56521.10546058998!2d85.33757644513874!3d27.699710141206573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aae4db96d65%3A0xe5fac03979032025!2sBhaktapur%20Mini%20Mart!5e0!3m2!1sen!2snp!4v1666514046588!5m2!1sen!2snp"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  background-color: ${({theme})=>theme.colors.bg_color};

.grid{
  gap: 6.4rem;
  
}
.container:first-child{
    padding: 5.4rem 2.4rem 2.4rem 2.4rem;
  }
.contact-content{
  .grid{
    gap: 6.4rem;
  }
  form{
    .mb-3{
      margin-bottom: 3.2rem;
      label{
        display: block;
        text-transform: capitalize;
      }

      input,textarea {
  width: 100%;
  padding: 1.4rem 2.4rem;
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
}
::placeholder {
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
}


    }
    .btn-submit {
  font-size: 1.8rem;
  border: none;
  text-transform: capitalize;
}
  }
}
@media (width<= ${({theme})=>theme.size.lg}){
  .grid-two--cols{
    grid-template-columns: 1fr;
  }
}
    
`
export default Contact