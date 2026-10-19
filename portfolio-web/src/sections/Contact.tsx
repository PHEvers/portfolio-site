import "../styles/contact.css";

export function Contact() {
  return (
    <section className="contact-container" id="contato">
      <h2 className="contact-title">Vamos conversar?</h2>
      <p className="contact-subtitle">
        Sinta-se à vontade para se conectar comigo ou me enviar uma mensagem.
      </p>

      <div className="contact-grid">
        <a 
          href="https://wa.me/5547991237070?text=Olá%20Pedro,%20vi%20seu%20portfólio!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-card"
        >
          <h3>WhatsApp</h3>
          <p>47 99123-7070</p>
        </a>

        <a 
          href="https://www.linkedin.com/in/pedro-henrique-evers/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-card"
        >
          <h3>LinkedIn</h3>
          <p>pedro-henrique-evers</p>
        </a>

        <a 
          href="mailto:pedroevers@gmail.com"
          className="contact-card"
        >
          <h3>E-mail</h3>
          <p>pedroevers@gmail.com</p>
        </a>

        <a 
          href="https://www.instagram.com/ph.evers/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-card"
        >
          <h3>Instagram</h3>
          <p>@ph.evers</p>
        </a>
      </div>
    </section>
  );
}
