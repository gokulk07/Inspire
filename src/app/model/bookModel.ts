export interface Book {
    title: string,
    PublishDate: string,
    purchaseLink: string,
    imageUrl: string
}

export interface BooksWithAuthor {
    author: string,
    birthPlace: string,
    birthday: string,
    books: Array<Book>;
}

export interface BookAPIData {
    status: string,
    data: BooksWithAuthor
}