import pipedrive from '../../src/services/drive-api'

describe('test api', () => {
  it('should success in the promise', async () => {
    const response = await pipedrive.get();
    expect(response.status).toBe(200)
  })
})


