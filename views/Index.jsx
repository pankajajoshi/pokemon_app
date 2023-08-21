import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    // Assuming you have a `pokemon` prop containing the Pokemon data from your 'database'
    const { pokemon } = this.props;

    // Manipulate the data to capitalize the first letter of each Pokemon name
    const capitalizedPokemon = pokemon.map(p => {
      const name = p.name;
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      return { ...p, name: capitalized };
    });

    // Render the list of Pokemon names
    // const pokemonList = capitalizedPokemon.map(p => (
    //   <li key={p.id}>{p.name}</li>
    // ));

    const pokemonList = capitalizedPokemon.map((p, index) => (
      <li key={p.id}>
        <a href={`/pokemon/${index}`}>{p.name}</a>
      </li>
    ));

    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>{pokemonList}</ul>
      </div>
    );
  }
}

export default Index;












// import React from 'react';

// const myStyle = {
//   color: '#ffffff',
//   backgroundColor: '#000000',
// };

// class Index extends React.Component {
//   render() {
//     return (
//       <div style={myStyle}>
//         <h1>See All The Pokemon!</h1>
//       </div>
//     );
//   }
// }

// export default Index;