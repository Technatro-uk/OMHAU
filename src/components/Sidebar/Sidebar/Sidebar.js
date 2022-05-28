import React from 'react';
import {
  SideMenu,
  TopSection,
  MenuContainer,
  MenuTitle,
  Logo,
  SearchController,
  SearchBar,
  SearchButton,
  SearchIcon,
  MenuDivider,
  MainMenu,
  MainMenuItem,
  MenuLink,
  LinkItem
} from "./Sidebar.Elements";
import { SidebarData } from '../../../Data/SidebarData';

const Sidebar = ({ menuTitle }) => {

  return (
    <SideMenu>
      <TopSection>
        <MenuContainer>
          <Logo />
          <MenuTitle>{menuTitle}</MenuTitle>
        </MenuContainer>
      </TopSection>
      <SearchController>
        <SearchBar type="text" placeholder="Search" />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchController>
      <MenuDivider />
      <MainMenu>
        <MainMenuItem>
          {SidebarData.map((d) => {
            return (
              <MenuLink>
                <LinkItem to={d.menuLink}>
                  {d.menuIcon}
                  {d.menuTitle}
                </LinkItem>
              </MenuLink>
            );
          })}
        </MainMenuItem>
      </MainMenu>
    </SideMenu>
  );
}

export default Sidebar;