import express, { Request, Response } from 'express';
import multer, { Multer } from 'multer';
import bodyParser from 'body-parser';

const server = express();
const upload: Multer = multer({ dest: 'uploads/' });

// Используем body-parser для обработки данных из запроса
server.use(bodyParser.json());

// Обработчик POST-запроса для загрузки фотографий
server.post('/photos', upload.single('photo'), (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Не удалось загрузить фотографию' });
    }

    // В этом месте вы можете выполнить дополнительные действия, например, сохранение информации о загруженной фотографии в базе данных

    return res.status(201).json({ message: 'Фотография успешно загружена' });
});

server.listen(3000, () => {
    console.log('Server is running');
});
