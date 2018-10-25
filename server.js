const { createServer } = require('http')
const { parse  } = require('url')

// const dotenv = require('dotenv').config()

// const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const app = next(  )
const handle= app.getRequestHandler()

const port = 3000;

const var = 'port';

app.prepare()
	.then(()=> {
		createServer((req,res)=> {
			const parsedUrl = parse(req.url, true)
			const { pathname, query  } = parsedUrl
			if (pathname === '/') {
				      app.render(req, res, '/', query)

			} else if (pathname === '/about') {
				      app.render(req, res, '/about', query)

			} else {
				      handle(req, res, parsedUrl)
			}
		})
		.listen(port, err=> {
			if(err){
				console.log(err)
			}
			else{
				console.log(`Server started and ready on port http://localhost:${port}`)
			}

		})
	})
