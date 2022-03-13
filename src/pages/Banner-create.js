import { useState, useEffect } from 'react'

import Form from '../components/Banner-create/From'
import Banners from '../components/Banner-create/Banners'

const BannerCreatePage = () => {
  const [banners, setBanners] = useState(() => {
    return JSON.parse(window.localStorage.getItem('BANNERS') || '[]')
  })

  useEffect(() => {
    console.log('변화됨 banners', banners)
    window.localStorage.setItem('BANNERS', JSON.stringify(banners))
  }, [banners])

  const handleAddBanner = (banner) => {
    console.log('자식으로부터 받은 값', banner)
    const newBanners = [...banners, banner]
    setBanners(newBanners)

    // window.localStorage.setItem('BANNERS', JSON.stringify(newBanners))
  }
  return (
    <div>
      <Form onAddBanner={handleAddBanner} />
      <Banners banners={banners} />
    </div>
  )
}
export default BannerCreatePage
