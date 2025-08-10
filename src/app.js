const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const booksRoutes = require('./routes/books');
const catalogsRoutes = require('./routes/catalogs');
const circulationsRoutes = require('./routes/circulations');
const finesRoutes = require('./routes/fines');
const notificationsRoutes = require('./routes/notifications');
const reportsRoutes = require('./routes/reports');
const systemConfigurationsRoutes = require('./routes/systemConfigurations');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/catalogs', catalogsRoutes);
app.use('/api/circulations', circulationsRoutes);
app.use('/api/fines', finesRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/system-configurations', systemConfigurationsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;



