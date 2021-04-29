import Product from '../../models/Product';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await _handleGetRequest(req, res);
      break;
    case 'POST':
      await _handlePostRequest(req, res);
      break;
    case 'DELETE':
      await _handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function _handleGetRequest(req, res) {
  const { _id } = req.query;
  const product = await Product.findOne({ _id });
  res.status(200).json(product);
}

async function _handlePostRequest(req, res) {
  try {
    const { name, price, mediaUrl, description } = req.body;
    if (!name || !price || !mediaUrl || !description) {
      return res.status(422).send('Product missing one or more fields');
    }
    const product = new Product({
      name,
      price,
      mediaUrl,
      description,
    }).save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error while creating product');
  }
}

async function _handleDeleteRequest(req, res) {
  const { _id } = req.query;
  await Product.findOneAndDelete({ _id });
  res.status(204).json({});
}
