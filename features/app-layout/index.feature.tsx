import React from 'react';
import { Container } from '@chakra-ui/react';
import AppNavbar from '../app-navbar/index.feature';

const AppLayout: React.FC<{ initHeaderIsTransparent?: boolean, enabledChangeNavbarBgScroll?: boolean }> = ({ initHeaderIsTransparent = false, enabledChangeNavbarBgScroll = true, children }) => {
  const navbarRef = React.useRef<HTMLDivElement>(null);
  const [isTransparent, setIsTransparent] = React.useState<boolean>(initHeaderIsTransparent);

  React.useEffect(() => {
    if (navbarRef.current && enabledChangeNavbarBgScroll) {
      const isScrolling = (): void => {
        const { scrollTop } = document.documentElement;
        if (scrollTop >= navbarRef.current.clientHeight) {
          setIsTransparent(false);
        } else {
          setIsTransparent(true);
        }
      }
  
      window.addEventListener('scroll', isScrolling);
      return () => window.removeEventListener('scroll', isScrolling);
    }
  }, [navbarRef.current, enabledChangeNavbarBgScroll]);

  return (
    <React.Fragment>
      <AppNavbar isTransparent={isTransparent} ref={navbarRef} />
      {children}
    </React.Fragment>
  );
}

export default AppLayout;