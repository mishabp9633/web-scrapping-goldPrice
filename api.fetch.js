// const URL = "https://www.malabargoldanddiamonds.com/malabarprice/index/currentGoldRate/?_=1679748127686"
// async function fetchData() {
//     try {
//         const response = await axios.get(URL,{
//             method: "GET",
//                         headers: {
//                             "upgrade-insecure-requests": 1,
//                             "User-Agent": " Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
//                             "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
//                         }
//         }).then((response)=>{
//          let data ={"data":response.data.data}
//           data = data["data"].replace(`<div  class="golddprice_today"><h5><b>Today's Gold Rate</b></h5><table border="0" cellpadding="0" cellspacing="0" width="155"><tr><td>22 KT(916) - </td><td>Rs.  `, "").split("/g</td></tr><tr><td>")[0]
//           console.log(data);
//         })