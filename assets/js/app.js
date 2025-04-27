
var isMenuClicked = true

$('#btn-menu').click(function(){

    $('#menus').toggle()

    if(isMenuClicked){
        $('#menu').css({display:'none'})
        $('#close').css({display:'flex'})
        isMenuClicked = false
    }
    else{
        $('#menu').css({display:'flex'})
        $('#close').css({display:'none'})
        isMenuClicked = true
    }
})


function isMobileLink(){
     $('#menus').toggle()
     if(isMenuClicked){
        $('#menu').css({display:'none'})
        $('#close').css({display:'flex'})
        isMenuClicked = false
    }
    else{
        $('#menu').css({display:'flex'})
        $('#close').css({display:'none'})
        isMenuClicked = true
    }
}


$(window).resize(function(){
    var resizeWidth = $(window).width()
    console.log(resizeWidth)

    if(resizeWidth > 279){
        $('#menus').css({display: 'none'})
    }
    if(resizeWidth > 0){
         isMenuClicked = true
        $('#close').css({display:'none'})
         $('#menu').css({display:'flex'})
     
    }



})

$(window).scroll(function(){

    var scrollValue = $(window).scrollTop()

    if(scrollValue > 200){
        // $('#header-nav').css({position: 'fixed'})
        // $('#header-nav').css({top: '0'})
        // $('#header-nav').css({right: '0'})
        // $('#header-nav').css({left: '0'})
        // $('#header-nav').css({zIndex: '100'})
        // $('#header-nav').css({transition: 'all 0.5s'})

        $('#logo').css({width: '300px'})
        $('#logo').css({transition: 'all 0.5s'})

        $('#btn-arrow-up').css({display: 'flex'})
    }
    else{
        // $('#header-nav').css({position: 'relative'})
        $('#logo').css({width: '350px'})
        $('#btn-arrow-up').css({display: 'none'})

    }

   
})

$('#btn-arrow-up').click(function(){
    $(window).scrollTop(0)
})

var isBio = [true, true, true, true, true, true, true, true, true, true]

function bio(value){
    $('#bio-'+value).toggle()

    if(isBio[value]){
        $('#btn-bio-'+value).text('Hide Bio')
        isBio[value] = false
    }
    else{
        $('#btn-bio-'+value).text('Read Bio')
        isBio[value] = true

    }
    
}


var isViewMore = true

$('#btn-more').click(function(){
   $('#more-treat').toggle()
    if(isViewMore){
        $('#btn-caption').text('Less more')
        isViewMore = false
    }
    else{
        $('#btn-caption').text('View more')
        isViewMore = true

    }
   
})





