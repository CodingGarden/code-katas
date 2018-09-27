// maybe this is out of topic. I found this on a React Plugin.

handleChange = name => event => {
  this.setState({
    [name]: event.target.checked
  });
};

<input onChange={this.handleChange('description')} name="description" />
<input onChange={this.handleChange('last_name')} name="last_name" />
<input onChange={this.handleChange('first_name')} name="first_name" />

// What does the name => event => do ?