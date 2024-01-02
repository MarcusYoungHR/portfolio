import PortfolioTile from "./PortfolioTile";

export default function PortfolioTiles({ tiles }) {
  return (
    <div className="row rounded-5rem justify-content-center overflow-hidden">
      {tiles.map((tile) => {
        return <PortfolioTile {...tile} />;
      })}
    </div>
  );
}
