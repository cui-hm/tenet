import html2canvas from 'html2canvas/dist/html2canvas.js'

//这是一个公用的工具类

//截图方法 返回base64格式图片 传入dom元素
export async function  saveUrlimg(Urlimg) {
  const canvas = await html2canvas(Urlimg)
  //console.log(a.toDataURL())3
  return canvas.toDataURL()
  // html2canvas(Urlimg).then(canvas => {
  //   return canvas.toDataURL()
  // })
}