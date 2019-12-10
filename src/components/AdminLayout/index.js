import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Container from 'react-bootstrap/Container'
import './style.css'
// Admin Layout combine all view of components togedher

export class AdminLayout extends React.Component {

  render()
{
  return (
            <Container>
                  <Header />
                            {this.props.children}
                    <Footer />
            </Container>
          );
    }
}
