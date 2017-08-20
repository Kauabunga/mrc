import StartPage from './pages/start';

fixture `Happy days test`
  .page `http://localhost:3000/`;

const startPage = new StartPage();

test('Open start page', async t => {

  const todoItemsCount = await startPage.items.count;



});
