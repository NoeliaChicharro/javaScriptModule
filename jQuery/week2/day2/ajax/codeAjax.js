$(document).ready(() => {
    const numCard = $('.user').length;

    // to not stop the rendering of the code we use an AJAX (Async JavaScript And XML)
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users'
    }).done(function (data) {

        for (let i = 0; i < data.length; i++){

            const template = `
                    <div class="persona">
            <div class="image">
                <img class="photo" src="${`https://robohash.org/${data[i].username}.png?set=set4`}">
                <h4 class="user">${data[i].username}</h4>
            </div>

            <i></i>

            <div class="info">
                <p>Name: <span class="name">${data[i].name}</span></p>
                <p>Email: <span class="email">${data[i].email}</span></p>
                <p>City: <span class="city">${data[i].address.city}</span></p>
                <p>Company: <span class="company">${data[i].company.name}</span></p>

            </div>
        </div>`;

            $('#friends').append(template)



        }
    })
});