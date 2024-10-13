import { Router } from 'express'
const router = Router()

import * as pc from './post.controller.js'






router.post('/', pc.addPost)
router.delete('/:id', pc.deletePost);
router.patch('/:id', pc.updatePost);
router.get('/', pc.getAllPosts);
router.get('/getAllNotes', pc.getAllNotes);





export default router
