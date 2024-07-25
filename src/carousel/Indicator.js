import "./Indicator.css";

const Indicator = ({index, goTo, active = false }) => {
  return <span className={`indicator ${active  ? 'active' : ''}`} onClick={() => goTo(index)}></span>;
};

export default Indicator;
