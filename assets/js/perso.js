let canvas = new fabric.Canvas('tshirt-canvas');

// Update the TShirt color according to the selected color by the user
document.getElementById("tshirt-color").addEventListener("change", function(){
    document.getElementById("tshirt-div").style.backgroundColor = this.value;
}, false);

// When the user clicks on upload a custom picture
document.getElementById('tshirt-custompicture').addEventListener("change", function(e){
    var reader = new FileReader();
    
    reader.onload = function (event){
        var imgObj = new Image();
        imgObj.src = event.target.result;

        // When the picture loads, create the image in Fabric.js
        imgObj.onload = function () {
            var img = new fabric.Image(imgObj);

            img.scaleToHeight(300);
            img.scaleToWidth(300); 
            canvas.centerObject(img);
            canvas.add(img);
            canvas.renderAll();
        };
    };

    // If the user selected a picture, load it
    if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0]);
    }
}, false);

// When the user adds text to the T-Shirt
document.getElementById("add-text-button").addEventListener("click", function(){
    var text = document.getElementById("tshirt-text").value;
    var color = document.getElementById("text-color").value;
    var font = document.getElementById("text-font").value;

    var fabricText = new fabric.Text(text, {
        left: 50,
        top: 150,
        fill: color,
        fontFamily: font,
        fontSize: 20
    });

    canvas.add(fabricText);
    canvas.renderAll();
});

// When the user selects a picture that has been added and press the DEL key
document.addEventListener("keydown", function(e) {
    var keyCode = e.keyCode;

    if(keyCode == 46){
        console.log("Removing selected element on Fabric.js on DELETE key!");
        canvas.remove(canvas.getActiveObject());
    }
}, false);
