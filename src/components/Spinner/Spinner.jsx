import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="circle little"></div>
      <div className="circle small"></div>
      <div className="circle medium"></div>
      <div className="circle large"></div>
    </div>
  );
};

export default Spinner;
