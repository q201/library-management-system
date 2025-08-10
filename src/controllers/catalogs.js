const createCatalog = async (req, res) => {
  const { name, description } = req.body;
  const catalog = await req.prisma.catalog.create({
    data: { name, description },
  });
  res.status(201).json(catalog);
};

const getAllCatalogs = async (req, res) => {
  const catalogs = await req.prisma.catalog.findMany();
  res.json(catalogs);
};

const getCatalogById = async (req, res) => {
  const { id } = req.params;
  const catalog = await req.prisma.catalog.findUnique({ where: { id } });
  res.json(catalog);
};

const updateCatalog = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const catalog = await req.prisma.catalog.update({
    where: { id },
    data: { name, description },
  });
  res.json(catalog);
};

const deleteCatalog = async (req, res) => {
  const { id } = req.params;
  await req.prisma.catalog.delete({ where: { id } });
  res.status(204).send();
};

module.exports = {
  createCatalog,
  getAllCatalogs,
  getCatalogById,
  updateCatalog,
  deleteCatalog,
};
  getCatalogById,
  updateCatalog,
  deleteCatalog,
};

