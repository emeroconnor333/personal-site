import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
            {
                src: "/photos/hack-trinity.jpg",
                alt: "Hack Trinity",
            },
            {
                src: "/photos/college-picnic.jpg",
                 alt: "College Picnic",
            },
            {
                src: "/photos/college-picnic2.jpg",
                 alt: "College Picnic 2",
            },
            {
                src: "/photos/achill-beach-at-night.jpg",
                alt: "Achill beach at night",
            },
            {
                src: "/photos/amsterdam-mosaic.jpg",
                alt: "Amsterdam mosaic",
            },
            {
                src: "/photos/amsterdam-lego-store.jpg",
                alt: "Amsterdam Lego store",
            },
            {
                src: "/photos/vondelpark.jpg",
                alt: "Vondelpark",
            },
            {
                src: "/photos/amsterdam-sketch.jpg",
                alt: "Amsterdam sketch",
            },
            {
                src: "/photos/amsterdam-canal.jpg",
                alt: "Amsterdam canal",
            },
            {
                src: "/photos/the-now-building.jpg",
                alt: "The now building",
            },
            {
                src: "/photos/victoria-and-albert-museum.jpg",
                alt: "Victoria and Albert museum",
            },
            {
                src: "/photos/london-underground.jpg",
                alt: "London underground",
            },
            {
                src: "/photos/plane-window.jpg",
                alt: "Plane window",
            },
            {
                src: "/photos/rainbow-street.jpg",
                alt: "Rainbow street",
            },
            {
                src: "/photos/roverway-concert.jpg",
                alt: "Roverway concert",
            },
            {
                src: "/photos/norway-lake.jpg",
                alt: "Norway lake",
            },
            {
                src: "/photos/norway-camping.jpg",
                alt: "Norway camping",
            },
            {
                src: "/photos/albufeira-beach.jpg",
                alt: "Albufeira beach",
            },
            {
                src: "/photos/national-gallery-ireland.jpg",
                alt: "National Gallery Ireland",
            },
            {
                src: "/photos/dogs-with-stick.jpg",
                alt: "Dogs with stick",
            },
            {
                src: "/photos/red-cows.jpg",
                alt: "Cowst",
            },
        ]}
      />
    </section>
  );
}
