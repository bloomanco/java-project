let pokemonList = [
    {
      id: 111,
      name: "Jigglypuff",
      height: 9,
    },
    {
      id: 222,
      name: "Butterfree",
      height: 8,
    },
    {
      id: 333,
      name: "Raichu",
      height: 5,
    },
  ];
  
  for (let i = 0; i < pokemonList.length; i++) {
    
    let message = `${pokemonList[i].name} (height: ${pokemonList[i].height})`;
    
    if (pokemonList[i].height > 7) {
      message += " - Wow, that's big!";
    }
    
    document.write(message + "<br>");
  }