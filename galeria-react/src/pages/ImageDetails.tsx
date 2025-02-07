import { useParams, useNavigate } from 'react-router-dom';

const ImageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const imageUrl = `https://picsum.photos/id/${id}/500/500`;
  const navigate = useNavigate(); // ✅ Criando função para voltar

  return (
    <div>
      <h1>Imagem {id}</h1>
      <img src={imageUrl} alt={`Imagem ${id}`} />
      
      {/* Botão de Voltar */}
      <button onClick={() => navigate(-1)} style={{ marginTop: '10px' }}>
        🔙 Voltar
      </button>
    </div>
  );
};

export default ImageDetails;
