
window.onload = function(){
    //const jquery = require("./jquery")
    let btn = document.getElementById('btn')
    const xml = new XMLHttpRequest()
    let url = 'http://localhost/info2180-lab4/superheroes.php'
    btn.addEventListener('click', loadPhp)
    
    function loadPhp(){

        xml.open('GET', url)
        xml.onload = function(){
            if ( xml.status == 200){
                let respond = xml.responseText
                //console.log(respond)
                alert(respond)
            }
            else{
                alert(Error)
            }
        }
        xml.send()
    } 
    
    
}


