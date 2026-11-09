import React from 'react'
import styled from 'styled-components'
import useGetLastPost from 'hooks/use-get-last-post'

// Shown until the latest story is fetched, or if the request fails
const fallbackStory = {
  title: 'How SERVICE-REISEN Modernized a 30-Year-Old Travel Platform with Traefik Hub',
  slug: 'service-reisen-case-study',
  feature_image:
    'https://storage.ghost.io/c/9f/0d/9f0dcb4f-3eeb-4186-b453-8ff9bae963b2/content/images/2026/09/service-reisen-logo.jpg',
}

const SuccessStoryCard = () => {
  const post = useGetLastPost('success-stories')
  const story = post?.slug ? post : fallbackStory

  return (
    <Card>
      <a href={`https://traefik.io/success-stories/${story.slug}`}>
        {story.feature_image && <img src={story.feature_image} alt="" loading="lazy" />}
        <p>{story.title}</p>
      </a>
    </Card>
  )
}

const Card = styled.div`
  margin-top: 24px;
  padding: 16px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  a {
    display: block;
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
    max-width: 170px;
    height: auto;
    margin: 0 auto;
    object-fit: cover;
    transition: transform 0.3s;
  }

  p {
    margin: 16px 0 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.33;
    color: #03192d;
  }

  a:hover img {
    transform: scale(1.05);
  }
`

export default SuccessStoryCard
