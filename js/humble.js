$(document).ready(function(){
    $('.infobox').hide();
    
    $(window).resize(function(){
        rePaintOverlay();
        var x = window.setTimeout(function(){
            centerModal();
        }, 500);
    });
    
    $('.showMessage').click(function(){
        setup();
    });
    
    $(document).on('click', '.humbleClose', function(e){
        dissolveModal(e);
        dissolveOverlay();
    });
    
    $(document).keypress(function(e){
        if (e.keyCode === 27) {
            dissolveOverlay();
        }
    });
    
    function setup() {
        $('.infobox').show();
        createModal();
        paintOverlay();
        centerModal();
    }
    
    function createModal() {
        window.active = $('.infobox');
        $('.infobox').wrap('<div class="humbleModal" />');
        $('.infobox').parent().prepend('<img src="images/close.gif" alt="Close" class="humbleClose" />');
    }
    
    function centerModal() {
        var winHeight = $(document).innerHeight();
        var winWidth = $(document).innerWidth();
        
        var modelHeight = $('.humbleModal').height();
        var modelWidth = $('.humbleModal').width();
        
        var newLeft = (winWidth - modelWidth) / 2;
        var newTop = (winHeight - modelHeight) / 2;
        
        $('.humbleModal').animate({left: newLeft, top: newTop});
    }
    
    function paintOverlay() {
        var overlay = $('<div />');
        overlay.addClass('humbleOverlay');
        overlay.css({
            'position': 'absolute',
            'background': 'url(images/shadow.png)',
            'left': '0px',
            'top': '0px',
            'width': '100%',
            'height': '100%',
            'text-align': 'center',
            'z-index': '1000'
        });
        
        $('body').append(overlay);
    }
    
    function rePaintOverlay() {
        var winHeight = $(window).innerHeight();
        var winWidth = $(window).innerWidth();
        $('.humbleOverlay').height(winHeight);
    }
    
    function dissolveModal(e) {
        $('.infobox').unwrap()
                     .hide();
        $(e.currentTarget).remove();
        
        window.active.find('.humbleClose').hide();
        
    }
    
    function dissolveOverlay() {
        $('.humbleOverlay').fadeOut(function(){
            $('.humbleOverlay').remove();
        });
    }
});
