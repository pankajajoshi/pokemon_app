import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Show extends React.Component {
  render() {
    // Assuming you have a `pokemon` prop containing the Pokemon data
    const { pokemon } = this.props;

    // Manipulate the data to add ".jpg" to the end of the image URL
    const updatedPokemon = { ...pokemon, image: `${pokemon.image}.jpg` };

    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{updatedPokemon.name}</h2>
        <img src={updatedPokemon.image} alt={updatedPokemon.name} />
        <a href={ "/pokemon" }>Back</a>
        {/* <a href="/index">Back</a> */}
      </div>
    );
  }
}

export default Show;