// 36 usandoLetEmLoop2
// exemplo da aula, "idéia certa..."

const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
    
}

funcs[2]() //  2
funcs[6]() //  6
funcs[8]() // 8
