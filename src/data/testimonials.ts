export type Testimonial = {
  name: string;
  role: string;
  photo: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Cole",
    role: "Vocalist, Hollow Static",
    photo: "/images/testimonials/client-1.svg",
    rating: 5,
    quote:
      "Artemis Production took our EP from rough demos to something that sounds like it belongs on a major label roster. The mix breathes in ways I didn't think our songs could.",
  },
  {
    name: "Simone Rae",
    role: "R&B Recording Artist",
    photo: "/images/testimonials/client-2.svg",
    rating: 5,
    quote:
      "The vocal chain and comping work were flawless. I've worked with engineers in three countries and this was the smoothest, most musical session I've had.",
  },
  {
    name: "Dana Whitfield",
    role: "Showrunner, Northlight Studios",
    photo: "/images/testimonials/client-3.svg",
    rating: 5,
    quote:
      "Our broadcast delivery has never come back with notes since we started working together. Meticulous, fast, and always hits spec on the first pass.",
  },
  {
    name: "Jonah Pierce",
    role: "Guitarist, Iron Veil",
    photo: "/images/testimonials/client-4.svg",
    rating: 5,
    quote:
      "Heaviest mix we've ever had on a record, and it still translates on a phone speaker. That's the mark of someone who actually understands metal production.",
  },
  {
    name: "Renée Alvarez",
    role: "Festival Production Manager",
    photo: "/images/testimonials/client-5.svg",
    rating: 5,
    quote:
      "Ran FOH across a three-day festival with zero surprises. Calm under pressure, fast on changeovers, and every act sounded like themselves.",
  },
];
