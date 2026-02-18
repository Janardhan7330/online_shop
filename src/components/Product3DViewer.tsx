type Product3DViewerProps = {
  modelLabel: string;
  selectedColor: string;
};

export default function Product3DViewer({
  modelLabel,
  selectedColor
}: Product3DViewerProps) {
  return (
    <div
      className="card"
      style={{
        height: 320,
        display: "grid",
        placeItems: "center",
        gap: 8
      }}
    >
      <div className="tag">3D viewer placeholder</div>
      <div style={{ fontSize: 18, fontWeight: 600 }}>{modelLabel}</div>
      <div style={{ color: "#5c5c6d" }}>Selected color: {selectedColor}</div>
      <div style={{ fontSize: 13, color: "#8a8a9c" }}>
        Rotate • Zoom • Switch material
      </div>
    </div>
  );
}
