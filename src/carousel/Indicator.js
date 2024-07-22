import "./Indicator.css";

const Indicator = ({active = false}) => {
  return <span className={`indicator ${active  ? 'active' : ''}`}></span>;
};

export default Indicator;
