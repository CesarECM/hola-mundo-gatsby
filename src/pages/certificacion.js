import React, { useState } from "react"
import "../styles/certificacion.css" // Te indico el CSS más abajo

const CertificacionPage = () => {
  const [isPersona, setIsPersona] = useState(true)

  const handleToggle = () => {
    setIsPersona(!isPersona)
  }

  return (
    <main className="certificacion-page">
      <section className="hero-section">
        <div className="overlay">
          <h1>¿Buscas certificarte? Ya sea para ti o para tu equipo, nosotros te ayudamos a lograrlo, fácil y rápido.</h1>
          <p>¿Para quién es esta certificación?</p>
          <p>{isPersona ? "Enfocado para Personas" : "Enfocado para Empresas"}</p>
          <button onClick={handleToggle} className="toggle-button">
            {isPersona ? "Cambiar a Empresa" : "Cambiar a Persona"}
          </button>
        </div>
      </section>

      <section className="content-section">
        {isPersona ? (
          <div>
            <h2>¿Eres una persona que desea certificarse?</h2>
            <p>Conoce cómo certificar tus competencias laborales de manera oficial.</p>
          </div>
        ) : (
          <div>
            <h2>¿Representas a una empresa?</h2>
            <p>Descubre cómo certificar a tu equipo de trabajo para mejorar su desempeño.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default CertificacionPage
