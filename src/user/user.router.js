import { Router } from 'express'
const router = Router()


import * as uc from './user.controller.js'

router.get('/',uc.getUserModule)
router.post('/', uc.addUser)
router.patch('/:id', uc.updateUser)
router.delete('/:id', uc.deleteUser);
router.post('/signup', uc.signUp);
router.post('/signin', uc.signIn);
router.get('/search/age', uc.searchUsersByAgeRange);




export default router
