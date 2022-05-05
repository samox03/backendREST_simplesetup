import express from 'express';
import controller from '../controllers/Test.author'; //this needs to be updated for the new project

const router = express.Router();

router.get('/:group/:id' /*.......*/);
router.post('/:group/:id' /*.......*/);
router.get('/' /*.......*/);
router.get('/:group' /*.......*/);

export = router;
