window.onload = function() {
  const smColumn = document.querySelectorAll(
    ".contact-section-2 div.wpb_column"
  );
  let arrColumn = [...smColumn];
  for (let i = 0; i < arrColumn.length; i++) {
    arrColumn[i].classList.remove("vc_col-sm-1/5");
  }

  var sPath = window.location.pathname;
  if (sPath === "/contact/") {
    document.querySelector(
      "#content > article > div > div:nth-child(9) > div > div > div > div > div > div > div > div.lvca-heading.lvca-style1.lvca-aligncenter > h3"
    ).onclick = function() {
      var x = document.querySelector("#custom-vizit");
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    document.querySelector(
      "#content > article > div > div:nth-child(6) > div > div > div > div.vc_row.wpb_row.vc_inner.vc_row-fluid.vc_custom_1564036058216.vc_row-has-fill > div > div > div > div.lvca-heading.lvca-style1.lvca-aligncenter > h3"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(6) > div > div > div > div:nth-child(2)"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
  }
  if (sPath === "/services/") {
    document.querySelector(
      "#content > article > div > div:nth-child(5) > div > div > div > div:nth-child(1) > div.wpb_column.vc_column_container.vc_col-sm-8 > div > div > div.vc_wp_text.wpb_content_element > div > div > p:nth-child(2) > span"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(5) > div > div > div > div:nth-child(2) > div.wpb_column.vc_column_container.vc_col-sm-8"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    document.querySelector(
      "#content > article > div > div:nth-child(6) > div > div > div > div:nth-child(1) > div.wpb_column.vc_column_container.vc_col-sm-8 > div > div > div.vc_wp_text.wpb_content_element > div > div > p:nth-child(2) > span"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(6) > div > div > div > div:nth-child(2) > div.wpb_column.vc_column_container.vc_col-sm-8"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    document.querySelector(
      "#content > article > div > div:nth-child(7) > div > div > div > div:nth-child(1) > div.wpb_column.vc_column_container.vc_col-sm-8 > div > div > div.vc_wp_text.wpb_content_element > div > div > p:nth-child(2) > span"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(7) > div > div > div > div:nth-child(2) > div.wpb_column.vc_column_container.vc_col-sm-8"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    document.querySelector(
      "#content > article > div > div:nth-child(8) > div > div > div > div:nth-child(1) > div.wpb_column.vc_column_container.vc_col-sm-8 > div > div > div.vc_wp_text.wpb_content_element > div > div > p:nth-child(2) > span"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(8) > div > div > div > div:nth-child(2) > div.wpb_column.vc_column_container.vc_col-sm-8"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
  }
  if (sPath === "/sl/contact/") {
    document.querySelector(
      "#content > article > div > div:nth-child(6) > div > div > div > div.vc_row.wpb_row.vc_inner.vc_row-fluid.vc_custom_1564036058216.vc_row-has-fill > div > div > div > div.lvca-heading.lvca-style1.lvca-aligncenter > h3"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(6) > div > div > div > div:nth-child(2)"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    document.querySelector(
      "#content > article > div > div:nth-child(9) > div > div > div > div > div > div > div > div.lvca-heading.lvca-style1.lvca-aligncenter > h3"
    ).onclick = function() {
      var x = document.querySelector("#custom-vizit");
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
  }
  if (sPath === "/sl/services/") {
    document.querySelector(
      "#content > article > div > div:nth-child(5) > div > div > div > div:nth-child(1) > div.wpb_column.vc_column_container.vc_col-sm-8 > div > div > div.vc_wp_text.wpb_content_element > div > div > p:nth-child(2) > span"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(5) > div > div > div > div:nth-child(2) > div.wpb_column.vc_column_container.vc_col-sm-8"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    document.querySelector(
      "#content > article > div > div:nth-child(6) > div > div > div > div:nth-child(1) > div.wpb_column.vc_column_container.vc_col-sm-8 > div > div > div.vc_wp_text.wpb_content_element > div > div > p:nth-child(2) > span"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(6) > div > div > div > div:nth-child(2) > div.wpb_column.vc_column_container.vc_col-sm-8"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    document.querySelector(
      "#content > article > div > div:nth-child(7) > div > div > div > div:nth-child(1) > div.wpb_column.vc_column_container.vc_col-sm-8 > div > div > div.vc_wp_text.wpb_content_element > div > div > p:nth-child(2) > span"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(7) > div > div > div > div:nth-child(2) > div.wpb_column.vc_column_container.vc_col-sm-8"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    document.querySelector(
      "#content > article > div > div:nth-child(8) > div > div > div > div:nth-child(1) > div.wpb_column.vc_column_container.vc_col-sm-8 > div > div > div.vc_wp_text.wpb_content_element > div > div > p:nth-child(2) > span"
    ).onclick = function() {
      var x = document.querySelector(
        "#content > article > div > div:nth-child(8) > div > div > div > div:nth-child(2) > div.wpb_column.vc_column_container.vc_col-sm-8"
      );
      if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
  }
};
