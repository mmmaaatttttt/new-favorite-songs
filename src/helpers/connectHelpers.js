export function mapStateToUserProps(state) {
  return {
    username: state.currentUser,
    loginError: state.loginError
  }
}
