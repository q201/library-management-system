const createSystemConfiguration = async (req, res) => {
  const { key, value } = req.body;
  const config = await req.prisma.systemConfiguration.create({
    data: { key, value },
  });
  res.status(201).json(config);
};

const getAllSystemConfigurations = async (req, res) => {
  const configs = await req.prisma.systemConfiguration.findMany();
  res.json(configs);
};

const updateSystemConfiguration = async (req, res) => {
  const { key } = req.params;
  const { value } = req.body;
  const config = await req.prisma.systemConfiguration.update({
    where: { key },
    data: { value },
  });
  res.json(config);
};

module.exports = {
  createSystemConfiguration,
  getAllSystemConfigurations,
  updateSystemConfiguration,
};
