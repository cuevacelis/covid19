
/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { GiMoon as Luna } from 'react-icons/gi';
import { FaSun as Sol } from 'react-icons/fa';

function ButtonDarkStyle() {
  const [colorMode, setColorMode] = useColorMode();

  const CambioColor = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default');
  };

  return (
    <span
      onClick={CambioColor}
      tabIndex="0"
      role="button"
      onKeyDown={CambioColor}
      sx={{
        color: 'socialLink', fontSize: '1.25rem', paddingLeft: '0.5rem', paddingRight: '0.5rem',
      }}
    >
      {colorMode === 'default' ? <Luna /> : <Sol />}
    </span>
  );
}
export default ButtonDarkStyle;
