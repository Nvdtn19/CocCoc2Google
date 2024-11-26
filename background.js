chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  const url = new URL(details.url);

  // Check if the URL is from Coccoc search
  if (url.hostname === 'coccoc.com' && url.pathname === '/search') {
    // Extract the query parameter
    const query = url.searchParams.get('query');

    if (query) {
      // Construct the Google search URL
      const googleSearchUrl = `https://google.com/search?query=${encodeURIComponent(query)}`;
      // Redirect to the Google search
      chrome.tabs.update(details.tabId, { url: googleSearchUrl });
    }
  }
}, {url: [{hostContains: 'coccoc.com'}]});
