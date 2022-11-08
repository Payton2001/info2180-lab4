
window.onload = function(){
    //const jquery = require("./jquery")
    let btn = document.getElementById('btn')
    let result = document.getElementById('results')
    let input = document.getElementsByTagName('input')[0]
    const xml = new XMLHttpRequest()
    let url = 'http://localhost/info2180-lab4/superheroes.php'
    btn.addEventListener('click', function(e){
        e.preventDefault()
        searchPhp(input.value)
    })
    
    function loadPhp(){
        xml.open('GET', url)
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
        xml.send()
    } 

    function searchPhp(str){
        if (str.length == 0){
            loadPhp()
        }
        else{
            xml.onload = function(){
                if (xml.status == 200){
                    let lst = JSON.parse(JSON.stringify(xml.responseText))
                    console.log(lst)
                    console.log(typeof(lst))

                    let name = lst['name']
                    let alias = lst['alias']
                    let biography = lst['biograpy']

                    console.log(name, alias, biography)

                    let h3 = document.createElement('h3')
                    let h4 = document.createElement('h4')
                    let p = document.createElement('p')

                    h3.innerHTML = alias
                    h4.innerHTML = 'A.K.A.' + name
                    p.innerHTML = biography

                    result.appendChild(h3)
                    result.appendChild(h4)
                    result.appendChild(p)
                }

            }
            xml.open('GET', 'superheroes.php?query=' + str)
            xml.send()
        }
    }
    
    
}