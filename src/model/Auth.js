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

  signup = (user, password) => {
    return new Promise((resolve, reject) => {
      this.user = undefined;
      this.accessToken = undefined;

      if (user.email === '' || password === '') {
        reject(new Error('credentials'));
        return;
      }

      const body = {email: user.email, password};
      // const paymentMethod = {};

      if (user.firstName !== '') {
        body.firstName = user.firstName;
      }
      if (user.lastName !== '') {
        body.lastName = user.lastName;
      }
      if (user.phone !== '') {
        body.phone = user.phone;
      }
      if (user.allergies !== '') {
        body.allergies = user.allergies;
      }
      if (user.address !== '') {
        body.address = user.address;
      }
      if (user.paymentMethod !== undefined) {
        body.paymentMethod = {};
        if (user.paymentMethod.type !== '') {
          body.paymentMethod.type = user.paymentMethod.type;
        }
        if (user.paymentMethod.holder !== '') {
          body.paymentMethod.holder = user.paymentMethod.holder;
        }
        if (user.paymentMethod.address !== '') {
          body.paymentMethod.address = user.paymentMethod.address;
        }
        if (user.paymentMethod.number !== '') {
          body.paymentMethod.number = user.paymentMethod.number;
        }
        if (user.paymentMethod.ccv !== '') {
          body.paymentMethod.ccv = user.paymentMethod.ccv;
        }
        if (user.paymentMethod.expDate !== '') {
          body.paymentMethod.expDate = user.paymentMethod.expDate;
        }
      }

      const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      };

      fetch('http://localhost:8080/api/customerSignup', request)
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
