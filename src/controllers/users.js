const getAllUsers = async (req, res) => {
  const users = await req.prisma.user.findMany();
  res.json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await req.prisma.user.findUnique({ where: { id } });
  res.json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, role } = req.body;
  const user = await req.prisma.user.update({
    where: { id },
    data: { username, role },
  });
  res.json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await req.prisma.user.delete({ where: { id } });
  res.status(204).send();
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};


