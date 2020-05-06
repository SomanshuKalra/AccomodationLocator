/**
 * Created by Somanshu
 */
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
module.exports = [
    Inert,
    Vision,
    {plugin: require('./swagger')},
    {plugin: require('./good-console')},
    {plugin: require('./auth-token')}
];