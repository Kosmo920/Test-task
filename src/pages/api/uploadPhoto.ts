import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const vagonNumber = req.query.vagonNumber as string;
    const uploadDir = `${process.cwd()}/public/photos`;

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = `${uploadDir}/${vagonNumber}.jpg`;
    const chunks: Buffer[] = [];

    req.on('data', (chunk: Buffer) => {
      chunks.push(chunk);
    });

    req.on('end', () => {
      const buffer = Buffer.concat(chunks);

      fs.writeFile(filePath, buffer, (err) => {
        if (err) {
          console.error('Error uploading file:', err);
        } else {
          res.status(200).json({ message: 'File uploaded successfully', photoPath: `/photos/${vagonNumber}.jpg` });
        }
      });
    });

    
  }
};

export default handler;
