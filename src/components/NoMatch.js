import React from "react";

// if no page match reuter handler all response go here
export class NoMatch extends React.Component {
  render() {
    return (
      <h3 style={{textAlign: 'center',margin:'30px'}}>Ups 404 - page not found :(</h3>
    );
  }
}
