import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = (props) =>{
  const { pathname } = useLocation();

  useEffect(() => {
    // document.getElementById('scrollbar')!.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
}
export default ScrollToTop;