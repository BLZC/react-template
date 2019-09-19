/**
 * 将数据保存在storage中
 */
export default {
  //保存user
  Saveuser(user) {
    localStorage.setItem('username', user)
  },
  Savetitle(title) {
    localStorage.setItem('title', title)
  },
  Getuser() {
    let user = localStorage.getItem('username')
    if (user) {
      return user
    } else {
      return null
    }
  },
  Gettitle() {
    let title = localStorage.getItem('title')
    if (title) {
      return title
    } else {
      return null
    }
  },
  removeUser() {
    localStorage.removeItem('username')
  }
}
