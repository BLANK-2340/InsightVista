const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Dataset = require('../models/Dataset');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const mongoose = require('mongoose');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: 'private',
    key: function (req, file, cb) {
      cb(null, `datasets/${req.userId}/${Date.now()}_${file.originalname}`);
    }
  })
});

router.post('/upload', auth, upload.single('file'), async (req, res) => {
  const dataset = new Dataset({
    userId: req.userId,
    filename: req.file.originalname,
    s3Key: req.file.key
  });
  await dataset.save();
  res.json({ message: 'File uploaded', datasetId: dataset._id });
});

router.get('/datasets', auth, async (req, res) => {
  const datasets = await Dataset.find({ userId: req.userId });
  res.json(datasets);
});

router.get('/data/:id', auth, async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid ID' });
  
  const dataset = await Dataset.findOne({ _id: id, userId: req.userId });
  if(!dataset) return res.status(404).json({ error: 'Dataset not found' });
  
  const params = { Bucket: process.env.S3_BUCKET_NAME, Key: dataset.s3Key };
  s3.getObject(params, (err, data) => {
    if(err) return res.status(500).json({ error: 'Failed to fetch data' });
    // Assume JSON data for simplicity
    try {
      const jsonData = JSON.parse(data.Body.toString());
      res.json(jsonData);
    } catch (e) {
      res.status(500).json({ error: 'Data is not valid JSON' });
    }
  });
});

module.exports = router;
