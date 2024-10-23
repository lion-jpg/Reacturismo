import React, { useEffect, useState } from 'react';
import '../Scene.css'; // Asegúrate de que la ruta sea correcta

const Board = ({ onClose, standalone = false }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://backend-culturas.elalto.gob.bo/api/teatro-eventos?populate=*');
        const data = await response.json();

        // Extraer las URLs de las imágenes
        const imagesData = data.data.map(event => {
          const imageUrl = event.attributes.imagen_evento?.data[0]?.attributes?.url;
          return imageUrl ? `https://backend-culturas.elalto.gob.bo${imageUrl}` : null;
        }).filter(url => url !== null); // Filtrar si no hay imagen

        setImages(imagesData);
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleDoubleClick = () => {
    if (!standalone) {
      window.open('/board');
    }
  };

  return (
    <div className={`tiny-billboard-container ${standalone ? 'standalone' : ''}`} onDoubleClick={handleDoubleClick}>
      <div className="tiny-billboard-header">
        <h3>Eventos</h3>
        {!standalone && <button onClick={onClose} className="tiny-close-button">×</button>}
      </div>
      {loading ? (
        <div className="tiny-loading">Cargando...</div>
      ) : images.length > 0 ? (
        <div className="tiny-image-grid">
          {images.slice(0, standalone ? images.length : 4).map((image, index) => (
            <div key={index} className="tiny-image-item">
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
      ) : (
        <div className="tiny-no-images">Sin imágenes</div>
      )}
    </div>
  );
};

export default Board;
