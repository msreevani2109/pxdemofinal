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
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const registerBtn = document.querySelector("#btn-register");
const loginBtn = document.querySelector("#btn-login");
const btnPopup = document.querySelector(".btnLgin-popup");
const iconClose = document.querySelector(".icon-close");
// btnPopup.addEventListener("click", () => {
//   wrapper.classList.add("active-popup");
// });

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

registerBtn.addEventListener("click", () => {
  const uname = document.getElementById("rg-un").value;
  const umail = document.getElementById("rg-mail").value;
  const upwd = document.getElementById("rg-pwd").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (uname === "" && umail === "" && upwd === "") {
    alert("please fill in all fields");
    return;
  }
  for (let user in users) {
    if (users[user].user.umail == umail) {
      alert("user email already exists. please login!");
      showLoginForm();
      return;
    }
  }

  const user = {
    uname: uname,
    umail: umail,
    upwd: upwd,
  };
  users.push({ user });
  localStorage.setItem("users", JSON.stringify(users));
  alert("User Registered Succesfully");
  showLoginForm();
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const lid = document.getElementById("lmail").value;
  const lpwd = document.getElementById("lpwd").value;
  aptrinsic(
    "identify",
    {
      //User Fields
      id: lid, // Required for logged in app users
      email: lid,
      firstName: lid.split("@")[0],
    },
    {
      //Account Fields
      id: "Gainsight", //Required
      name: "Gainsight",
    }
  );
  window.location.href = "./home.html";
});

function showLoginForm() {
  wrapper.classList.remove("active");
}
