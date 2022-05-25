import React from 'react'

const Book = (props) => {
    const { id, name, author, description, price, image } = props.book;
  return (
    <div>
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>${price}</h2>
        {/* <Button>Update</Button>
        <Button>Delete</Button> */}
    </div>
  )
}

export default Book;