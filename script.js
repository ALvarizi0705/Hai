$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".card").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  })
 function showAlert() {
    Swal.fire({
      title: "<strong> Will you be my gf? <u></u></strong>",
      icon: "info",
      html: `Can we?`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> iya
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i> ofc
      `,
      cancelButtonAriaLabel: "Thumbs down"
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        Swal.fire('Love u babe');
      }
    });
  }
