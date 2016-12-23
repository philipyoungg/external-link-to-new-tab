(function (window, d) {
  var externalLinkToNewTab = function externalLinkToNewTab() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      renderExternalIcon: true
    };

    [].forEach.call(d.querySelectorAll('a'), function (link) {
      if (link.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        if (config.renderExternalIcon) {
          var external = d.createElement('i');
          external.classList.add('fa', 'fa-external-link');
          link.appendChild(external);
        }
      }
    });
  };
  window.externalLinkToNewTab = externalLinkToNewTab; //eslint-disable-line
})(window, document);
