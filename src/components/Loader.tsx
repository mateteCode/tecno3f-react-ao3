export const Loader = ({ text }: { text: string }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      {text && <p>{text}</p>}
    </div>
  );
};
