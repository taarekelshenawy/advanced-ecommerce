
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import { useState,useEffect } from "react";

const { container, totalNum, iconWrapper,pumpAnimate } = styles;

type headerCounterProps={
    title:string,
    Quantity:number,
    to:string,
    svg:React.ReactNode;
}

const HeaderCounter = ({Quantity,to,svg,title}:headerCounterProps) => {
  const navigate = useNavigate();
   const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;

  useEffect(() => {
    if (!Quantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [Quantity]);





  return (
    <div className={container} onClick={() => navigate(to)}>
      <div className={iconWrapper}>
       {svg}
        <div className={quantityStyle}>{Quantity}</div>

      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderCounter;