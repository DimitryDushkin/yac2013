$(document).ready(function(evt){
            
            var src = $("ul.nav.nav-list").find("#main").find('img').attr('src')
            $("ul.nav.nav-list").find("#main").find('img').attr('src', src.replace('.png', '-w.png'))
        })