import { useNavigate } from "react-router-dom";
import ConstantPath from "../../constants/navigation";
const useNavigation = () => {
  let navigate = useNavigate();

  function goTo(path) {
    navigate(path);
  }

  return {
    goTo,
    paths: ConstantPath,
  };
};

export default useNavigation;
