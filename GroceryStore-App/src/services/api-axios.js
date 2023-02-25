import axios from 'axios';
const apiAPI = axios.create({
    
});
async function login(username, password) {
  try {
    const response = await axios.post('http://127.0.0.1:8000/login', {
      username: username,
      password: password,
    });
    const data = response.data;
    if (data.success) {
      console.log('Login successful');
      // Navigate to the home screen or perform other actions
    } else {
      console.log(data.message);
      // Show an error message
    }
  } catch (error) {
    console.error(error);
  }
}


async function createUser(username, password, email) {
  try {
    const response = await axios.post('http://127.0.0.1:8000/create_user', {
      username: username,
      password: password,
      email: email,
    });
    const data = response.data;
    if (data.success) {
      console.log('User created successfully');
      // Navigate to the home screen or perform other actions
    } else {
      console.log(data.message);
      // Show an error message
    }
  } catch (error) {
    console.error(error);
  }
}
//This function makes a POST request to the /create_user URL with the username, password, and email fields in the request body. The Django view that handles the request can then create a new User object and save it to the database.




