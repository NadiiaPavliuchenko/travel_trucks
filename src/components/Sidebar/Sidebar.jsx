import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import { SidebarContainer } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Location />
      <Filters />
    </SidebarContainer>
  );
};

export default Sidebar;
