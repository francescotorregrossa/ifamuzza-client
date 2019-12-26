import AsyncStorage from '@react-native-community/async-storage';

class Auth {
  user = undefined;

  accessToken = undefined;

  constructor(resolve) {
    AsyncStorage.getItem('@ifamuzza:accessToken')
      .then(result => {
        this.accessToken = result === null ? undefined : result;

        if (this.accessToken !== undefined) {
          console.log('AccessToken found.');
          const request = {
            method: 'GET',
            headers: {accessToken: this.accessToken},
          };

          fetch('http://localhost:8080/api/userForAccessToken', request)
            .then(response => {
              if (response.status !== 200) {
                throw new Error(response.headers.map.reason);
              }
              return response;
            })
            .then(response => response.json())
            .then(responseJson => {
              console.log('User data retrieved.');
              this.user = responseJson;
              resolve();
            })
            .catch(error => {
              console.log('Request failed.', error.message);
              this.user = undefined;
              resolve();
            });
        } else {
          console.log('AccessToken not found');
          resolve();
        }
      })
      .catch(error => {
        console.log("Can't access AsyncStorage.", error.message);
        resolve();
      });
  }

  isLoggedIn = () => this.accessToken !== undefined;

  login = (email, password) => {
    return new Promise((resolve, reject) => {
      this.user = undefined;
      this.accessToken = undefined;

      if (email === '' || password === '') {
        reject(new Error('credentials'));
        return;
      }

      const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
      };

      fetch('http://localhost:8080/api/customerLogin', request)
        .then(response => {
          if (response.status !== 200) {
            throw new Error(response.headers.map.reason);
          }
          const cookie = response.headers.map['set-cookie'];
          const start = cookie.indexOf('accessToken=');
          if (start === -1) {
            throw new Error('accessToken');
          }
          this.accessToken = cookie.substr(start + 'accessToken='.length, 64);
          AsyncStorage.setItem('@ifamuzza:accessToken', this.accessToken);
          return response;
        })
        .then(response => response.json())
        .then(responseJson => {
          this.user = responseJson;
          resolve(this.user);
        })
        .catch(error => {
          this.user = undefined;
          reject(error);
        });
    });
  };
}

export default Auth;
