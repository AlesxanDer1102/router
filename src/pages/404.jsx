import { Link } from "../Link"

export default function Page404 (){
    return(
      <>
      <div>
      <h1>404</h1>
      <p>La pagina que buscas no existe</p>
      </div>
      <Link to='/'>Volver a Home</Link>
      </>
      )
}