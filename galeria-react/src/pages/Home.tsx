import { Link } from 'react-router-dom';
// Não faço a menor ideia pq aqui ta dando erro,igual ao outro arquivo 
const Home: React.FC = () => {
  return (
    <div style={styles.container}> 
      <h1 style={styles.title}>Bem-vindo à Galeria 🖼️</h1>
      <p style={styles.subtitle}>Explore uma coleção incrível de imagens aleatórias!</p>
      <Link to="/gallery" style={styles.button}>
        🎨 Ver Galeria
      </Link>
    </div>
  );
};

// Estilos inline para melhorar a aparência
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background 0.3s ease',
  },
};

export default Home;
