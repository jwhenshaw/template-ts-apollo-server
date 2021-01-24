var fs = require('fs');

const envContent = `
PORT=4099
MONGO_CONNECT=mongodb://localhost:27017/?replicaSet=rs
`;

fs.writeFile('.env', envContent, function(err) {
  if (err) throw err;
  console.log('Setup complete!');
});
