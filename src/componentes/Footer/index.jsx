import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png) " }}>
   <div className='redes'>
    <a href='https://www.facebook.com/hchavezalvarado' >
        <img src='/img/facebook.png' alt='facebook'></img>
    </a>
    <a href='https://www.linkedin.com/in/hazel-chavez-alvarado'>
        <img src='/img/icons-linkedin.png' alt='linkedin'></img>
    </a>
    <a href='https://www.instagram.com/@hazel_chavezalv' >
        <img src='/img/instagram.png' alt='instagram'></img>
    </a>
   </div>
   <img src='/img/logo.png' alt='org'></img>
   <strong>Desarrollador por Hazel Chavez proyecto Alura</strong>
   </footer>
}

export default Footer