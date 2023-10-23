/** @format */

$(function () {
  "use strict";
  $("body").css("paddingTop", $(".navbar").innerHeight());
  $(".navbar li a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });

  $(".navbar li a").on("click", function () {
    $(".navbar a").removeClass("active");
    $(this).addClass("active");
    // $(this).addClass('active').parent().siblings().find('a').removeClass('active'); Another Solution
  });

  $(window).on("scroll", function () {
    $(".block").each(function () {
      if ($(window).scrollTop() > $(this).offset().top) {
        var blockID = $(this).attr("id");
        $(".navbar a").removeClass("active");
        $('.navbar li a[data-scroll=" + blockID + "]').addClass("active");
      }
    });
    var scrollToTop = $(".scroll-to-top");
    if ($(window).scrollTop() >= 1000) {
      if (scrollToTop.is(":hidden")) {
        scrollToTop.fadeIn(400);
      }
    } else {
      scrollToTop.fadeOut(400);
    }
  });

  $(".scroll-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(".show-popup").on("click", function () {
    $($(this).data("popup")).fadeIn();
  });

  $(".popup").on("click", function () {
    $(this).fadeOut();
  });

  $(".popup .inner").on("click", function (e) {
    e.stopPropagation();
  });

  $(".popup .close").click(function (e) {
    e.preventDefault();
    $(this).parentsUntil(".popup").parent().fadeOut();
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".popup").fadeOut();
    }
  });

  $(".buttons-effects button").each(function () {
    $(this).prepend("<span></span>");
  });

  $(".from-left, .border-left").hover(
    function () {
      $(this).find("span").eq(0).animate(
        {
          width: "100%",
        },
        300
      );
    },
    function () {
      $(this).find("span").eq(0).animate(
        {
          width: 0,
        },
        300
      );
    }
  );

  $(".from-top, .border-top").hover(
    function () {
      $(this).find("span").eq(0).animate(
        {
          height: "100%",
        },
        300
      );
    },
    function () {
      $(this).find("span").eq(0).animate(
        {
          height: 0,
        },
        300
      );
    }
  );

  function bounceElement(selector, times, distance, speed) {
    for (var i = 0; i <= times; i++) {
      $(selector)
        .animate(
          {
            top: "-=" + distance,
          },
          speed
        )
        .animate(
          {
            top: "+=" + distance,
          },
          speed
        );
    }
  }

  $(".bounce-one").on("click", function () {
    bounceElement($(this), 3, 20, 400);
  });

  $(".bounce-two").on("click", function () {
    bounceElement($(this), 5, 30, 500);
  });

  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      2000,
      function () {
        $(this).text($(this).attr("data-progress") + "%");
      }
    );
  });

  $(".fixed-menu .fa-gear").on("click", function () {
    $(this).parent(".fixed-menu").toggleClass("is-visible");
    if ($(this).parent(".fixed-menu").hasClass("is-visible")) {
      $(this).parent(".fixed-menu").animate(
        {
          left: 0,
        },
        500
      );
      $("body").animate(
        {
          paddingLeft: "220px",
        },
        500
      );
    } else {
      $(this).parent(".fixed-menu").animate(
        {
          left: "-220px",
        },
        500
      );
      $("body").animate(
        {
          paddingLeft: 0,
        },
        500
      );
    }
  });
  $(".change-colors li").on("click", function () {
    $("body").attr("data-default-color", $(this).data("color"));
  });

  var namberOfThumbnails = $(".thumbnails").children().length,
    marginthumbnails = "0",
    total = (namberOfThumbnails - 1) * marginthumbnails,
    thumbnailWidth = (100 - total) / namberOfThumbnails;
  $(".thumbnails img").css({
    width: thumbnailWidth + "%",
    "margin-right": marginthumbnails + "%",
  });

  $(".thumbnails img").on("click", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    $(".master-img img")
      .hide()
      .attr("src", $(this).attr("src"))
      .fadeIn(1000)
      .width("100%")
      .height("100%");
  });

  $(".master-img .fa-chevron-right").on("click", function () {
    if ($(".thumbnails .selected").is(":last-child")) {
      $(".thumbnails img").eq(0).click();
    } else {
      $(".thumbnails .selected").next().click();
    }
  });
  $(".master-img .fa-chevron-left").on("click", function () {
    if ($(".thumbnails .selected").is(":first-child")) {
      $(".thumbnails img:last").click();
    } else {
      $(".thumbnails .selected").prev().click();
    }
  });

  $(".products .product i, .items .item i").on("click", function () {
    $(this).toggleClass("fa-plus fa-minus").next("p").slideToggle();
  });

  $(".view-options i").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".items")
      .removeClass("list-view grid-view")
      .addClass($(this).data("class"));
  });

  $(".error-message").each(function () {
    $(this).animate(
      {
        right: 0,
      },
      2000,
      function () {
        $(this).delay(3000).fadeOut();
      }
    );
  });

  var placeAttr = "";
  $("[placeholder]")
    .focus(function () {
      (placeAttr = $(this).attr("placeholder")),
        $(this).attr("placeholder", "");
    })
    .blur(function () {
      $(this).attr("placeholder", placeAttr);
    });

  $("[required]").blur(function () {
    if ($(this).val() == "") {
      $(this).next("span").fadeIn().delay(2000).fadeOut();
    }
  });

  $('<span class="asterisk">*</span>').insertBefore(":input[required]");
  $(".asterisk").parent("div").css("position", "relative");
  $(".asterisk").each(function () {
    $(this).css({
      position: "absolute",
      top: 13,
      left: $(this).parent("div").find(":input").innerWidth() - 20,
      color: "#F00",
      "font-weight": "bold",
    });
  });

  $('.our-form input[type="file"]').wrap('<div class="custom-file"></div>');
  $(".custom-file").prepend("<span>Upload Your Files</span>");
  $(".custom-file").append('<i class="fa fa-upload fa-lg skin-color"></i>');
  $('.our-form input[type="file"]').change(function () {
    $(this).prev("span").text($(this).val());
  });

  $(".detect-unicode").on("keyup", function (event) {
    var keyboardkey = event.keyCode || event.which;
    $(".unicode").html(keyboardkey);
  });

  $(".auto-direction").on("keyup", function () {
    if ($(this).val().charCodeAt(0) < 200) {
      $(this).css("direction", "ltr");
    } else {
      $(this).css("direction", "rtl");
    }
  });

  $(".add-tag").on("keyup", function () {
    var keyboardkey = event.keyCode || event.which;
    if (keyboardkey === 188) {
      var thisValue = $(this).val().slice(0, -1);
      $(".tags").append(
        '<span class="tag-span"><i class="fa <i class="fa fa-times"></i>' +
          thisValue +
          "</span>"
      );
      $(this).val("");
    }
  });

  $(".tags").on("click", ".tag-span i", function () {
    $(this).parent(".tag-span").fadeOut(800);
  });

  function trimText(selector, maxLength) {
    $(selector).each(function () {
      if ($(this).text().length > maxLength) {
        var trimmedText = $(this).text().substr(0, maxLength);
        $(this).text(trimmedText + " ...");
      }
    });
  }
  trimText(".trimmed-texts .p-one", 100);
  trimText(".trimmed-texts .p-two", 200);

  var theMaxHeight = 0;
  $(".same-height div").each(function () {
    if ($(this).height() > theMaxHeight) {
      theMaxHeight = $(this).height();
    }
  });
  $(".same-height div").height(theMaxHeight);

  var zIndexValue = 0;
  $(".cards .card").on("click", function () {
    $(this)
      .animate(
        {
          left: "20%",
          marginTop: 30,
        },
        400,
        function () {
          zIndexValue--;
          $(this).css("z-index", zIndexValue);
        }
      )
      .animate(
        {
          left: $(this).css("left"),
          marginTop: 0,
        },
        400
      );
  });

  blinkWarning();
  function blinkWarning() {
    $(".blink-warning").fadeOut(1000, function () {
      $(this).fadeIn(1000);
      blinkWarning();
    });
  }

  var newTask = $(".task-input");
  $(".add-task").on("submit", function (e) {
    e.preventDefault();
    if (newTask.val() != "") {
      $("<li>" + newTask.val() + "</li>").appendTo(".tasks");
      newTask.val("");
    }
  });

  $(".tasks").on("click", "li", function () {
    $(this)
      .css("text-decoration", "line-through")
      .delay(200)
      .fadeOut(400, function () {
        $(this).remove();
      });
  });

  var theText = $(".typer").data("text"),
    theTextLength = theText.length,
    n = 0,
    theTyper = setInterval(function () {
      $(".typer").each(function () {
        $(this).html($(this).html() + theText[n]);
      });
      n += 1;
      if (n >= theTextLength) {
        clearInterval(theTyper);
      }
    }, 20);
  var theSummary = 0;
  $(".price").each(function () {
    theSummary += parseInt($(this).text());
  });
  $(".the-total").text(theSummary);

  (function autoChange() {
    $(".ticker-list .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(1000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoChange();
          });
      } else {
        $(this)
          .delay(1000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".ticker-list li").eq(0).addClass("active").fadeIn();
            autoChange();
          });
      }
    });
  })();

  $("tabs-list li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".content-list > div").hide();
    $($(this).data("content")).fadeIn();
  });

  $(".switch-tab").on("click", function () {
    $(this).next(".dynamic-tabs").toggleClass("left-tabs");
  });

  var emailProviders = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"],
    finalString = "";
  $(".email-suggest").on("keyup", function () {
    finalString = "";
    if (!$(this).next().is(".suggest-box")) {
      $('<ul class="suggest-box"></ul>').insertAfter($(this));
    }
    for (var i = 0; i < emailProviders.length; i++) {
      finalString += "<li>" + $(this).val() + "@" + emailProviders[i] + "</li>";
    }
    $(".suggest-box").html(finalString);
  });
  $("body").on("click", ".suggest-box li", function () {
    $(".email-suggest").val($(this).text());
    $(this).parent().fadeOut(300).remove();
  });
});
