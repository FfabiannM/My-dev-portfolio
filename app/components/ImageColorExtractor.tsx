import React, { useState, useRef } from "react";
import { extractColors } from "extract-colors";

interface DominantColor {
  hex: string;
  red: number;
  green: number;
  blue: number;
  area: number;
  hue: number;
  saturation: number;
  lightness: number;
  intensity: number;
}

const ImageColorExtractor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [colors, setColors] = useState<DominantColor[]>([]);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Por favor, sube una imagen válida.");
      return;
    }

    setLoading(true);
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);

    try {
      const extractedColors = await extractColors(imageUrl);
      // Sort by area (dominance)
      setColors(extractedColors.sort((a, b) => b.area - a.area));
    } catch (error) {
      console.error("Error extracting colors:", error);
      alert("Hubo un error al procesar la imagen.");
    } finally {
      setLoading(false);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const onDragLeave = () => {
    setDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    // Could add a toast notification here
  };

  return (
    <div className="glass-card">
      {!image ? (
        <div
          className={`upload-area ${dragging ? "dragging" : ""}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="upload-icon">📸</div>
          <h3>Suelta tu imagen aquí</h3>
          <p className="subtitle">o haz clic para seleccionar un archivo</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={onFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
      ) : (
        <div className="results-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2rem",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "1.5rem" }}>Resultados</h2>
            <button
              className="btn-primary"
              onClick={() => {
                setImage(null);
                setColors([]);
              }}
            >
              Subir otra
            </button>
          </div>

          <div className="results-grid">
            <div className="image-preview">
              <img src={image} alt="Vista previa" />
            </div>

            <div className="colors-list">
              {loading ? (
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <p>Analizando paleta de colores...</p>
                </div>
              ) : (
                colors.map((color, index) => (
                  <div
                    key={index}
                    className="color-item"
                    onClick={() => copyToClipboard(color.hex)}
                    style={{ cursor: "pointer" }}
                    title="Clic para copiar HEX"
                  >
                    <div
                      className="swatch"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="color-info">
                      <span className="color-hex">{color.hex}</span>
                      <span className="color-meta">
                        Dominancia: {(color.area * 100).toFixed(1)}% | RGB:{" "}
                        {color.red}, {color.green}, {color.blue}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageColorExtractor;
