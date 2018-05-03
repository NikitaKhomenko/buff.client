
export function loginUser(data = {}) {
  return {
    type: 'USER_LOGIN',
    data
  }
}
