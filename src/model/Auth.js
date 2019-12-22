class Auth {
  user = undefined;

  accessToken = undefined;

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
        credentials: 'include',
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

Auth.instance = new Auth();

export default Auth.instance;
