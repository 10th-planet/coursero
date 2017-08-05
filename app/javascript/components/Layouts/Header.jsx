import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Menu,
  Image,
  Button} from 'semantic-ui-react'

export default class Header extends Component {
  render () {
    return (
      <Menu fixed='top' size='large' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='mini'
              src='/logo.png'
              style={{ marginRight: '1.5em' }}
            />
            Coursero
          </Menu.Item>
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Courses</Menu.Item>
          <Menu.Item as='a'>About</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as='a' inverted>Log in</Button>
              <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
