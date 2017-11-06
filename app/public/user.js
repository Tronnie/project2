$(function(){
    $('#muscle').on('change', function(){
        var val = $(this).val();
        var sub = $('#workoutName');
        $('option', sub).filter(function(){
            if (
                 $(this).attr('data-group') === val
              || $(this).attr('data-group') === 'SHOW'
            ) {
              if ($(this).parent('span').length) {
                $(this).unwrap();
              }
            } else {
              if (!$(this).parent('span').length) {
                $(this).wrap( "<span>" ).parent().hide();
              }
            }
        });
    });
    $('#muscle').trigger('change');
});




















//original project 2
// function choose() {
//     if (document.getElementById('total').value == 'chest') {
//         document.getElementById('chest').style.display = 'block';
//     } else {
//         document.getElementById('chest').style.display = 'none';
//     }
//     if (document.getElementById('total').value == 'back') {
//         document.getElementById('back').style.display = 'block';
//     } else {
//         document.getElementById('back').style.display = 'none';
//     }
//     if (document.getElementById('total').value == 'shoulders') {
//         document.getElementById('shoulders').style.display = 'block';
//     } else {
//         document.getElementById('shoulders').style.display = 'none';
//     }
//     if (document.getElementById('total').value == 'abs') {
//         document.getElementById('abs').style.display = 'block';
//     } else {
//         document.getElementById('abs').style.display = 'none';
//     }
//     if (document.getElementById('total').value == 'arms') {
//         document.getElementById('arms').style.display = 'block';
//     } else {
//         document.getElementById('arms').style.display = 'none';
//     }
//     if (document.getElementById('total').value == 'legs') {
//         document.getElementById('legs').style.display = 'block';
//     } else {
//         document.getElementById('legs').style.display = 'none';
//     }
// }
