const Topic = require('../models/topic.js')
const { fetchOnlineData, fetchDataBase } = require('../services/topic.js')


async function getDataBase(ctx){
      let { pages,items} = ctx.query
    if (!items) {
      return ctx.body = '没有获取数据items参数'
    }
  
    //初始数值 初始值
    items = parseInt(items)
    pages = parseInt(pages)
    let results = await fetchDataBase(pages, items)
    ctx.body = results
}

async function getOnlineData(){
  
}


module.exports = {
  getDataBase,
  getOnlineData
} 

// router.get('/getitems', async (ctx, next) => {

  
//   })
//   router.get('/getdouban', async (ctx) =>{
//     let { items } = ctx.query
//     if (!items) {
//       return ctx.body = '没有获取数据items参数'
//     }
//   console.log(items);
//     let results = await fetchTopicDouban(items)
//     console.log('getdouban', results.length);
//     ctx.body = results
//   })
//   let pages = 0
//   setInterval(() =>{
//     fetchSingleDouban(pages).then(r => {
//       console.log(pages)
//       pages +=25
//       console.log('done');
//       //process.exit(0)
//     }).catch(error => {
//       console.log(error)
//       //process.exit(1)
//     })
//   }, 1000 * 1 * 1)
  