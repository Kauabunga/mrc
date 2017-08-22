const path = require('path');
const fs = require('fs');

const React = require('react');
const {Provider} = require('react-redux');
const {renderToString} = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');
const {JssProvider, SheetsRegistry} = require('react-jss');

const {createStore} = require('redux');
const {default: routes} = require('../src/global/routes');
const {default: createGlobalReducer} = require('../src/global/reducer');
const {default: App} = require('../src/containers/App/App');

module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }
    const context = {};
    const store = createStore(createGlobalReducer());
    const sheets = new SheetsRegistry();

    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={{pathname: req.url}}
          context={context}
        >
          <JssProvider registry={sheets}>
            {routes}
          </JssProvider>
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      redirect(301, context.url)
    } else {
      // we're good, send the response

      const RenderedApp = htmlData
        .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
        .replace('</head>', `<style>${sheets.toString()}</style></head>`);
      res.send(RenderedApp);
    }
  })
}
