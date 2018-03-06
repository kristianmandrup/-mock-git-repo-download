import * as gitDownload from 'git-repo-download'
import * as path from 'path'
import * as mockFs from 'mock-fs'
import * as nock from 'nock'

// FOR TESTING
// See: https://github.com/flipxfx/download-git-repo/tree/master/test
describe('download', () => {
  const gitRepoPath = 'github.com/kristianmandrup/find-derived'
  const dest = 'packages'

  const fileStruct = {
    'repos': {
      'packages': {
        'my-template': {
          'package.json': `{
  "name": "my-template"
  }`
        }
      },
    },
    // files.zip
    'files': {
      'foo.txt': 'foo',
      'bar.txt': 'bar',
    }
  }

  beforeAll(() => {
    // use configMock.before
  })

  afterAll(() => {
    // use configMock.after
  })

  describe('asyncDownload', () => {
    it('downloads the repo', async () => {
      const options = {

      }
      const downloaded = await gitDownload(repoPath, dest, options)
      expect(downloaded).toBe({})
    })
  })
})
