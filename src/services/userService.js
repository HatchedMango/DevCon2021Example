class UserService {
  getUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === 1212) {
          resolve({
            nickName: "Dan",
            displayName: "Daniel Longfellow"
          });
        } else {
          reject();
        }
      }, 1000);
    });
  }
}

export default UserService;
