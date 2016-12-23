((window, d) => {
  const externalLinkToNewTab = (config = {
    renderExternalIcon: true,
  }) => {
    [].forEach.call(d.querySelectorAll('a'), link => {
      if (link.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        if (config.renderExternalIcon) {
          const external = d.createElement('i');
          external.classList.add('fa', 'fa-external-link');
          link.appendChild(external);
        }
      }
    });
  };
  window.externalLinkToNewTab = externalLinkToNewTab; //eslint-disable-line
})(window, document);
