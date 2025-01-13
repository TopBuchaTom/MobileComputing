// Add support for replaceAll
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(find, replace) {
    let s = this;
    while (s !== (s = s.replace(find, replace)));
    return s;
  };
}