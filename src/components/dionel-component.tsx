import * as React from 'react';


export class DionelComponent extends React.Component<any,any> { 

    constructor(props: any) {
        super(props);
        this.state = { username: '' };
      }
     // changes the label when textbox value changes
      handleChange = (event: { target: { value: any; }; }) => {
        this.setState({ username: event.target.value });
      };
     
      render() {
        return (
          <React.Fragment>
            <form>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </form>
     
            <h3>Your username is: {this.state.username}</h3>
          </React.Fragment>
        );
      }
     
}