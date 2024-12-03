'use client'
import { Card, CardContent } from "@/components/ui/card"
import AnimatedCarousel from "./ui/AnimatedCarousel"

export default function TestCom(): JSX.Element {
  const carouselItems = [
    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    { id: 4, title: 'Card 4', content: 'Content for Card 4' },
    { id: 5, title: 'Card 5', content: 'Content for Card 5' },
    { id: 6, title: 'Card 6', content: 'Content for Card 6' },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-8">Swiper-like Carousel</h1>
      <AnimatedCarousel>
        {carouselItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </AnimatedCarousel>
  </main>
  )
}

