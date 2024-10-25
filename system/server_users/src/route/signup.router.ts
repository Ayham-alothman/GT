import {Router} from 'express';

const routerUrl=Router();

routerUrl.post('/admin')
routerUrl.post('/coordition')
routerUrl.post('/student')

export default routerUrl;