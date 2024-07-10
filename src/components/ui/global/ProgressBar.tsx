const ProgressBar = () => {
  return (
    <div>
      <p>Loading...</p>
      <progress
        className="progress progress-primary w-56"
        value="70"
        max="100"
      ></progress>
    </div>
  );
};

export default ProgressBar;
