javascript: (() => {
  async function postUrl() {
      var magnetUrl = this.getAttribute("data-magnet");
      console.log(magnetUrl);
      this.style.opacity = ".33";
      try {
          const resp = await fetch("http://192.168.1.128:89/submitMagnet", {
              method: "POST",
              mode: "cors",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  url: magnetUrl,
              }),
          });
          var msgDiv = document.createElement("div");
          msgDiv.style.position = "fixed",
          msgDiv.style.top = 0;
          msgDiv.style.left = "50%";
          msgDiv.style.color = "black";
          msgDiv.style.padding = "1em";
          msgDiv.id = "__qbit_msg";
          if (resp.status !== 200) {
              msgDiv.innerHTML = "Failed to send to QbitTorrent!";
              msgDiv.style.backgroundColor = "pink";
          } else {
              msgDiv.innerHTML = "Magnet added successfully!";
              msgDiv.style.backgroundColor = "lightgreen";
          }
          document.getElementsByTagName("body")[0].append(msgDiv);
          window.setTimeout(() => {
              document.getElementById("__qbit_msg").remove();
          }, 3000);
      } catch (err) {
          alert(err.toString());
      }
      finally {
          this.style.opacity = 1;
      }
  };
  var links = [].slice.call(document.getElementsByTagName("a")).filter(x => x.href.indexOf("magnet:") === 0);
  links.forEach(link => {
      link.setAttribute("data-magnet", link.href);
      link.removeAttribute("href");
      if (link.getAttribute("data-has-click") != "true") {
          link.addEventListener("click", postUrl);
          link.setAttribute("data-has-click", "true");
      }
  });
})();
