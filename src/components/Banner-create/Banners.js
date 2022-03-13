import Banner from './Banner'

const Banners = (props) => {
  const { banners } = props

  console.log(' banners ', banners)

  return (
    <div>
      {banners.map((banner) => {
        return (
          <Banner
            key={banner.id}
            text={banner.text}
            height={banner.height}
            width={banner.width}
            backgroundColor={banner.backgroundColor}
          />
        )
      })}
    </div>
  )
}
export default Banners
