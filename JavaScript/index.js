document.getElementById("showLinksBtn").addEventListener("click", function() {
    var linksList = document.getElementById("linksList");
    if (linksList.style.display === "none") {
      linksList.style.display = "block";
      linksList.innerHTML = "<li><a href='http://www.ubuntu.com'>Ubuntu Linux</a></li>" +
                            "<li><a href='http://www.linuxmint.com'>Linux Mint</a></li>" +
                            "<li><a href='http://www.zorin.com'>Zorin OS</a></li>" +
                            "<li><a href='http://www.redhat.com'>Red Hat Linux</a></li>" +
                            "<li><a href='http://www.suse.com'>SUSE Linux</a></li>"; // Add your links here
                            "<li><a href='https://www.youtube.com/@SwitchedtoLinux'>Switched to Linux</a></li>"; +
                            "<li><a href='https://www.youtube.com/@InfinitelyGalactic'>Infinitely Galactic</a></li>"; +
                            "<li><a href='https://www.youtube.com/@DistroTube'>DistroTube</a></li>";
                           } else {
      linksList.style.display = "none";
      linksList.innerHTML = ""; // Clear the list when hiding
    }
  });
  