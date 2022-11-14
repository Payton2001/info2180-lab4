
window.onload = function(){
    //const jquery = require("./jquery")
    let btn = document.getElementById('btn')
    let user_data = document.querySelector('form')
    let result = document.getElementById('results')
    let query = document.getElementById('user_input')
    const xml = new XMLHttpRequest()
    let url = 'http://localhost/info2180-lab4/superheroes.php'
    
    btn.addEventListener('click', function(e){
        e.preventDefault()

        if (query.value === '' || query.value === null){
            loadPhp()
            console.log(query.value)
            console.log('Button Clicked - Not Happy')
        }
        else{
            searchPhp(query.value)
            console.log(query.value)
            console.log('Button Clicked - Happy')
        }

    })
    
    function loadPhp(){
        xml.onload = function(){
            if ( xml.status == 200){
                let respond = xml.responseText
                result.innerHTML = respond
                console.log(respond)
            }
            else{
                alert(Error)
            }
        }
        xml.open('GET', url, true)
        xml.send()
    } 

    function searchPhp(str){
        xml.onload = function(){
            if (xml.status == 200){
                let respond = xml.responseText
                result.innerHTML = respond
                console.log(respond)
            }
            else{
                alert(Error)
            }

        }
        xml.open('GET', 'superheroes.php?query=' + str, true)
        xml.send()
    }
}