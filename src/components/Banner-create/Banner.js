const Banner = (props) => {
  const { backgroundColor, width, height, text } = props
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
      }}
    >
      {text}
    </div>
  )
}
export default Banner
