const input = document.querySelector('#imageFile');
// previsualizar imagen de un input file
input.addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const dataURL = reader.result;
        const image = document.querySelector('#image');
        image.src = dataURL;
    };
    reader.readAsDataURL(file);
});
//////////////////////////////////////////////
input.addEventListener('change', function () {
    const image = document.querySelector('#image');
    image.addEventListener('load', function () {
        /* console.log(this.naturalWidth + 'x' + this.naturalHeight);
        console.log(this.width + 'x' + this.height); */
        /* console.log(this.naturalWidth / this.naturalHeight); */
        document.querySelector('.imgPrev').style.minHeight = image.height + "px";
        document.querySelector('.preview').style.minHeight = image.height + "px";
    });
});

window.addEventListener("resize", () => {
    /* alert("resize") */
    const image = document.querySelector('#image');
    if (image.src !== "http://127.0.0.1:5500/uploadIMG.html") {
        document.querySelector('.imgPrev').style.minHeight = "auto";
        document.querySelector('.preview').style.minHeight = "auto";
    }
    image.addEventListener('load', function () {
        if (image.src !== "http://127.0.0.1:5500/uploadIMG.html") {
            document.querySelector('.imgPrev').style.minHeight = image.height + "px";
            document.querySelector('.preview').style.minHeight = image.height + "px";
        }
    });
});

//////////////////////////////////////////////
window.onload = function() {
    const tagsInput = document.querySelector("#tagsInput");
    const tagsContainer = document.getElementsByClassName("tagsContainer")[0];
    const closeIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-9x"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>';
    function insertarTags(contenidoTag) {
        contenidoTag = contenidoTag.toLowerCase();
        if (contenidoTag[contenidoTag.length - 1] === " ") {
            contenidoTag = contenidoTag.substring(0, contenidoTag.length - 1)
        }
        
        if (!tagsArrayShared.includes(contenidoTag)) {
            const tagLabel = document.createElement("label");
            tagLabel.className = "tagsText";
            tagLabel.innerText = contenidoTag;
            const tagSpan = document.createElement("span");
            tagSpan.className = "tagsDelete";
            tagSpan.innerHTML = closeIcon;
            tagSpan.onclick = function () {
                deleteTag(this);
            }
            const tagDiv = document.createElement("div");
            tagDiv.className = "tags";
            tagDiv.appendChild(tagLabel);
            tagDiv.appendChild(tagSpan);
            tagsContainer.appendChild(tagDiv);
        } else {
            tagsInput.value = "";
        }
    }
    
    function deleteTag(tagToDelate) {
        tagsContainer.removeChild(tagToDelate.parentNode);
    }
    
    tagsInput.onkeyup = function (e) {
        if (e.key === " " &&  tagsInput.value === " ") {
            tagsInput.value = ""
        }
    }
    
    tagsInput.onkeydown = function (e) {
        var texto = tagsInput.value;
        if (e.key === "Enter") {
            /* console.log("asd" + texto + "asd") */
            if (texto && texto !== " ") {
                insertarTags(texto)
                tagsContainer.appendChild(tagsInput)
                tagsInput.value = ""
                tagsInput.focus()
            }
        }
        if (e.key === "Backspace" && texto === "") {
            if (tagsContainer.children[tagsContainer.children.length - 2]) {
                tagsContainer.removeChild(tagsContainer.children[tagsContainer.children.length - 2])
            }
        }
        if (e.key === " ") {
            var tagValue = tagsInput.value;
            if (tagValue[tagValue.length-1] === " ") {
                tagsInput.value = tagValue.substring(0, tagValue.length - 1)
            }
        }
    }
    tagsContainer.onclick = function () {
        tagsInput.focus();
    }
    }
    var tagsArrayShared = [];
    function saveTags() {
        var tagsArray = [];
        var tags =  document.getElementsByClassName("tagsContainer")[0].children;tags = [...tags];
        tags.forEach(tag => {
            if (tag.children[0]) {
                tagsArray.push(tag.children[0].textContent);
            }
        });
        tagsArrayShared = tagsArray;
        alert(`¡Ansioso de comenzar el curso de Back End! :D \n\n Personaje: ${document.querySelector("#characterName").value} \n Tags: ${tagsArray.join(", ")}`);
    }