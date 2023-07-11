const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser);
router.route('/:id/friends/:friendId').route(addFriend).delete(removeFriend);

module.exports = router;