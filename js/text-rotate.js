$(document).ready(function() {
    var verbs = ["create","design & build","build", "craft", "revise"];
    var nouns = ["custom software", "websites", "mobile apps", "Shopify stores & apps", "user experiences", "content strategy"];
    $(".rotate-nouns").text(nouns[0]);
    $(".rotate-verbs").text(verbs[0]);
    window.setInterval(function() {
        var nounIndex = $.inArray($(".rotate-nouns").text(), nouns);
        var verbIndex = $.inArray($(".rotate-verbs").text(), verbs);
        nounIndex = nounIndex + 1;
        if (nounIndex == nouns.length) nounIndex = 0;
        switch (nounIndex) {
            case 0:
                verbIndex = 0;
                break;
            case 1:
            case 2:
                verbIndex = 1;
                break;
            case 3:
                verbIndex = 2;
                break;
            case 4:
                verbIndex = 3;
                break;
            case 5:
                verbIndex = 4;
                break;
            default:
                break;
        }
        console.log(verbIndex);
        $(".rotate-nouns").text(nouns[nounIndex]);
        $(".rotate-verbs").text(verbs[verbIndex]);
    }, 2000);
});
//   var i = 0;
// $(".rotate-nouns").html("<span class='back'>" + nouns[0] + "</span>");
// $(".rotate-verbs").html("<span class='back'>" + verbs[0] + "</span>");
// window.setInterval(function() {
//     var nounIndex = $.inArray($(".rotate-nouns .back").text(), nouns);
//     var verbIndex = $.inArray($(".rotate-verbs .back").text(), verbs);
//     nounIndex = nounIndex + 1;
//     if (nounIndex == nouns.length) nounIndex = 0;
//     switch (nounIndex) {
//         case 0:
//         case 1:
//         case 2:
//             verbIndex = 0;
//             break;
//         case 3:
//         case 4:
//             verbIndex = 1;
//             break;
//         case 5:
//             verbIndex = 2;
//             break;
//         case 6:
//             verbIndex = 3;
//             break;
//         default:
//             break;
//     }
//     rotateText($(".rotate-nouns"), nounIndex, nouns);
//     if ($(".rotate-verbs .back").text() != verbs[verbIndex]) {
//         rotateText($(".rotate-verbs"), verbIndex, verbs);
//     }
// }, 2000);
// function rotateText(el, index, array) {
//     if (el.find(".back").length > 0) {
//         el.html(el.find(".back").html())
//     }
//     initial = el.text();
//     el.html("");
//     $("<span class='front'>" + initial + "</span>").appendTo(el);
//     $("<span class='back'>" + array[index] + "</span>").appendTo(el);
//     el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
//         "-webkit-transform": " rotateX(-180deg)",
//         "-moz-transform": " rotateX(-180deg)",
//         "-o-transform": " rotateX(-180deg)",
//         "transform": " rotateX(-180deg)"
//     })
// }