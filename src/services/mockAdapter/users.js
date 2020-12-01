
export function loadMockDataSingle (mock, endpoint) {
  // let pattern = new RegExp(endpoint)

  mock.onGet(new RegExp(endpoint + 'claims')).reply(200, [
    {

    }
  ])

  mock.onPost(new RegExp(endpoint + 'token'), {
    username: 'user',
    password: 'pass'
  }).reply(201, {
      accessToken: 'accessToken'
  })
}
