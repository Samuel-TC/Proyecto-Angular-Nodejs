import app from './app'

//App inica en le puerto definido
app.listen(app.get('port'))

console.log('Server on porthttp://localhost:'+app.get('port')+'/ PORT:',app.get('port'));