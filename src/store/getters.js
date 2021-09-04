const getters = {
    organization_id: state => state.applet.appInfo.organization_id,
    token: state => state.user.userInfo.token
}
export default getters