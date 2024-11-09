import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

export const getVMAutoPartsList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Путь для сохранения файла
    const filePath = path.join(__dirname, '..', 'vm-data', 'partsData.json');
    
    // Создаем поток для записи данных в файл
    const fileStream = fs.createWriteStream(filePath);

    // Отправляем GET-запрос и обрабатываем ответ через поток
    const response = await axios({
      method: 'get',
      url: 'http://77.79.21.58:8080/Copy/hs/web/files/products',
      auth: {
        username: 'http_agent',
        password: 'qc9n@28yr94+38tr9ew$e2#35y',
      },
      responseType: 'stream',  // Устанавливаем потоковый тип ответа
    });

    // Перенаправляем поток данных в файл
    response.data.pipe(fileStream);

    // Обрабатываем событие завершения записи файла
    fileStream.on('finish', () => {
      console.log('Файл успешно загружен и сохранен');
      res.status(200).json({ message: 'Файл успешно загружен и сохранен' });
    });

    // Обрабатываем ошибки, связанные с записью файла
    fileStream.on('error', (err) => {
      console.error('Ошибка при записи файла:', err);
      next(err);
    });
  } catch (error) {
    console.error('Ошибка при получении данных из внешнего API:', error);
    next(error);
  }
};
