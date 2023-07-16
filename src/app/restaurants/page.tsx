'use client'
import SearchBar from '../components/search-bar/search-bar'
import RestaurantCard from '../components/restaurant-card/restaurant-card';
import styles from './page.module.css'
import Button from '../components/button/button'
import Footer from '../components/footer/footer';
import DetailButton from '../components/detail-button/detail-button';
import { useRouter } from 'next/navigation'

type restaurant = {
    name: string,
    address: string,
    open: string,
    close: string,
    numOfEmployee: number,
    imageUrl?: string
}

const data: restaurant[] = [
    {
        name: "restaurant1",
        address: "Shibuya, Tokyo",
        open: "10:00 - 20:00",
        close: "Sunday",
        numOfEmployee: 5,
        imageUrl: "/sample/restaurants/cafe.png"
    },
    {
        name: "restaurant2",
        address: "Shinjuku, Tokyo",
        open: "9:00 - 21:00",
        close: "Monday",
        numOfEmployee: 3,
        imageUrl: "/sample/restaurants/coffee.png"
    },
    {
        name: "restaurant3",
        address: "Shinagawa, Tokyo",
        open: "8:00 - 22:00",
        close: "Tuesday",
        numOfEmployee: 7,
        imageUrl: "/sample/restaurants/starbacks.png"
    },
    {
        name: "restaurant4",
        address: "Asakusa, Tokyo",
        open: "7:00 - 23:00",
        close: "Wednesday",
        numOfEmployee: 2,
        imageUrl: "/sample/restaurants/gyoza.png"
    }
]

export default function Restaurants() {
    const router = useRouter();
    
    const handleCardClick = (restaurantName: string) => {
        router.push(`/waiters`);
    }
    
    return (
        <main className={styles.container}>
            <SearchBar />
            <div className={styles.list}>
                {data.map((restaurant, index) => (
                    <RestaurantCard
                        key={index}
                        name={restaurant.name}
                        address={restaurant.address}
                        open={restaurant.open}
                        close={restaurant.close}
                        numOfEmployee={restaurant.numOfEmployee}
                        imageUrl={restaurant.imageUrl}
                        onClick={() => handleCardClick(restaurant.name)} 
                    />
                ))}
            </div>
            {/* <DetailButton onClick={handleButtonClick} /> */}
            <Footer />
        </main>
    )
}
