function valueChanged()
    {   if($('.show-video').is(":checked"))
            $(".normal-recipes-card").hide();
        else
            $(".normal-recipes-card").show();
        if($('.show-video').is(":checked"))
            $(".video-recipes-card").show();
        else
            $(".video-recipes-card").hide();
    }
