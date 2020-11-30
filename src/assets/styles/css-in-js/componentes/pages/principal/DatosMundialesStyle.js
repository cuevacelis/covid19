
/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

function ButtonDarkStyle() {
  return (
    <span
      onClick={ CambioColor }
      tabIndex="0"
      role="button"
      onKeyDown={ CambioColor }
      sx={ {
        color: 'socialLink', fontSize: '1.25rem', paddingLeft: '0.5rem', paddingRight: '0.5rem',
      } }
    >
      {colorMode === 'default' ? <Luna /> : <Sol /> }
    </span>
  );
}
export default ButtonDarkStyle;
