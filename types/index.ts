export interface PropertyProps {
  title: string,
  location: string,
  beds : number,
  bathRooms : number,
  type: string,
  images: string[] 
}

export type TestimonialProps = {
  name : string,
  title: string,
  rating  : number,
  testimony: string
}