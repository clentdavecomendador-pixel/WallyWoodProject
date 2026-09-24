export type Poster = {
    id: string;
    name: string;
    slug: string;
    description: string;
    genre: string;
    image: string;
    width?: number;
    height?: number;
    price: number | string;
    stock: number;
}

export type Genre = {
    id: string;
    title: string;
    slug: string;
}