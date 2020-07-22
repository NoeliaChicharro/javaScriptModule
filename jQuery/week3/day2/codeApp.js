$(document).ready(() => {

  /* Background */
  const colors = [
    [89, 97, 129],
    [105, 162, 107],
    [195, 172, 84],
    [179, 118, 76],
    [169, 85, 72],
    [150, 88, 130]
  ];

  let step = 0;
  const colorIndices = [0,1,2,3];
  const gradientSpeed = 0.002;

  function updateGradient(){
    if ($ === undefined)return;

    const c00 = colors[colorIndices[0]],
          c01 = colors[colorIndices[1]],
          c10 = colors[colorIndices[2]],
          c11 = colors[colorIndices[3]];

    let iStep = 1 - step;
    let r1 = Math.round(iStep * c00[0] + step * c01[0]),
        g1 = Math.round(iStep * c00[1] + step * c01[1]),
        b1 = Math.round(iStep * c00[2] + step * c01[2]);
    let color1 = `rgb(${r1}, ${g1}, ${b1})`;

    let r2 = Math.round(iStep * c10[0] + step * c11[0]),
        g2 = Math.round(iStep * c10[1] + step * c11[1]),
        b2 = Math.round(iStep * c10[2] + step * c11[2]);
    let color2 = `rgb(${r2}, ${g2}, ${b2})`;

    $('#gradient')
      .css({background: `-webkit-gradient(linear, left top, right top, from(${color1}), to(${color2}))`})
      .css({background: `-moz-linear-gradient(left, ${color1}0%, ${color2}100%`});

    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];

      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

    }
  }

  setInterval(updateGradient, 10);

  /* Weather app functionality */

// read users input
  $('button').on('click', function (e) {
    e.preventDefault();
    const city = $('input').val();
    console.log(city);

    const apiKey = 'cf84b1bb2c76c864ee7feadaf5621086';

    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    }).done(function (data) {
      console.log(data);

      let temp = Math.round(data.main.temp);
      console.log(temp);

      $('.weather').html('');
      const template = `
        <div class="weather">
          <div class="temp">It is ${temp} degrees</div>
          <div class="city">In ${city}</div>
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
          <div class="description">${data.weather[0].description}</div>
        </div>
      `;
      $('.input').append(template);

    });
  });
});

//


/*


*/























