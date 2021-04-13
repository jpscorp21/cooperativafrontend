import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
 

const useResponsive = () => {
  const theme = useTheme(); 

  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const tablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const desktop = useMediaQuery(theme.breakpoints.down('md'));

  return {mobile, tablet, desktop};
}

export default useResponsive;