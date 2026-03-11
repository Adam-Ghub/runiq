import { Metadata } from 'next'
import React from 'react'
import Progress from './_components/Progress'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Vybavení pro běh | Runiq',
  description: 'Tipy na běžecké vybavení – boty, oblečení, hodinky a doplňky pro začátečníky i pokročilé běžce.',
  alternates: {
    canonical: 'https://runiq.me/vybaveni',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Domů',
      item: 'https://runiq.me',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Vybavení',
      item: 'https://runiq.me/vybaveni',
    },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Progress />
    </>
  )
}
