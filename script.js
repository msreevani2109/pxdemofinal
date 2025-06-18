//Gainsight PX Tag - start
(function (n, t, a, e, co) {
  var i = "aptrinsic";
  (n[i] =
    n[i] ||
    function () {
      (n[i].q = n[i].q || []).push(arguments);
    }),
    (n[i].p = e);
  n[i].c = co;
  var r = t.createElement("script");
  (r.async = !0), (r.src = a + "?a=" + e);
  var c = t.getElementsByTagName("script")[0];
  c.parentNode.insertBefore(r, c);
})(
  window,
  document,
  "https://web-sdk.aptrinsic.com/api/aptrinsic.js",
  "AP-PBA8FLRFTQQR-2",
  {
    //"engagementChecksumFileUrl":"newchecksum.json",
    //badgesUseFixedPosition: true
  }
);
//Gainsight PX Tag - end

function deleteAllCookies() {
  aptrinsic("reset");
}

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const registerBtn = document.querySelector("#btn-register");
  const loginBtn = document.querySelector("#btn-login");
  const btnPopup = document.querySelector(".btnLgin-popup");
  const iconClose = document.querySelector(".icon-close");

  if (btnPopup) {
    btnPopup.addEventListener("click", () => {
      wrapper.classList.add("active-popup");
    });
  }

  if (registerLink) {
    registerLink.addEventListener("click", () => {
      wrapper.classList.add("active");
    });
  }

  if (loginLink) {
    loginLink.addEventListener("click", () => {
      wrapper.classList.remove("active");
    });
  }

  if (iconClose) {
    iconClose.addEventListener("click", () => {
      wrapper.classList.remove("active-popup");
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      const uname = document.getElementById("rg-un").value;
      const umail = document.getElementById("rg-mail").value;
      const upwd = document.getElementById("rg-pwd").value;
      let users = JSON.parse(localStorage.getItem("users")) || [];

      if (!uname || !umail || !upwd) {
        alert("Please fill in all fields.");
        return;
      }

      const existingUser = users.find((u) => u.user.umail === umail);
      if (existingUser) {
        alert("User email already exists. Please login!");
        showLoginForm();
        return;
      }

      const user = { uname, umail, upwd };
      users.push({ user });
      localStorage.setItem("users", JSON.stringify(users));
      alert("User registered successfully.");
      showLoginForm();
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const lid = document.getElementById("lmail").value;
      const lpwd = document.getElementById("lpwd").value;

      // Optional: Validate input before proceeding
      if (!lid || !lpwd) {
        alert("Please enter email and password.");
        return;
      }

      // Gainsight PX identify
      aptrinsic(
        "identify",
        {
          id: lid,
          email: lid,
          firstName: lid.split("@")[0],
        },
        {
          id: "Gainsight",
          name: "Gainsight",
        }
      );

      // Redirect
      window.location.href = "./home.html";
    });
  }

  function showLoginForm() {
    wrapper.classList.remove("active");
  }
});
