import React from 'react'

import Select from 'react-select'

const rate=[
    {label:'Posao', value:'Posao'},
    {label:'Lični život', value:'Lični život'},
    {label:'Obrazovanje', value:'Obrazovanje'},
    {label:"Porodica", value:"Porodica" },
    {label:'Zabava', value:'Zabava'},
    {label:'Putovanja', value:'Putovanja'},
    {label:'Ostalo', value:'Ostalo'},
];

class Kat extends React.Component {
    state = {
      selectedOption: null,
    };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };
    render() {
      const { selectedOption } = this.state;
   
      return (
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={rate}
          className="selection"
        />
      );
    }
  }

export default Rejting