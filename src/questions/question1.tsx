import { FC } from "react";
interface BookInterface {
  name: string;
  author: string;
  year: number;
  forKids: boolean;
}

type BookCardProps = {
  book: BookInterface;
};

const BookCard: FC<BookCardProps> = ({ book }) => {
  const { year, name, forKids, author } = book;

  return (
    <div>
      <p>year: {year}</p>
      <p>name: {name}</p>
      <p>forKids: {String(forKids)}</p>
      <p>author: {author}</p>
    </div>
  );
};

export default BookCard;
