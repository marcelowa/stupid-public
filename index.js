import express from 'express';
import serveIndex from 'serve-index';

const app = express();
const public_dir = process.env.PUBLIC_DIR || 'public';
const port = process.env.PORT || 3000;

function logger(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
}

app.use(logger);

// app.use('/public', express.static(public_dir));
app.use('/', express.static(public_dir), serveIndex(public_dir, {'icons': true}))

app.get('/health', function (req, res) {
  res.send(`I'm alive!`);
});

app.listen(port, function () {
  console.log(`stupid-public listening on port ${port}! public dir: ${public_dir}`);
});
