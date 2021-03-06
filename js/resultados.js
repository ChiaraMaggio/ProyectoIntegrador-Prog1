window.addEventListener("load", function(){
    
    /* acceder a la query string */
    
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let busqueda = objetoQueryString.get("buscador");

        
    /* fetch para resultados de películas */

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a114d2c8656f1a238841af09c2a4f418&query=${busqueda}&page=1`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        console.log(datos.results);

        if (datos.results.length == 0){
            document.querySelector("#leyenda2").innerHTML = `
            <h3>No se hallaron resultados para <span class="texto-verde">${busqueda}</span> en God Films</h3>
            `;
        }else{
            document.querySelector(".leyenda1").innerHTML += `
                <h3>Buscaste <span class="texto-verde">${busqueda}</span> en God Films</h3>
            `;

            for (let i = 0; i < datos.results.length; i++) {
                document.querySelector(".contenedor-géneros").innerHTML += `
                    <article class="artículo-género">
                        <div>
                            <p id="clasificación">Película</p>
                            <a href="detail-movie.html?id=${datos.results[i].id}"><img class="portadas" src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="Portada de ${datos.results[i].original_title}"></a>
                            <div class="nombre-estreno">
                                <h4>${datos.results[i].original_title}</h4>
                                <p>${datos.results[i].release_date}</p>
                            </div>
                        </div>
                    </article>
                `;
            }
        }
    })

    .catch(function(error){
        console.log(`El error fue ${error}`);
    })

    /* fetch para resultados de series */

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=a114d2c8656f1a238841af09c2a4f418&language=en-US&query=${busqueda}&page=1`)
    .then(function(response){
        return response.json();
    })
    
    .then(function(datos){
        console.log(datos.results);

        if(datos.results.length == 0){
            document.querySelector("#leyenda2").innerHTML = `
                <h3>No se hallaron resultados para <span class="texto-verde">${busqueda}</span> en God Films</h3>
            `;
        }else{

            for (let i = 0; i < datos.results.length; i++) {
                document.querySelector(".contenedor-géneros").innerHTML += `
                    <article class="artículo-género">
                        <div>
                            <p id="clasificación">Serie</p>
                            <a href="detail-serie.html?id=${datos.results[i].id}"><img class="portadas" src="https://image.tmdb.org/t/p/w200${datos.results[i].poster_path}" alt="Portada de ${datos.results[i].original_name}"></a>
                            <div class="nombre-estreno">
                                <h4>${datos.results[i].original_name}</h4>
                                <p>${datos.results[i].first_air_date}</p>
                            </div>
                        </div>
                    </article>
                `;
            }
        }
    })

    .catch(function(error){
        console.log(`El error fue ${error}`);
    })

})