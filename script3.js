let convert = () =>{
    let number = document.getElementById('in1').value;
    let temp = document.querySelector("#in2").value;
    result = document.getElementById("res");
    console.log(temp)
    if( temp == "Celsius")
    {
        let Far = number * (9 / 5) + 32
        result.innerHTML = "Result in Farenhiet:"+Far + " F"
    }
    else
    {
        let Cen = (number - 32) * (5 / 9)
        result.innerHTML = "Result in Celsius:"+Cen+ " °C"
    }
}