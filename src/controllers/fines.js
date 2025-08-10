const createFine = async (req, res) => {
  const { userId, amount } = req.body;
  const fine = await req.prisma.fine.create({
    data: { userId, amount },
  });
  res.status(201).json(fine);
};

const getAllFines = async (req, res) => {
  const fines = await req.prisma.fine.findMany();
  res.json(fines);
};

const updateFine = async (req, res) => {
  const { id } = req.params;
  const { paid } = req.body;
  const fine = await req.prisma.fine.update({
    where: { id },
    data: { paid },
  });
  res.json(fine);
};

module.exports = {
  createFine,
  getAllFines,
  updateFine,
};


