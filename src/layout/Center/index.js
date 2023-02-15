import { useCanvasData } from "../../store/hooks";
import Cmp from "./Cmp";
import styles from "./index.less";

export default function Center(props) {
  const canvas = useCanvasData();
  console.log('canvas', canvas);
  
  const { style, cmps } = canvas;

  return (
    <div className={styles.main}>
      <div className={styles.canvas}>
        {cmps.map((cmp) => (
          <Cmp key={cmp.key} cmp={cmp} />
        ))}
      </div>
    </div>
  );
}
