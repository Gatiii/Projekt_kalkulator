let eq_pressed = 0
let button = document.querySelectorAll(".buttonn")
let equal = document.getElementById("equal")

button.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(eq_pressed == 1) {
            input.value = "";
            eq_pressed = 0;
        }
        input.value += button_class.value
    })
})

equal.addEventListener("click", () => {
    eq_pressed = 1
    let valuue = input.value

    let solution = eval(valuue)
    if(Number.isInteger(solution)) {
        input.value = solution;
    } else {
        input.value = solution.tofixed(2);
    }
})