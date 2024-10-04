// UI
import { AppButton, Icon } from "/src";

// Flowbite
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export const AppHeader = ({ isSidebarVisibile, setSidebarVisibility }) => (
  <Navbar fluid rounded className="fixed top-0 right-0 left-0">
    <AppButton
      icon="iconamoon:menu-burger-horizontal-fill"
      onClick={() => setSidebarVisibility(true)}
    />

    <Navbar.Brand href="#">
      <img src="/public/favicon.png" className="mr-3 h-6 sm:h-9" alt="Ta3mia" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Bashandy
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
          />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            name@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
);
