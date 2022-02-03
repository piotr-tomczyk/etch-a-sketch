function create_grid(size){
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.style.cssText = "border-style: solid;";
    div.style.height = 512 / size + "px";
    div.style.width = 512 / size + "px";
    div.setAttribute('id', 'leaf'); 
    div.classList.add('leaf');
    div.classList.add('hover');
    div.style.backgroundColor = "white";
    for(var i = 0; i < size; i++){
        var div2 = document.createElement('div');
        div2.classList.add('node');
        for(var j = 0; j < size; j++){
            div2.appendChild(div.cloneNode(true));
        }
        container.appendChild(div2.cloneNode(true));
    }
    var color = "blue";
    const blue = document.querySelector('#blue');
    const red = document.querySelector('#red');
    const yellow = document.querySelector('#yellow');
    blue.onclick = function(){
        color = "blue";
    };
    red.onclick = function(){
        color = "red";
    };
    yellow.onclick = function(){
        color = "yellow";
    };
    document.querySelectorAll('.leaf').forEach(item => {
        item.addEventListener('mouseover', function (e){
            item.style.backgroundColor = color;
        })
    });
    const reset_button = document.querySelector('#reset');
    reset_button.addEventListener('click', function (){
        document.querySelectorAll('.leaf').forEach(item => {
            item.style.backgroundColor = "white";
        });
    });
}
var size = 0;
var clicked = false;
var create = false;
const reset_button = document.querySelector('#reset');
const radio_4 = document.querySelector('#a4x4');
const radio_8 = document.querySelector('#a8x8');
const radio_16 = document.querySelector('#a16x16');
const form = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
radio_4.onclick = function (){
    if(!clicked){
        size = 4;
        clicked = true;
    }
};
radio_8.onclick = function(){
    if(!clicked){
        size = 8;
        clicked = true;
    }
};
radio_16.onclick = function(){
    if(!clicked){
        size = 16;
        clicked = true;
    }
};
const create_button = document.querySelector('#create-grid');
create_button.addEventListener('click', function (){
    if(!create && clicked){
        refresh_button.style.cssText = "display: block";
        create_button.style.cssText = "display: none";
        form.style.cssText = "display: none";
        form2.style.cssText = "display: block"
        reset_button.style.cssText = "display: block";
        create_grid(size);
        create = true;
    }
});
const refresh_button = document.querySelector('#refresh');
refresh_button.addEventListener('click', function (){
    window.location.reload(true);
});

