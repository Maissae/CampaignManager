import React, { Component } from 'react';
import { 
  Collapse, 
  Container, 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  NavItem,
  NavLink, 
  UncontrolledDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import authService from './api-authorization/AuthorizeService';
import { campaignStore } from '../stores/campaignStore';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      isAuthenticated: false
    };
  }

  async componentDidMount() {
    this.setState({ 
      isAuthenticated: await authService.isAuthenticated(),
      campaigns: await campaignStore.load()
    });
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  renderTemplates() {
    if(!this.state.isAuthenticated) {
      return null;
    }

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className="nav-link" nav caret>Templates</DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/categories">Categories</DropdownItem>
          <DropdownItem href="/coalitions">Coalitions</DropdownItem>
          <DropdownItem href="/countries">Countries</DropdownItem>
          <DropdownItem href="/entities">Entities</DropdownItem>
          <DropdownItem href="/services">Services</DropdownItem>
          <DropdownItem href="/subcategories">Subcategories</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderCampaigns() {
    if(!this.state.isAuthenticated) {
      return null;
    }

    const campaignItems = this.state.campaigns.data.map((v) => {
      return (
        <DropdownItem key={v.id} href={`/campaign/${v.id}`}>{v.name}</DropdownItem>
      )
    });

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className="nav-link" nav caret>Campaigns</DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/create">Create campaign</DropdownItem>
          <DropdownItem divider />
          {campaignItems}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Campaign Manager</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                {this.renderCampaigns()}
                {this.renderTemplates()}
                <LoginMenu>
                </LoginMenu>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
