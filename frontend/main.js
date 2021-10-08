// simplify fetch
async function simpleFetch(url, settings) {
  return await (await fetch(url, settings)).json();
}

async function start() {
  // Get some data from the backend and write to screen
  let users = await simpleFetch('/api/users');
  // Build html from User data
  let html = '';
  for (let { id, name, mail, password } of users) {
    html += `
      <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${mail}</td>
        <td>${password}</td>
      </tr>
    `;
  }
  // Create a table and add the html and add the div to the body
  let table = document.createElement('table');
  table.innerHTML = html;
  document.body.append(table);

}

// window.addAUser = addAUser;

// async function addAUser(name, mail, password) {
//   let result = await(await fetch('api/users', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, mail, password })
//   })).json()
//   console.log(result);
// }
// start();

// Test that we can add users to the database 
// using fetch and post request
async function addUser(name, mail, password) {
  let result = await simpleFetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, mail, password })
  });
  return result;
}

async function updateUser(id, fieldsToChangeAsObject) {
  let result = await simpleFetch('/api/users/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fieldsToChangeAsObject)
  });
  return result;
}

async function deleteUser(id) {
  let result = await simpleFetch('/api/users/' + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
  return result;
}

// Make sure I  can test some functions directly from console
window.addUser = addUser;
window.updateUser = updateUser;
window.deleteUser = deleteUser;

start();



//POSTERS


// async function startPosters() {
//   // Get some data from the backend and write to screen
//   let posters = await simpleFetch('/api/posters');
//   // Build html from User data
//   let html = '';
//   for (let { id, name, description, price } of posters) {
//     html += `
//       <tr>
//         <td>${id}</td>
//         <td>${name}</td>
//         <td>${description}</td>
//         <td>${price}</td>
//       </tr>
//     `;
//   }
//   // Create a table and add the html and add the div to the body
//   let table = document.createElement('table');
//   table.innerHTML = html;
//   document.body.append(table);

// }

// // Test that we can add posters to the database 
// // using fetch and post request
// async function addPoster(name, description, price) {
//   let result = await simpleFetch('/api/posters', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, description, price })
//   });
//   return result;
// }

// async function updatePoster(id, fieldsToChangeAsObject) {
//   let result = await simpleFetch('/api/posters/' + id, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(fieldsToChangeAsObject)
//   });
//   return result;
// }

// async function deletePoster(id) {
//   let result = await simpleFetch('/api/posters/' + id, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' }
//   });
//   return result;
// }

// // Make sure I  can test some functions directly from console
// window.addPoster = addPoster;
// window.updatePoster = updatePoster;
// window.deletePoster = deletePoster;

// startPosters();