$(document).ready(function () {

    $('.menu__inside .menu__link--inside[category="Todo"]').addClass('.ct_item-active');

    $('.menu__link--inside').click(function () {
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        $('.menu__link--inside').removeClass('.ct_item-active');
        $(this).addClass('.ct_item-active');

        $('.product').css('transform', 'scale(0)');

         function hideProduct() {
            $('.product').hide();
        } setTimeout(hideProduct, 400);

        function showProduct () {
            $('.product[category="'+catProduct+'"]').show();
            $('.product[category="'+catProduct+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400)
       
    })

    $('.menu__link--inside[category="Todo"]').click(function () {
        function showAll () {
            $('.product').show();
            $('.product').css('transform', 'scale(1)');
        } setTimeout(showAll,400);
        
    })
})