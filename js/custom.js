$(function() {
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    if (isTouchDevice) {
        $('body').removeClass('no-touch');
    }
});
// Get the modal
 $.fn.inView = function() {
        if (!this.length) return false;
        var rect = this.get(0).getBoundingClientRect();

        return (
            rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

$('.modal-button').click(function() {
        var target = $(this).attr('title');
        $('#' + target).removeClass('closed');
        $('#' + target).addClass('open');
        $('html').addClass('open-modal');
    });
$('.close').click(function() {
        $('.modal').addClass('closed');

        var video = $('.open .player').attr('src');

        $('.open .player').attr('src', ' ');
        $('.open .player').attr('src', video);

        $('.modal').removeClass('open');
        $('html').removeClass('open-modal');
    });