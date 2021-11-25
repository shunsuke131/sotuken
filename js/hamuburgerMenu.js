'use strict';

$(function(){
    $(".btn-gnavi").on("click",function(){
        $(this).toggleClass("open");

        if($(this).hasClass("open")){
            $("#wrapper nav").css("left","0px");
        }else{
            $("#wrapper nav").css("left","-300px");
        }
    });
});