function choseOption() {
    if (document.querySelector("select").value == "[ 2 ] - Binary") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(2)
    }   else if (document.querySelector("select").value == "[ 3 ] - Ternary") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(3)
    }   else if (document.querySelector("select").value == "[ 4 ] - Quaternary") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(4)
    }   else if (document.querySelector("select").value == "[ 5 ] - Quinary") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(5)
    }   else if (document.querySelector("select").value == "[ 6 ] - Senary") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(6)
    }   else if (document.querySelector("select").value == "[ 7 ] - Septenary") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(7)
    }   else if (document.querySelector("select").value == "[ 8 ] - Octal") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(8)
    }   else if (document.querySelector("select").value == "[ 9 ] - Nonary") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(9)
    }   else if (document.querySelector("select").value == "[ 10 ] - Decimal") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(10)
    }   else if (document.querySelector("select").value == "[ 16 ] - Hexadecimal") {
        let convertValue = parseInt(document.querySelector("#decimalValue").value)
        document.querySelector("#showValue").innerHTML = Number(convertValue).toString(16)
    }   else if (document.querySelector("select").value == "Chose System") {
        document.querySelector("#showValue").innerHTML = "Please Chose System Above..."
    }   else {
        document.querySelector("#showValue").innerHTML = "Incorrect Value"
    }
}
