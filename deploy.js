const fs = require('fs')
const path = require('path')
const util = require('util')
const OSS = require('ali-oss')

const promisifyReaddir = util.promisify(fs.readdir)
const promisifyStat = util.promisify(fs.stat)

// 阿里 OSS access key 拥有对 OSS 的全部权限
const ALIOSSKEY = {
  key: '',
  secret: ''
}

const client = new OSS({
  // 请填写你的 Bucket 对应的 region
  region: 'oss-cn-shanghai',
  accessKeyId: ALIOSSKEY.key,
  accessKeySecret: ALIOSSKEY.secret,
  // 请填写对应的 Bucket 名字
  bucket: 'blog-fog3211'
})

const publicPath = path.resolve(__dirname, './public')

async function run(proPath = '') {
  const dir = await promisifyReaddir(`${publicPath}${proPath}`)

  for (let i = 0; i < dir.length; i++) {
    const stat = await promisifyStat(path.resolve(`${publicPath}${proPath}`, dir[i]))

    if (stat.isFile()) {
      const fileStream = fs.createReadStream(path.resolve(`${publicPath}${proPath}`, dir[i]))
      console.log(`上传文件: ${proPath}/${dir[i]}`)
      await client.putStream(`${proPath}/${dir[i]}`, fileStream)
    } else if (stat.isDirectory()) {
      await run(`${proPath}/${dir[i]}`)
    }
  }
}

run()
