const ProgressBar = () => {
  return (
    <div className="my-8">
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
