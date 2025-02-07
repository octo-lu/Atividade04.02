import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Definir a interface da imagem
interface Image {
  id: string;
  author: string;
  download_url: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get<Image[]>('https://picsum.photos/v2/list')
      .then(response => setImages(response.data))
      .catch(error => console.error("Erro ao buscar imagens", error));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎨 Galeria de Fotos</h1>

      {/* 🔙 Botão de Voltar para Home */}
      <button onClick={() => navigate('/')} style={styles.backButton}>
        ⬅️ Voltar para Home
      </button>

      <div style={styles.grid}>
        {images.map(img => (
          <Link key={img.id} to={`/image/${img.id}`} style={styles.imageLink}>
            <img src={img.download_url} alt={img.author} style={styles.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

// Estilos inline para melhorar o design
const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  backButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: '15px',
  },
  imageLink: {
    textDecoration: 'none',
  },
  image: {
    width: '200px',
    borderRadius: '10px',
    transition: 'transform 0.2s ease-in-out',
  },
};

export default Gallery;
