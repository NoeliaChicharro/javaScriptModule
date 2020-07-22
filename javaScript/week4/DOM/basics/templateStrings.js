const firstName = 'Princess',
  lastName = 'Zelda',
  title = 'of Hyrule';

const qty = 3,
  item = 'empty jars',
  price = '50',
  shop = 'Beedle\'s shop ship';

// interpolation
console.log(`${firstName} ${lastName} ${title}.`);

// Letter of payment
const mgs = `
  Hello ${firstName},
  
  Thanks for purchasing ${qty} ${item}!.
  
  Order details:
    ${firstName} ${lastName} ${title}
    ${qty} * ${price} rubies = ${qty * price} of ${item}
    
  You can pick up your order at will.
  Thank you,
  ${shop}`;

console.log(mgs);


// html templates
const myHtml = `
<section>
  <header>
  <h1>${shop}</h1>
</header>
</section>
`;

let div = document.querySelector('div');
div.innerHTML = myHtml;

