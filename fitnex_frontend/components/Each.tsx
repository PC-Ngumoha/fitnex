import { Children } from 'react';

type ChildrenType = {
    render: (item: any, index: number) => React.ReactNode
    of: any[]
}

export const Each = ({ render, of }: ChildrenType) => Children.toArray(of.map((item, index) => render(item, index)));

const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];


<Each of={books} render={(book, index) => <li key={index}>{book.title}</li>} />