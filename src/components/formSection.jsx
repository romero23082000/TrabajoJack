import React from 'react'
import { Fragment } from 'react'

const FormSection = () => {
  return (
    <Fragment>
      <div class="colFormulario">
        <h2>Formulario: Agregar Educación</h2>

        {/* FORMULARIO DE BORRADOR BASESEN DE ESTE SOLO TIENEN QUE AGREGAR INPUTS  */}


        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </Fragment>
  )
}

export default FormSection
