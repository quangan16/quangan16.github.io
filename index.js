let mode = "to right";
let randomPicker = () => {
    
    let color1 = Math.floor(Math.random()*16777215).toString(16);
    let color2 = Math.floor(Math.random()*16777215).toString(16);
    let colorPicker1 = document.getElementById("color-picker-1").value = "#"+color1;
    let colorPicker2 = document.getElementById("color-picker-2").value = "#"+ color2;
    console.log(colorPicker1);
    console.log(colorPicker2);
    document.body.style.backgroundImage = "linear-gradient("+ mode+ ", " +colorPicker1 + ", " +colorPicker2+ ")"
}

let colorPicker = setInterval(()=>{
        
        let colorPicker1 = document.getElementById("color-picker-1").value; 
    let colorPicker2 = document.getElementById("color-picker-2").value;
        document.body.style.backgroundImage = "linear-gradient("+ mode+ ", " +colorPicker1 + ", " +colorPicker2+ ")"
        document.getElementById("text2").innerHTML = "linear-gradient("+ mode+", "+ colorPicker1 + ", " + colorPicker2+ ")"
    }, 1);
    
    


