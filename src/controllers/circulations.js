const createCirculation = async (req, res) => {
  const { bookId, userId, checkoutAt, dueAt, returnedAt } = req.body;
  const circulation = await req.prisma.circulation.create({
    data: {
      bookId,
      userId,
      checkoutAt: new Date(checkoutAt),
      dueAt: new Date(dueAt),
      returnedAt: returnedAt ? new Date(returnedAt) : null,
    },
  });
  res.status(201).json(circulation);
};

const getAllCirculations = async (req, res) => {
  const circulations = await req.prisma.circulation.findMany();
  res.json(circulations);
};

const getCirculationById = async (req, res) => {
  const { id } = req.params;
  const circulation = await req.prisma.circulation.findUnique({ where: { id } });
  res.json(circulation);
};

const updateCirculation = async (req, res) => {
  const { id } = req.params;
  const { returnedAt } = req.body;
  const circulation = await req.prisma.circulation.update({
    where: { id },
    data: { returnedAt: returnedAt ? new Date(returnedAt) : null },
  });
  res.json(circulation);
};

module.exports = {
  createCirculation,
  getAllCirculations,
  getCirculationById,
  updateCirculation,
