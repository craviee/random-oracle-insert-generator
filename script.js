var faker = require('faker');
var n = 5;

for (let i = 0; i < n; i++)
{
    var username = faker.internet.userName().split("'").join('') + faker.internet.userName().split("'").join('');
    var name = faker.name.findName().split("'").join('');
    var email = username.split(' ').join('_').split("'").join('') + '@' + faker.internet.domainName();
    var sex = faker.random.objectElement(['F', 'M']);
    var birthday = faker.date.past(45).toLocaleString('pt-BR').split(' ')[0];
    var address = faker.address.streetAddress().split("'").join('');
    var password = faker.internet.password().split("'").join('');
    var creation_aux = faker.date.past(5);
    var creation = creation_aux.toLocaleString('pt-BR');
    var near_future_aux = new Date(creation_aux);
    near_future_aux.setDate(near_future_aux.getDate() + faker.random.number(60));
    var last_login = faker.date.between(creation_aux,near_future_aux).toLocaleString('pt-BR');

    var query = "INSERT INTO accounts (username, name, email, sex, birthday, address, password, creation, last_login) VALUES ('" + username + "', '" + name + "', '" + email + "', '" + sex + "', TO_DATE('" + birthday + "','DD/MM/YYYY'), '" + address + "', '" + password + "', TO_DATE('" + creation + "','DD/MM/YYYY HH24:MI:SS'), TO_DATE('" + last_login + "','DD/MM/YYYY HH24:MI:SS') );";
    
    console.log(query);
}
