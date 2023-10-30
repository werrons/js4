
                                                                  // H O M E   W O R K



//1
//  function myFunction(str,res){
//     if(str.includes(".")){
//         return str.replace(".", res)
//
//     }else{
//         return 'В строке нет точки'
//     }
//  }
// console.log(myFunction('Softech.', '.com'))
// console.log(myFunction('Softech', '.ru'))



//2
// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4
// function myFunction(str){
//     if(str.length%2===0 && str.length<=8 && str.length>=4){
//         return `Слово ${str} четная, больше 4 и не меньше 8`
//     }else{
//         return `Слово ${str} не соответствует условиям`
//     }
// }
// console.log(myFunction('Aidina'))
// console.log(myFunction('Softech'))


//3
// строка поменять букву каждого четного индекса на E можно решить через map
// function myFunction(str) {
//     return str.map((item,idx)=>{
//         if (idx%2===0){
//             return 'E'
//         }
//         else {
//             return item
//         }
//     })
// }
// console.log(myFunction(['a','i','d','i','n']))
// console.log(myFunction(['s','o','f','t','e','c','h']))


//4
// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале
// function myFunction(str1,str2){
//     if(str1===str2 && str1.trim() && str2.trim()){
//         return 'Welcome'
//     }else{
//         return 'Error'
//     }
// }
// console.log(myFunction('werrons ','werrons '))
// console.log(myFunction('wirrons','werrons'))



//5
// ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]
// первое решение
// let arr = ['lorem', 'ipsum', 'dolor', 'sit']
// console.log(arr.map(str=>str.length))

// function myFunction(arr){
//     return arr.map(str=>str.length)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit']))




//6
// ['lorem', 'ipsum', 'dolor'] => [1,2,3]
// function myFunction(arr){
//     return arr.map((el,idx)=>idx+1)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor'] ))



//7
// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']
// function myFunction(arr){
//     return arr.map(el=>{
//         return el.includes('l','d')?el.charAt(0).toUpperCase()+el.slice(1):el
//     })
//
// }
//
// console.log(myFunction(['lorem', 'ipsum', 'dolor']))



//8
// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']
// let arr = ['lorem', 'ipsum', 'dolor']
// console.log(arr.map(el=>el.toUpperCase()))
// function myFunction(arr){
//     return arr.map(el=>el.toUpperCase())
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor']))





//9
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(arr.join("-"))

//10
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'
//  let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//  console.log(arr.join("/"))




//11
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'
//  let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//   console.log(arr.join(" "))



//12
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']
// let arr =['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(arr.filter((el,id)=>id%2))

// function myFunction(arr){
//     return arr.filter((el,idx)=>idx%2)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))



//13
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']
//  let arr =['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//  console.log(arr.filter((el,id)=>id%2===0))

// function myFunction(arr){
//     return arr.filter((el,idx)=>idx%2===0)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))



//14
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let str2 = ['consectetur', 'adipiscing', 'elit']
// let newStr=str.concat(str2)
// console.log(newStr)


// function myFunction(str,newStr){
//     return str.concat(newStr)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit', 'amet'],['consectetur', 'adipiscing', 'elit'] ))



//15
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]
// function myFunction(arr){
//
//     return arr.filter(el=>el!=='22')
// }
// console.log(myFunction([123,33,444,'22',55,66,77,88,99]))



//16
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]
// function myFunction(arr,newStr){
//     return arr.filter(el=>el!=='22').concat(newStr)
// }
// console.log(myFunction([123,33,444,'22',55,66,77,88,99],[22]))


//17
// ['null', undefined, 0, false, true, ''] => [0, false, true]
// function myFunction(arr){
//     return arr.filter((el=>el!=='null'&&el!==undefined && el!==''))
// }
// console.log(myFunction(['null', undefined, 0, false, true, '']))

//18
// ['null', undefined, 0, false, true, ''] => [0, false, true, 'null', undefined, '']
// function myFunction(arr,arr1){
//     return arr.map(el=>el).concat(arr1)
// }
// console.log(myFunction([0, false, true],['null', undefined, '']))

// function myFunction(arr){
//     return arr.sort((el,sr)=>el-sr)
// }
// console.log(myFunction(['null', undefined, 0, false, true, '']))





//19
// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
// function myFunction(arr,arr1){
//     return arr.concat(arr1)
// }
// console.log(myFunction([1123, 'qwe'],[1123, 'qwe'] ))


//20
// [null, undefined] => [null, undefined, null, undefined]
//  function myFunction(arr,arr1){
//      return arr.concat(arr1)
//  }
// console.log(myFunction([null, undefined],[null, undefined] ))



//21
// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'
// function myFunction(arr){
//   return  arr.filter((item,idx)=>idx%2===0).join(' ')
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))