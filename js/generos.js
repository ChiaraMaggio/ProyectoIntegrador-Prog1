window.addEventListener("load", function(){
    
    /* fetch sección películas */

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=a114d2c8656f1a238841af09c2a4f418`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        console.log(datos.genres);  

        for (let i = 0; i < datos.genres.length; i++) {
            document.querySelector(".contenedor-géneros1").innerHTML += `
                <article>
                    <div>
                        <div class="nombre-estreno">
                        <a href="detallegeneros.html?id=${datos.genres[i].id}&name=${datos.genres[i].name}&tipo=películas"><h3>${datos.genres[i].name}</h3></a>
                        </div>
                    </div>
                </article>   
            `;
        }
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    /* fetch sección series */

    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=a114d2c8656f1a238841af09c2a4f418`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        console.log(datos.genres);

        for (let i = 0; i < datos.genres.length; i++) {
            document.querySelector(".contenedor-géneros2").innerHTML += `
                <article>
                    <div>  
                        <div class="nombre-estreno">
                        <a href="detallegeneros.html?id=${datos.genres[i].id}&name=${datos.genres[i].name}&tipo=series"><h3>${datos.genres[i].name}</h3></a>
                        </div>
                    </div>
                </article>   
            `;
        }
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })    
})