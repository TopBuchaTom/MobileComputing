// Global constants
const CORS_PROXY_BASEURL = "/cors"; // local proxy url to which all external fetch calls are redirected
const CORS_PROXY_ORIGINALURL_QUERYPARAM = "url"; // name of proxy url parameter that represents original url

// Plugin, that patches fetch method to relay all external fetch calls to url of local proxy,
// which is  required because otherwise app runs in browser and external urls cannot be intercepted
// and rewritten, e.g. https://someUrl/ -> /cors?url=https://someUrl/
const corsProxyPlugin = () => {
  return {
    name: 'html-transform',
    apply: 'serve',
    transformIndexHtml(html) {
      return html.replace(
        /<head>/,
        `<head>
          <script>
            // Add support for cors proxy
            const oldFetch = window.fetch;
            window.fetch = function(resource, options) {
              const url = (resource.startsWith(document.location.origin))
                ? resource
                : \`${CORS_PROXY_BASEURL}?${CORS_PROXY_ORIGINALURL_QUERYPARAM}=\${resource}\`;

              return oldFetch(url, options);
            }

          </script>
        `,
      )
    },
  }
}

// Sets up new proxy that makes new request to target url via node http server (no cors)
// and returns response to client
const corsProxyConfigurationOptions = {
  [CORS_PROXY_BASEURL]: {
    changeOrigin: true,
    configure(_, options) {
      options.rewrite = path => {
        const url = new URL(path.replace(`${CORS_PROXY_BASEURL}?${CORS_PROXY_ORIGINALURL_QUERYPARAM}=`, ""), 'file:');

        options.target = url.origin;
        
        return url.pathname + url.search
      }
    },
  }
}

export { corsProxyPlugin, corsProxyConfigurationOptions }