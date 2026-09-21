import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcrypt';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../src/generated/prisma/client.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

const readCsv = (fileName: string) => {
  const filePath = path.join(__dirname, 'data', fileName);
  const content = fs.readFileSync(filePath, 'utf8').trim();

  if (!content) {
    return [];
  }

  const [headerLine, ...rows] = content.split(/\r?\n/).filter(Boolean);
  const headers = headerLine.split(',');

  return rows.map((row) => {
    const values = row.split(',');
    const obj: Record<string, string> = {};

    headers.forEach((header, index) => {
      obj[header.trim()] = (values[index] ?? '').trim();
    });

    return obj;
  });
};

const parseBoolean = (value: string) => value.toLowerCase() === 'true';

const main = async () => {
  await prisma.genrePosterRel.deleteMany();
  await prisma.userRating.deleteMany();
  await prisma.cartline.deleteMany();
  await prisma.poster.deleteMany();
  await prisma.genre.deleteMany();
  await prisma.user.deleteMany();

  const usersCsv = readCsv('users.csv');
  const postersCsv = readCsv('posters.csv');
  const genresCsv = readCsv('genres.csv');
  const cartlinesCsv = readCsv('cartlines.csv');
  const userRatingsCsv = readCsv('user_ratings.csv');
  const genrePosterRelCsv = readCsv('genre_poster_rel.csv');

  if (usersCsv.length > 0) {
    await prisma.user.createMany({
      data: await Promise.all(
        usersCsv.map(async (row) => ({
          id: Number(row.id),
          firstname: row.firstname,
          lastname: row.lastname,
          email: row.email,
          password: await bcrypt.hash(row.password, 10),
          role: row.role as 'USER' | 'ADMIN',
          isActive: parseBoolean(row.isActive),
        }))
      ),
    });
  }

  if (postersCsv.length > 0) {
    await prisma.poster.createMany({
      data: postersCsv.map((row) => ({
        id: Number(row.id),
        name: row.name,
        slug: row.slug,
        description: row.description,
        image: row.image,
        width: Number(row.width),
        height: Number(row.height),
        price: Number(row.price),
        stock: Number(row.stock),
      })),
    });
  }

  if (genresCsv.length > 0) {
    await prisma.genre.createMany({
      data: genresCsv.map((row) => ({
        id: Number(row.id),
        title: row.title,
        slug: row.slug,
      })),
    });
  }

  if (cartlinesCsv.length > 0) {
    await prisma.cartline.createMany({
      data: cartlinesCsv.map((row) => ({
        id: Number(row.id),
        userId: Number(row.userId),
        posterId: Number(row.posterId),
        quantity: Number(row.quantity),
      })),
    });
  }

  if (userRatingsCsv.length > 0) {
    await prisma.userRating.createMany({
      data: userRatingsCsv.map((row) => ({
        id: Number(row.id),
        userId: Number(row.userId),
        posterId: Number(row.posterId),
        numStars: Number(row.numStars),
      })),
    });
  }

  if (genrePosterRelCsv.length > 0) {
    await prisma.genrePosterRel.createMany({
      data: genrePosterRelCsv.map((row) => ({
        genreId: Number(row.genreId),
        posterId: Number(row.posterId),
      })),
    });
  }

  console.log('Seed completed successfully.');
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('Seed failed:', error);
    await prisma.$disconnect();
    process.exit(1);
  });