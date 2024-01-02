import KeyValuePoint from "./KeyValuePoint";

export default function KeyValuePoints({ keyPoints, keyPointClasses }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
      {keyPoints.map((point) => {
        return <KeyValuePoint {...point} classes={keyPointClasses}/>;
      })}
    </div>
  );
}
