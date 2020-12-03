
export function loadMockDataSingle (mock, endpoint) {

  mock.onGet(new RegExp(endpoint+'/1/permissions')).reply(200, {
    "project": 7,
    "structures": 7,
    "products": 1,
    "files": 7,
  })

  mock.onGet(new RegExp(endpoint)).reply(200, {
    "id": 1,
    "username": "john_doe",
    "name": "John Doe",
    "email": "john.doe@msmanagement.com",
    "role": "Designer",
    "avatar": "https://picsum.photos/40/40?random"
  })
  mock.onGet(new RegExp(endpoint+'/1')).reply(200, {
    "id": 1,
    "username": "john_doe",
    "name": "John Doe",
    "email": "john.doe@msmanagement.com",
    "role": "Designer",
    "avatar": "https://picsum.photos/40/40?random"
  })

  mock.onPost(new RegExp(endpoint + 'token'), {
    username: 'user',
    password: 'pass'
  }).reply(201, {
      accessToken: 'accessToken'
  })
}

