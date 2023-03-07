app.get('/admin/password:secret', function (req, res, next) {
    if (req.params.secret === '=patata') next('route')
    else next()
}, function (req, res, next) {
    res.status(401).send({
        code: 401, message: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabera de la petición'
    });
    logger.error('ERROR 401');
});