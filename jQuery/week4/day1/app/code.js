$(document).ready(() => {
  $('button').on('click', function (e) {

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/`
    }).done(function (data) {
      console.log(data);

      for (let i = 0; i < data.count; i++){
        console.log('in loop');
        console.log(data.results[i].name);

        const template = `
       <div class="template">
          <h2 class="title">data.results[i].name</h2>
          <img src="${data[i].sprites.front_default}" alt="pokemon">
          <p>National Pokedex Number: ${data.id}</p>
          <p>Type: ${data[i].types[0].type.name}</p>
       </div>
      `;

        $('body').append(template)
      }
    })
  })
});