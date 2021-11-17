import React, { Fragment } from 'react'
import FormSection from './formSection'
import TablaSection from './tablaSection'


const Section = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="text-center">EDUCACION</h1>
        <div className="row">
          <div className="col">
            <TablaSection />
          </div>
          <div className="col">
            <FormSection />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Section
