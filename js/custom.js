       document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "light"
                    });
                }
            );

document.getElementById("triggger").addEventListener("click", () => {
        Fancybox.show([{ src: "#dialog-content", type: "inline" }]);
      });

      document
        .getElementById("triggger-clone")
        .addEventListener("click", () => {
          Fancybox.show([{ src: "#dialog-content", type: "clone" }]);
        });