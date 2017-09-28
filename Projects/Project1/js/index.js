$(document).ready(function(){
   /* $('.button').click(function(){
        
        // $('.box:first').css("color","orange"); 
        // $('.box:first').css("border","2px solid orange"); 
        // $('.box:first').hide(100);
        // $('.box:first').css("color","orange").css("border","2px solid orange").hide(2000);
        //$('.box:first').before("<h3> This is a jQuery text</h3>");
        //$('.box:first').css({"color":"orange","border":"2px solid orange"});
    
        //$('.box').toggleClass('color');
        
        $('img').removeAttr("src");
        
    });
    */
    
    
    
    //mouseove, hover
     $('.button').hover(function(){
        $('img').hide(2000);},
        function(){
         $('img').show(2000);}
     
    );
    
    
    
    
    
});