export function mapStateForAuth(state) {
  return {
    username: state.currentUser,
    loginError: state.loginError
  }
}
