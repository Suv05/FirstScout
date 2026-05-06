import { NextResponse } from 'next/server'

const BASE_URL = 'https://www.firstskout.com'

export async function GET() {
  const content = `# firstskout.com

> FirstSkout is a leading influencer marketing agency that connects brands with the right creators in real time. No guesswork, no middlemen — just fast, results-driven campaigns handled end to end.

## Home

[FirstSkout - A Global Influencer Marketing Agency](${BASE_URL})

## Blog

[FirstSkout Blog](${BASE_URL}/blog)

## About Us

[About FirstSkout](${BASE_URL}/about-us)

## Creators

[FirstSkout Creators](${BASE_URL}/creators)

## Tools

[FirstSkout Tools](${BASE_URL}/tools)

## Appointment

[Book an Appointment](${BASE_URL}/appointment)

## Legal

[FirstSkout Legal](${BASE_URL}/legal)
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}