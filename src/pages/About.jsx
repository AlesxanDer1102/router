import { Link } from '../Link.jsx'

export default function AboutPage () {
    return(
      <>
      <h1>About</h1>
      <div>
      <img src="https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-1/466628497_1094951415349928_7431192858652980152_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFTOmjdqDrSC8KbcItS4I5WdgYB6tN1Ggx2BgHq03UaDAI3mRiqlvYsFBbr4NpYP8QKWs9DjWehlWc8rV48tDIz&_nc_ohc=UURJ_r9FQvAQ7kNvgFyS6o4&_nc_zt=24&_nc_ht=scontent.flim28-1.fna&_nc_gid=AabnpKEkXBhKUt1uL5er3Cp&oh=00_AYBMQ7iW0qMcpK8WqzAvdaGde_R3jan37kMQxOE9Hqi87g&oe=674D2428" alt="Diego Alesxander" />
      <p>Hola! Me llamo Diego Alexsander y estoy creando un clon de React Router.</p>
  
      </div>
      <Link to="/">Home</Link>
      </>
    )
  }