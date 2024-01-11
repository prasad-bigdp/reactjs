import React,{useContext} from 'react'
import Slider from 'react-slick'
import myContext from "../../context/data/myContext"


  function HeroSection ()
  {
    const { Slider_settings } = useContext(myContext)

    return (
			<Slider {...Slider_settings}>
				<div>
				<p>hi</p>
				</div>
				<div>
					<img
						src='https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						src='https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						src='https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
						alt=''
					/>
				</div>
			</Slider>
		)
}

export default HeroSection