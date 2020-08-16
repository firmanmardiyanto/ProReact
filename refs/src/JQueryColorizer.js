var $ = require("jquery");

export function ColorInvalidElements(rootelement) {
  $(rootelement)
    .find("input:invalid")
    .addClass("border-danger")
    .removeClass("border-success")
    .end()
    .find("input-value")
    .removeClass("border-danger")
    .addClass("border-success");
}
