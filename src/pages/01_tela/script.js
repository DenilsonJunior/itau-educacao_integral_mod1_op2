events.on("ready", function () {
    $(".topicos").each(function () {
        var $parent = $(this);
        var $buttons = $parent.find('[class^="tp"]');
        var $boxes = $parent.find(".box");

        $buttons.click(function () {
            var classList = $(this).attr("class").split(/\s+/);
            var targetNumber = "";

            $.each(classList, function (index, item) {
                if (item.startsWith("tp")) {
                    targetNumber = item.replace("tp", "");
                }
            });

            $buttons.removeClass("active");
            $boxes.hide().removeClass("active");

            $(this).addClass("active");
            $parent
                .find(".boxtp" + targetNumber)
                .fadeIn()
                .addClass("active");
        });
    });


    $(".flip-project").on('click', function () {
        $(this).toggleClass("flipado");
    });

    controlModal();
    slideBase();

    $(".completeScorm").isInViewportComplete({
        container: $(".mr-full"),
        call: function () {
            console.log("complete one-page");
            scorm.setCompleted();
        },
    });

});

function controlModal() {

    $(".listMod").each(function () {
        var $parent = $(this);
        $parent.find(".it").addClass("inactive");
        $parent.find(".it1").removeClass("inactive");
        $parent.find(".mod").css("display", "none");

        $parent.find(".it").on("click", function () {

            var current = parseInt($(this).attr("mod"));

            $parent.find(".it" + current).addClass('active');
            $parent.find(".mod" + current).css("display", "flex");
            $parent
                .find(".mod" + current + " .closeMod")
                .attr("mod", current);

            $(".mr-full").css("overflow-y", "hidden");

        });

        $parent.find(".mod .closeMod").on("click", function () {
            var current = parseInt($(this).attr("mod"));
            var next = current + 1;
            $parent.find(".mod" + current).css("display", "none");
            $parent.find(".it" + next).removeClass("inactive");
            $(".mr-full").css("overflow-y", "scroll");
        });

    });


}

function slideBase() {
    $(".slide-ref").each(function () {
        var _slide = $(this);
        _slide.find(".slider").slider({
            pagination: true,
        });
    });
}