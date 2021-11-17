import { Fragment } from 'react'

const TablaSection = () => {
  return (
    <Fragment>
      <div className="colTabla">
        <h2>Historia Academica</h2>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">Carrera</th>
              <th scope="col">Año</th>
              <th scope="col">Institucion</th>
              <th scope="col">Lugar</th>
              <th scope="col">Culmino</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ingenieria en sistemas y telecomunicaciones</td>
              <td>2021</td>
              <td>Universidad de Manizales</td>
              <td>Manizales</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Ingenieria en sistemas y telecomunicaciones</td>
              <td>2021</td>
              <td>Universidad de Manizales</td>
              <td>Manizales</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Ingenieria en sistemas y telecomunicaciones</td>
              <td>2021</td>
              <td>Universidad de Manizales</td>
              <td>Manizales</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
        {/* <table className="table">
          <thead className="thead-dark">
            <h2>
              <tr>
                <th>Carrera</th>
                <th>Año</th>
                <th>Institución</th>
                <th>Lugar</th>
                <th>¿Culmino?</th>
              </tr>
            </h2>
          </thead>

          <tbody>
            <tr className="row">
              <td>Ingenieria en sistemas y telecomunicaciones</td>
              <td>2021</td>
              <td>Universidad de Manizales</td>
              <td>Manizales</td>
              <td>No</td>
            </tr>

            <tr className="row">
              <td>Tecnico en habilidades de programación con enfasis en aplicaciones moviles</td>
              <td>2021</td>
              <td>Universidad de Caldas</td>
              <td>Manizales</td>
              <td>No</td>
            </tr>

            <tr className="row">
              <td>Tecnologia en sistemas de información para internet</td>
              <td>2019</td>
              <td>Universidad de Manizales</td>
              <td>Manizales</td>
              <td>Si</td>
            </tr>

            <tr className="row">
              <td>Tecnico en configuración de servicios comerciales WEB</td>
              <td>2017</td>
              <td>Universidad de Manizales</td>
              <td>Manizales</td>
              <td>Si</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </Fragment>
  )
}

export default TablaSection
