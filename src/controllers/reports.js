const createReport = async (req, res) => {
  const { name, type, data } = req.body;
  const report = await req.prisma.report.create({
    data: { name, type, data },
  });
  res.status(201).json(report);
};

const getAllReports = async (req, res) => {
  const reports = await req.prisma.report.findMany();
  res.json(reports);
};

const getReportById = async (req, res) => {
  const { id } = req.params;
  const report = await req.prisma.report.findUnique({ where: { id } });
  res.json(report);
};

module.exports = {
  createReport,
  getAllReports,
  getReportById,
};

