const createNotification = async (req, res) => {
  const { userId, message } = req.body;
  const notification = await req.prisma.notification.create({
    data: { userId, message },
  });
  res.status(201).json(notification);
};

const getAllNotifications = async (req, res) => {
  const notifications = await req.prisma.notification.findMany({
    where: { userId: req.user.userId },
  });
  res.json(notifications);
};

const updateNotification = async (req, res) => {
  const { id } = req.params;
  const { read } = req.body;
  const notification = await req.prisma.notification.update({
    where: { id },
    data: { read },
  });
  res.json(notification);
};

module.exports = {
  createNotification,
  getAllNotifications,
  updateNotification,
};


