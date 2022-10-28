const Link = ({ name, id, url }) => {
  return (
    <a href={url} id={id} className='link'>{name}</a>
  )
}
export default Link