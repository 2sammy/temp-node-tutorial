console.log("first task")
console.time()
for (let i = 0; i < 1000000; i++){
    const h3 = document.querySelector('h3')
    h3.textContent = `hey everyone`
}
console.timeEnd()

console.log('next task')