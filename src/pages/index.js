import * as React from "react"

const IndexPage = () => {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h1>¡Bienvenido al Centro de Evaluación y Educación Continua de Morelia!</h1>
        <p>Descubre nuestros planes y servicios diseñados para ti.</p>
        <a href="#planes" style={styles.ctaButton}>Ver Planes</a>
      </section>

      <section id="planes" style={styles.section}>
        <h2>Planes Disponibles</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Plan Básico</h3>
            <p>Ideal para quienes empiezan. Soporte limitado y herramientas básicas.</p>
          </div>
          <div style={styles.card}>
            <h3>Plan Premium</h3>
            <p>Incluye asesoría personalizada, herramientas avanzadas y soporte prioritario.</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2>Contáctanos</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Tu nombre" style={styles.input} />
          <input type="email" placeholder="Tu correo electrónico" style={styles.input} />
          <textarea placeholder="Tu mensaje" style={{...styles.input, height: "100px"}} />
          <button type="submit" style={styles.ctaButton}>Enviar Mensaje</button>
        </form>
      </section>
    </main>
  )
}

const styles = {
  main: {
    fontFamily: "sans-serif",
    margin: 0,
    padding: 0,
    lineHeight: 1.6,
  },
  hero: {
    background: "#4f46e5",
    color: "#fff",
    padding: "80px 20px",
    textAlign: "center",
  },
  ctaButton: {
    background: "#f59e0b",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
    marginTop: "20px",
    display: "inline-block",
  },
  section: {
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "30px",
  },
  card: {
    background: "#f3f4f6",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "400px",
    margin: "30px auto 0",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
}

export default IndexPage
