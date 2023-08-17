import apiService from "../utilities/request.service"

export const loginApi = async ({username, password}) => {
  return await apiService()({
    url: '/api/v1/accounts/login',
    method: "post",
    data: {
      login_name: username,
      password,
    }
  }).then((res) => res.data)
}