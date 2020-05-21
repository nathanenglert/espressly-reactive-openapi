import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import DEV from './icons/DEV';
import Github from './icons/Github';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';
import Twitter from './icons/Twitter';

import Things from './things/Things';

const { Content, Footer } = Layout;
const iconStyle = { fontSize: '20px', margin: '0 4px' };

class App extends Component {
  render() {
    return (
      <Layout style={{ backgroundColor: 'white' }}>
        <Content
          style={{
            height: 'calc(100vh - 121.5px)',
            padding: '32px 24px',
          }}
        >
          <Things />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <p>
            Made by{' '}
            <a
              href="https://nathanenglert.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nathan Englert
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/nathanenglert"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter style={iconStyle} />
            </a>
            <a
              href="https://www.instagram.com/nathanenglert/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram style={iconStyle} />
            </a>
            <a
              href="https://github.com/nathanenglert"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <Github style={iconStyle} />
            </a>
            <a
              href="https://dev.to/nathanenglert"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DEV.to"
            >
              <DEV style={iconStyle} />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-englert/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn style={iconStyle} />
            </a>
          </p>
        </Footer>
      </Layout>
    );
  }
}

export default App;
