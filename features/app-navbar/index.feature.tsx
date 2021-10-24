import React, { Ref } from 'react';
import { useRouter } from 'next/router';
import MviNavbarBrand from '../../components/mvi-navbar-brand/index.component';
import MviNavbarContainer from '../../components/mvi-navbar-container/index.component';
import MviNavbarMenuItem from '../../components/mvi-navbar-menu-item/index.component';
import MviNavbarMenuLinks from '../../components/mvi-navbar-menu-links/index.component';
import MviNavbarMenuToggle from '../../components/mvi-navbar-menu-toggle/index.component';
import MviNavbarSearch from '../../components/mvi-navbar-search/index.component';
import { Box } from '@chakra-ui/layout';

const AppNavbar: React.FC<{ isTransparent: boolean, ref: Ref<HTMLDivElement> }> = React.forwardRef(({ isTransparent }, ref: Ref<HTMLDivElement>) => {
  const router = useRouter();
  const keyword: string = String(router.query?.q || '');

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box
      as="header"
      bg={isTransparent ? 'transparent' : '#BE123C'}
      position="fixed"
      top="0"
      left="0"
      right="0"
      ref={ref}
    >
      <MviNavbarContainer>
        <MviNavbarBrand
          title="MovieStock"
          logo="/images/logo.png"
          to="/browse"
        />
        <MviNavbarMenuToggle
          isOpen={isOpen}
          toggle={toggle}
        />
        <MviNavbarSearch
          isOpen={isOpen}
          keyword={keyword}
          action="/search"
          placeholder="What do you want to watch?"
        />
        <MviNavbarMenuLinks isOpen={isOpen}>
          <MviNavbarMenuItem to="/accounts/sign-up">
            Sign Up
          </MviNavbarMenuItem>
          <MviNavbarMenuItem to="/accounts/sign-in">
            Sign In
          </MviNavbarMenuItem>
        </MviNavbarMenuLinks>
      </MviNavbarContainer>
    </Box>
  );
});

export default AppNavbar;