interface CardInfoProps {
  author: string;
  uploadDate: string;
  modifiedDate: string;
  size: string;
}
export default function CardInfo({
  author,
  uploadDate,
  modifiedDate,
  size,
}: CardInfoProps) {
  return (
    <div className="font-extralight text-gray-500">
      <p>Autor: {author}</p>
      <p>Subido: {uploadDate}</p>
      <p>Modificado: {modifiedDate}</p>
      <p>Tamaño: {size} MB</p>
    </div>
  );
}
