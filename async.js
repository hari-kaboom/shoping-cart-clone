function asy(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,3000)
    })
    
}


async function test(){
    await asy()
    console.log('h')
    console.log('h')
    console.log('h')
    console.log('h')
    console.log('h')

}
test()
console.log('hjghg')
console.log('hjghg')
console.log('hjghg')
console.log('hjghg')
