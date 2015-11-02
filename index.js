/**
 * export interface
 */

var server = require('./server'),
    route = require('./route'),
    routeHandler = require('./routeHandler')

var handle = {}
handle['/'] = routeHandler.start
handle['/start'] = routeHandler.start
handle['/upload'] = routeHandler.upload

server.start(route.route,handle)