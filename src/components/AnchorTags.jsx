const AnchorTags = ({ name, id, url }) => {
  return (
    <a href={url} id={id} className='link'>{name}</a>
  )
}
export default AnchorTags;