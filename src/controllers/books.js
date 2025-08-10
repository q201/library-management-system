const createBook = async (req, res) => {
  const { title, author, isbn, publishedAt, copies, catalogId } = req.body;
  const book = await req.prisma.book.create({
    data: { title, author, isbn, publishedAt: new Date(publishedAt), copies, catalogId },
  });
  res.status(201).json(book);
};

const getAllBooks = async (req, res) => {
  const books = await req.prisma.book.findMany();
  res.json(books);
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await req.prisma.book.findUnique({ where: { id } });
  res.json(book);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, isbn, publishedAt, copies, catalogId } = req.body;
  const book = await req.prisma.book.update({
    where: { id },
    data: { title, author, isbn, publishedAt: new Date(publishedAt), copies, catalogId },
  });
  res.json(book);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  await req.prisma.book.delete({ where: { id } });
  res.status(204).send();
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
